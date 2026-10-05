import os
import math
import numpy as np
import cv2
from PIL import Image
import imageio_ffmpeg
import subprocess

def create_hero_video():
    base_dir = r"c:\Users\529495\Desktop\CV\portfolio-v3"
    hero_img_path = os.path.join(base_dir, "public", "hero", "hero.png")
    audio_path = os.path.join(base_dir, "public", "hero", "hero_intro.mp3")
    out_mp4 = os.path.join(base_dir, "public", "hero", "hero.mp4")
    out_webm = os.path.join(base_dir, "public", "hero", "hero.webm")
    temp_raw_avi = os.path.join(base_dir, "public", "hero", "temp_raw.mp4")

    print(f"Loading image from {hero_img_path}")
    src_img = Image.open(hero_img_path).convert("RGBA")

    # Target frame dimension: 768x960 (ratio 768/960 as mandated by guide)
    W, H = 768, 960

    # Resize source image while maintaining aspect ratio and centering
    # Pure white canvas
    canvas = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    
    # Calculate fit
    scale = min(W / src_img.width, (H - 40) / src_img.height)
    new_w = int(src_img.width * scale)
    new_h = int(src_img.height * scale)
    resized_char = src_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    offset_x = (W - new_w) // 2
    offset_y = H - new_h - 20 # resting near bottom with margin
    canvas.paste(resized_char, (offset_x, offset_y), resized_char)

    # Convert to OpenCV RGB numpy array
    base_frame = np.array(canvas.convert("RGB"))

    # Also make sure background is pure white
    # Anything very close to white (>248) turns to 255
    mask_white = np.all(base_frame > 248, axis=-1)
    base_frame[mask_white] = [255, 255, 255]

    # Duration of audio is ~11.45s
    fps = 30
    duration = 11.45
    total_frames = int(fps * duration)
    print(f"Generating {total_frames} animated frames at {fps} fps ({duration}s)...")

    # Head & face region estimation for subtle talking / blinking
    # Person is centered: head is roughly at y: 120 to 340, x: W//2 - 90 to W//2 + 90
    head_cx = W // 2
    head_cy = offset_y + int(new_h * 0.18)
    mouth_y = head_cy + int(new_h * 0.05)
    mouth_x = head_cx

    # Setup OpenCV video writer
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    writer = cv2.VideoWriter(temp_raw_avi, fourcc, fps, (W, H))

    for i in range(total_frames):
        t = i / fps
        # 1. Subtle breathing: gentle vertical dilation & chest rise
        # Breathing period: ~3.8 seconds
        breath = math.sin(t * 2 * math.pi / 3.8) * 2.0 # 2px oscillation

        # 2. Subtle weight shifting & micro head tilt
        # Slow sway: ~5.5s period
        sway_x = math.sin(t * 2 * math.pi / 5.5) * 1.5
        tilt_deg = math.sin(t * 2 * math.pi / 4.2) * 0.4

        # 3. Blinking: brief blink every ~3.6s for 4 frames (0.13s)
        blink_cycle = t % 3.6
        is_blinking = blink_cycle < 0.13

        # 4. Talking motion (mouth movement)
        # Speech cycles at syllables: 3-5 Hz modulated by speech timing
        speech_active = (0.3 < t < 10.8) # active speaking duration
        talk_open = 0.0
        if speech_active:
            # Multi-frequency syllable cadence
            s1 = math.sin(t * 2 * math.pi * 3.8)
            s2 = math.cos(t * 2 * math.pi * 5.2)
            talk_open = max(0.0, (s1 + s2 * 0.6)) * 3.5

        # Create animated frame by applying micro affine transformation
        M = cv2.getRotationMatrix2D((head_cx, H), tilt_deg, 1.0)
        M[0, 2] += sway_x
        M[1, 2] -= breath

        frame = cv2.warpAffine(base_frame, M, (W, H), borderMode=cv2.BORDER_CONSTANT, borderValue=(255, 255, 255))

        # Apply subtle mouth opening animation during active speech
        if speech_active and talk_open > 0.8:
            # Elliptical subtle mouth shift
            my = int(mouth_y - breath)
            mx = int(mouth_x + sway_x)
            cv2.ellipse(frame, (mx, my), (int(5 + talk_open), int(1.5 + talk_open * 0.8)), 0, 0, 360, (180, 80, 70), -1)
            cv2.ellipse(frame, (mx, my), (int(4 + talk_open * 0.8), int(talk_open * 0.5)), 0, 0, 360, (70, 25, 25), -1)

        # Apply subtle eyelid blink
        if is_blinking:
            eye_y = int(head_cy - 10 - breath)
            eye_x_l = int(head_cx - 24 + sway_x)
            eye_x_r = int(head_cx + 24 + sway_x)
            # Draw thin curved eyelid line over eyes
            cv2.ellipse(frame, (eye_x_l, eye_y), (14, 4), 0, 0, 180, (70, 45, 35), 3)
            cv2.ellipse(frame, (eye_x_r, eye_y), (14, 4), 0, 0, 180, (70, 45, 35), 3)

        # Convert RGB to BGR for OpenCV
        bgr_frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)
        writer.write(bgr_frame)

    writer.release()
    print("Raw video animation frames generated successfully.")

    # Now use ffmpeg to merge audio and encode MP4 and WEBM
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

    # 1. MP4 (H.264 + AAC + faststart)
    cmd_mp4 = [
        ffmpeg, "-y",
        "-i", temp_raw_avi,
        "-i", audio_path,
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-crf", "22",
        "-preset", "medium",
        "-c:a", "aac",
        "-b:a", "96k",
        "-movflags", "+faststart",
        "-shortest",
        out_mp4
    ]
    print("Encoding hero.mp4...")
    subprocess.run(cmd_mp4, check=True)
    print(f"Wrote {out_mp4}")

    # 2. WEBM (VP9 + Opus)
    cmd_webm = [
        ffmpeg, "-y",
        "-i", temp_raw_avi,
        "-i", audio_path,
        "-c:v", "libvpx-vp9",
        "-crf", "32",
        "-b:v", "0",
        "-c:a", "libopus",
        "-b:a", "80k",
        "-shortest",
        out_webm
    ]
    print("Encoding hero.webm...")
    subprocess.run(cmd_webm, check=True)
    print(f"Wrote {out_webm}")

    # Clean up temp
    if os.path.exists(temp_raw_avi):
        os.remove(temp_raw_avi)
    print("Hero video generation complete!")

if __name__ == "__main__":
    create_hero_video()
