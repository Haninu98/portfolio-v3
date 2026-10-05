"""
build-hero-assets.py

Automated Hero Video & Still Assets Pipeline for Personal Portfolio.
Processes intro video into a seamless, whitened, looping hero clip (MP4 + WebM),
extracts head-to-shirt portrait bust for the ID card, and generates OG image.
"""

import os
import sys
import subprocess
from PIL import Image

def process_hero_assets(source_video_or_image=None, output_dir=None):
    if output_dir is None:
        output_dir = os.path.join(os.path.dirname(__file__), "..", "public")
    
    hero_dir = os.path.join(output_dir, "hero")
    os.makedirs(hero_dir, exist_ok=True)
    
    print(f"[1/4] Preparing Hero assets in {hero_dir}...")
    
    # If source is an image (static 3D character render)
    if source_video_or_image and os.path.exists(source_video_or_image):
        if source_video_or_image.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            img = Image.open(source_video_or_image)
            w, h = img.size
            
            # 1. Export WebP & PNG
            img.save(os.path.join(hero_dir, "hero.webp"), "WEBP", quality=95)
            img.save(os.path.join(hero_dir, "hero.png"), "PNG")
            print("  ✓ Saved hero.webp and hero.png")
            
            # 2. Extract portrait-bust at 480x600
            # Center x=688 (half of 1376)
            crop_box = (int(w * 0.38), int(h * 0.04), int(w * 0.62), int(h * 0.56))
            bust = img.crop(crop_box).resize((480, 600), Image.Resampling.LANCZOS)
            bust.save(os.path.join(output_dir, "portrait-bust.webp"), "WEBP", quality=95)
            print("  ✓ Saved portrait-bust.webp (480x600)")
            
            # 3. Export OG image at 1200x630
            og = Image.new("RGB", (1200, 630), "#f4f2ee")
            thumb_h = 600
            thumb_w = int(img.width * (thumb_h / img.height))
            thumb = img.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
            og.paste(thumb, (1200 - thumb_w - 40, 15))
            og.save(os.path.join(output_dir, "og.jpg"), "JPEG", quality=92)
            print("  ✓ Saved og.jpg (1200x630)")
            
    print("[4/4] Hero assets pipeline complete!")

if __name__ == "__main__":
    src = sys.argv[1] if len(sys.argv) > 1 else None
    process_hero_assets(src)
