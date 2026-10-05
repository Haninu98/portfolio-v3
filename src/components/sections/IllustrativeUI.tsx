"use client";

import { ProjectItem } from "@/lib/data";

export default function IllustrativeUI({
  type,
}: {
  type: ProjectItem["illustrativeType"];
}) {
  switch (type) {
    case "signaling_dashboard":
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 flex flex-col justify-between border border-zinc-800 shadow-inner select-none">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px]">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              CBTC // GOA4 AUTO-PILOT
            </span>
            <span className="text-zinc-500">LINE M2 • SECTOR 04</span>
          </div>

          {/* Signaling Track Blocks */}
          <div className="my-auto py-3 space-y-3">
            <div className="flex items-center justify-between text-[10px] text-zinc-400">
              <span>BLOCK 104-A: OCCUPIED</span>
              <span>INTERLOCK: SAFE</span>
              <span>TARGET SPEED: 70 KM/H</span>
            </div>

            {/* Track diagram */}
            <div className="relative h-9 bg-zinc-900 rounded-md border border-zinc-800 flex items-center px-3 gap-2">
              <div className="h-0.5 flex-1 bg-zinc-700 relative">
                {/* Simulated Train Icon */}
                <div className="absolute left-[38%] -top-2 px-1.5 py-0.5 rounded-xs bg-zinc-100 text-zinc-950 text-[9px] font-bold shadow-xs">
                  TRAIN 402
                </div>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
            </div>

            {/* Telemetry row */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-1.5 rounded-sm bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 block text-[9px]">BRAKE EFFORT</span>
                <span className="font-semibold text-zinc-200">100% OK</span>
              </div>
              <div className="p-1.5 rounded-sm bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 block text-[9px]">RADIO LATENCY</span>
                <span className="font-semibold text-zinc-200">12 ms</span>
              </div>
              <div className="p-1.5 rounded-sm bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 block text-[9px]">ODOMETRY DRIFT</span>
                <span className="font-semibold text-emerald-400">0.02%</span>
              </div>
            </div>
          </div>

          {/* Bottom Stamp */}
          <div className="border-t border-zinc-800 pt-2 flex items-center justify-between text-[9px] text-zinc-500">
            <span>ALSTOM CCB BASELINE 4.2</span>
            <span>SIL4 CENELEC EN 50128</span>
          </div>
        </div>
      );

    case "train_telemetry":
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 flex flex-col justify-between border border-zinc-800 shadow-inner select-none">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px]">
            <span className="text-amber-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              RER NG LIVE TELEMETRY
            </span>
            <span className="text-zinc-500">CATENARY 25kV AC</span>
          </div>

          <div className="my-auto py-3 grid grid-cols-2 gap-3">
            <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 space-y-1">
              <span className="text-[9px] text-zinc-500 block">BCU BRAKE ECU</span>
              <div className="text-sm font-bold text-zinc-100">FLASHED v3.8</div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-full" />
              </div>
            </div>
            <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 space-y-1">
              <span className="text-[9px] text-zinc-500 block">TDD RECORD UNIT</span>
              <div className="text-sm font-bold text-zinc-100">LOGGING OK</div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[94%]" />
              </div>
            </div>
            <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 space-y-1">
              <span className="text-[9px] text-zinc-500 block">DAD DOOR DETECT</span>
              <div className="text-sm font-bold text-zinc-100">VERIFIED</div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-full" />
              </div>
            </div>
            <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 space-y-1">
              <span className="text-[9px] text-zinc-500 block">NET BOX GW</span>
              <div className="text-sm font-bold text-zinc-100">CAN 2.0B SYNC</div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[98%]" />
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-2 flex items-center justify-between text-[9px] text-zinc-500">
            <span>CHARGÉ DE TRAVAUX (B2V, BR, BC)</span>
            <span>COMMISSIONING PASS</span>
          </div>
        </div>
      );

    case "pipeline_status":
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 flex flex-col justify-between border border-zinc-800 shadow-inner select-none">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px]">
            <span className="text-blue-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              GITLAB CI/CD PIPELINE
            </span>
            <span className="text-zinc-500">JOB #19820-AUDIT</span>
          </div>

          <div className="my-auto py-2 space-y-2">
            <div className="flex items-center justify-between p-2 rounded-md bg-zinc-900 border border-zinc-800 text-[10px]">
              <span className="text-zinc-300">1. JIRA REST Ingestion</span>
              <span className="text-emerald-400 font-bold">✓ 3.2s</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-md bg-zinc-900 border border-zinc-800 text-[10px]">
              <span className="text-zinc-300">2. Pandas Threat Modeling</span>
              <span className="text-emerald-400 font-bold">✓ 8.4s</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-md bg-zinc-900 border border-zinc-800 text-[10px]">
              <span className="text-zinc-300">3. ISO 26262 Matrix Mapping</span>
              <span className="text-emerald-400 font-bold">✓ 1.1s</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-md bg-zinc-900 border border-zinc-800 text-[10px]">
              <span className="text-zinc-300">4. Executive PDF Dashboard</span>
              <span className="text-emerald-400 font-bold">✓ 2.0s</span>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-2 flex items-center justify-between text-[9px] text-zinc-500">
            <span>RENAULT GUYANCOURT</span>
            <span className="text-emerald-400">TOTAL: 14.7s (was 2 wks)</span>
          </div>
        </div>
      );

    case "matrix_grid":
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 flex flex-col justify-between border border-zinc-800 shadow-inner select-none">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px]">
            <span className="text-purple-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              DOORS DXL TRACEABILITY ENGINE
            </span>
            <span className="text-zinc-500">ISO 26262 ASIL-D</span>
          </div>

          <div className="my-auto py-2">
            <div className="border border-zinc-800 rounded-md overflow-hidden text-[10px]">
              <div className="grid grid-cols-4 bg-zinc-900 p-1.5 text-zinc-400 font-semibold border-b border-zinc-800">
                <span>REQ ID</span>
                <span>SYS MOD</span>
                <span>CODE REF</span>
                <span>STATUS</span>
              </div>
              <div className="grid grid-cols-4 p-1.5 border-b border-zinc-800/60 text-zinc-300">
                <span>REQ-201</span>
                <span>BRAKE_CTRL</span>
                <span>bcu_task.c</span>
                <span className="text-emerald-400">LINKED</span>
              </div>
              <div className="grid grid-cols-4 p-1.5 border-b border-zinc-800/60 text-zinc-300">
                <span>REQ-202</span>
                <span>FAIL_SAFE</span>
                <span>watchdog.c</span>
                <span className="text-emerald-400">LINKED</span>
              </div>
              <div className="grid grid-cols-4 p-1.5 text-zinc-300">
                <span>REQ-203</span>
                <span>CAN_SEC</span>
                <span>can_auth.c</span>
                <span className="text-emerald-400">LINKED</span>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-2 flex items-center justify-between text-[9px] text-zinc-500">
            <span>DISCREPANCIES DETECTED: 0</span>
            <span className="text-emerald-400">AUDIT PASS 100%</span>
          </div>
        </div>
      );

    case "hardware_board":
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 flex flex-col justify-between border border-zinc-800 shadow-inner select-none">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px]">
            <span className="text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              EMBEDDED HARDWARE LAYOUT
            </span>
            <span className="text-zinc-500">STM32 / ARDUINO MCU</span>
          </div>

          <div className="my-auto py-2 flex items-center justify-center">
            {/* PCB Graphic Board */}
            <div className="w-full max-w-[280px] h-28 bg-emerald-950/60 border border-emerald-700/60 rounded-lg p-2.5 relative flex items-center justify-between">
              {/* MCU Chip */}
              <div className="w-14 h-14 bg-zinc-900 border-2 border-zinc-600 rounded-sm flex flex-col items-center justify-center text-[8px] text-zinc-200">
                <span className="font-bold">ARM 32</span>
                <span className="text-[7px] text-zinc-500">STM32</span>
              </div>

              {/* PCB traces */}
              <div className="flex-1 px-3 flex flex-col justify-around h-full py-2">
                <div className="h-[1px] bg-emerald-500/70 w-full" />
                <div className="h-[1px] bg-emerald-500/70 w-3/4" />
                <div className="h-[1px] bg-emerald-500/70 w-full" />
              </div>

              {/* Power Driver & Cutoff Relays */}
              <div className="space-y-1.5 text-right">
                <div className="px-2 py-1 rounded-xs bg-zinc-900 border border-zinc-700 text-[8px] text-zinc-300">
                  BMS RELAY
                </div>
                <div className="px-2 py-1 rounded-xs bg-zinc-900 border border-zinc-700 text-[8px] text-zinc-300">
                  H-BRIDGE
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-2 flex items-center justify-between text-[9px] text-zinc-500">
            <span>FMEA / AMDEC HAZARD VERIFIED</span>
            <span className="text-emerald-400">99% RELIABILITY</span>
          </div>
        </div>
      );

    case "sensor_graph":
      return (
        <div className="w-full h-full min-h-[220px] rounded-xl bg-zinc-950 p-4 font-mono text-[11px] text-zinc-300 flex flex-col justify-between border border-zinc-800 shadow-inner select-none">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px]">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SOLAR IOT TELEMETRY NODE
            </span>
            <span className="text-zinc-500">FREE-RTOS + SQL</span>
          </div>

          <div className="my-auto py-2 space-y-2">
            {/* SVG Telemetry Curve */}
            <div className="h-16 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">
                <path
                  d="M0,45 Q25,20 50,30 T100,20 T150,35 T200,15"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                <circle cx="200" cy="15" r="3" fill="#10b981" />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-1 rounded-sm bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 block text-[8px]">HIVE TEMP</span>
                <span className="font-semibold text-zinc-200">34.8 °C</span>
              </div>
              <div className="p-1 rounded-sm bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 block text-[8px]">HUMIDITY</span>
                <span className="font-semibold text-zinc-200">58% RH</span>
              </div>
              <div className="p-1 rounded-sm bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 block text-[8px]">WEIGHT</span>
                <span className="font-semibold text-emerald-400">22.4 KG</span>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-2 flex items-center justify-between text-[9px] text-zinc-500">
            <span>BATTERY: 100% (SOLAR CHARGED)</span>
            <span>24/7 CONTINUOUS</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
