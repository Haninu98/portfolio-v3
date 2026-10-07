"use client";

import React from "react";

interface TechLogoProps {
  name: string;
  symbol: string;
  className?: string;
}

export default function TechLogo({ name, symbol, className = "w-32 h-32" }: TechLogoProps) {
  switch (symbol) {
    case "Py":
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path
            d="M63.4 3c-33 0-31 14.3-31 14.3l.03 14.8h31.6v4.5H19.7S3 34.8 3 67.8c0 33.1 14.5 31.9 14.5 31.9h8.6V87.2s-.5-14.5 14.3-14.5h31.3s13.8.2 13.8-13.7V34.8S86.7 3 63.4 3zm-9.3 9.4c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1 2.3-5.1 5.1-5.1z"
            fill="#3776AB"
          />
          <path
            d="M64.6 125c33 0 31-14.3 31-14.3l-.03-14.8H64v-4.5h44.3s16.7 1.8 16.7-31.2c0-33.1-14.5-31.9-14.5-31.9h-8.6v12.5s.5 14.5-14.3 14.5H56.3s-13.8-.2-13.8 13.7v24.2s-1.2 31.8 22.1 31.8zm9.3-9.4c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1z"
            fill="#FFD43B"
          />
        </svg>
      );

    case "C":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path
            d="M116.5 89.2c-5.7 12.2-15 22.1-26.6 28.5-11.6 6.4-24.9 9.1-38.2 7.7-13.3-1.4-25.9-7.4-36.1-17.2-10.2-9.8-16.9-22.7-19.1-36.6-2.2-13.9.7-28 8.3-40.2 7.6-12.2 18.9-21.5 32.2-26.4 13.3-4.9 27.9-5.1 41.3-.5 13.4 4.6 24.8 13.7 32.4 25.8l-18.4 11.5c-5.3-8.5-13.2-14.8-22.5-18-9.3-3.2-19.5-3.1-28.8.3-9.3 3.4-17.1 9.9-22.4 18.4-5.3 8.5-7.3 18.4-5.8 28.1s6.2 18.8 13.3 25.6c7.1 6.8 15.9 11 25.2 12 9.3 1 18.6-.9 26.7-5.4 8.1-4.5 14.6-11.4 18.6-19.9l18.2 10z"
            fill="#00599C"
          />
        </svg>
      );

    case "Cp":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M64 5.3 14 34.2v57.8l50 28.9 50-28.9V34.2L64 5.3z" fill="#00599C" />
          <path d="M64 16.8l39.9 23v46.2L64 109.2 24.1 86V39.8L64 16.8z" fill="#004482" />
          <path
            d="M75 50.8c-2.4-5-6.3-9.1-11.2-11.8s-10.5-3.7-16.1-3.2c-5.6.5-10.9 3-15.2 7.1s-7.1 9.4-8.1 15.1c-1 5.7.3 11.6 3.5 16.5s8 8.8 13.5 10.9c5.6 2 11.7 2.1 17.4.2s10.5-5.6 13.7-10.6l-10.4-5.7c-2.1 3.2-5.2 5.6-8.9 6.8-3.7 1.2-7.6 1.1-11.2-.2-3.6-1.3-6.6-3.8-8.7-7-2-3.2-2.9-7-2.3-10.7s2.5-7.2 5.3-9.8c2.8-2.6 6.3-4.2 10-4.5 3.7-.3 7.3.7 10.4 2.8 3.1 2.1 5.6 5.1 7.2 8.6L75 50.8z"
            fill="#ffffff"
          />
          <path
            d="M87.5 59.5h-5.2v-5.2h-3.5v5.2h-5.2v3.5h5.2v5.2h3.5v-5.2h5.2v-3.5zm19.2 0h-5.2v-5.2H98v5.2h-5.2v3.5H98v5.2h3.5v-5.2h5.2v-3.5z"
            fill="#ffffff"
          />
        </svg>
      );

    case "St":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill="#03234B" />
          <path
            d="M28 40h42c9 0 16 6 16 14s-7 14-16 14H46v24H28V40zm18 14v14h24c4 0 7-3 7-7s-3-7-7-7H46z"
            fill="#00B2A9"
          />
          <text
            x="64"
            y="108"
            fontFamily="monospace"
            fontSize="18"
            fontWeight="bold"
            fill="#ffffff"
            textAnchor="middle"
          >
            STM32
          </text>
        </svg>
      );

    case "Gt":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path
            d="M124.6 57.5 70.5 3.4c-4.5-4.5-11.8-4.5-16.3 0L3.4 57.5c-4.5 4.5-4.5 11.8 0 16.3l54.1 54.1c4.5 4.5 11.8 4.5 16.3 0l50.8-50.8c4.5-4.5 4.5-11.8 0-16.3l-2.6-2.6z"
            fill="#F05032"
          />
          <path
            d="M62.6 63.8v-18c2.9-1.5 4.9-4.5 4.9-8.1 0-5-4.1-9.1-9.1-9.1-5 0-9.1 4.1-9.1 9.1 0 3.6 2 6.6 4.9 8.1v17.4c-2.9 1.5-4.9 4.5-4.9 8.1 0 3.3 1.7 6.1 4.3 7.6v23.2c-2.5 1.5-4.3 4.3-4.3 7.6 0 5 4.1 9.1 9.1 9.1 5 0 9.1-4.1 9.1-9.1 0-3.3-1.7-6.1-4.3-7.6V71.4c2.6-1.5 4.4-4.4 4.4-7.6z"
            fill="#ffffff"
          />
        </svg>
      );

    case "Gl":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path d="M64 121.2 96.5 21H31.5L64 121.2z" fill="#E24329" />
          <path d="M64 121.2 31.5 21H6.7l57.3 100.2z" fill="#FC6D26" />
          <path d="M6.7 21l-5.6 17.2c-.7 2.2 0 4.6 1.8 6L64 121.2 6.7 21z" fill="#FCA326" />
          <path d="M64 121.2 96.5 21h24.8L64 121.2z" fill="#FC6D26" />
          <path d="M121.3 21l5.6 17.2c.7 2.2 0 4.6-1.8 6L64 121.2 121.3 21z" fill="#FCA326" />
        </svg>
      );

    case "Jr":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <path
            d="M121.4 60.5 67.5 6.6c-4.5-4.5-11.7-4.5-16.2 0L3.8 54.1c-4.5 4.5-4.5 11.7 0 16.2l47.5 47.5c4.5 4.5 11.7 4.5 16.2 0l53.9-53.9c4.5-4.5 4.5-11.7 0-16.2z"
            fill="#0052CC"
          />
          <path
            d="M67.5 6.6c-4.5-4.5-11.7-4.5-16.2 0L39.8 18.1l26.2 26.2c6.3 6.3 16.4 6.3 22.7 0l6.9-6.9L67.5 6.6z"
            fill="#2684FF"
          />
        </svg>
      );

    case "Lx":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <circle cx="64" cy="64" r="58" fill="#FCC624" />
          <path
            d="M64 18c-14 0-25 11-25 25 0 8 3 15 9 20-1 4-3 10-5 15-3 8-7 14-7 19 0 9 13 14 28 14s28-5 28-14c0-5-4-11-7-19-2-5-4-11-5-15 6-5 9-12 9-20 0-14-11-25-25-25z"
            fill="#000000"
          />
          <ellipse cx="54" cy="40" rx="4" ry="7" fill="#ffffff" />
          <ellipse cx="74" cy="40" rx="4" ry="7" fill="#ffffff" />
          <circle cx="54" cy="41" r="3" fill="#000000" />
          <circle cx="74" cy="41" r="3" fill="#000000" />
          <polygon points="56,48 72,48 64,58" fill="#FFA500" />
        </svg>
      );

    case "Cb":
    case "Er":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill="#003580" />
          <path
            d="M32 96h64M44 96l8-64h24l8 64M48 48h32M45 72h38"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="64" cy="24" r="8" fill="#10B981" />
          <text
            x="64"
            y="116"
            fontFamily="monospace"
            fontSize="12"
            fontWeight="bold"
            fill="#A6D5FA"
            textAnchor="middle"
          >
            {symbol === "Cb" ? "CBTC GoA4" : "ERTMS L2"}
          </text>
        </svg>
      );

    case "Tp":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill="#005386" />
          {/* Dassault 3DEXPERIENCE Compass */}
          <circle cx="64" cy="64" r="42" stroke="#ffffff" strokeWidth="6" fill="none" />
          <polygon points="64,30 52,64 76,64" fill="#00B2A9" />
          <polygon points="64,98 52,64 76,64" fill="#E24329" />
          <circle cx="64" cy="64" r="6" fill="#ffffff" />
          <text
            x="64"
            y="118"
            fontFamily="monospace"
            fontSize="10"
            fontWeight="bold"
            fill="#ffffff"
            textAnchor="middle"
          >
            3DEXPERIENCE
          </text>
        </svg>
      );

    case "Dr":
    case "Dx":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill="#1F70C1" />
          <text
            x="64"
            y="54"
            fontFamily="sans-serif"
            fontSize="26"
            fontWeight="900"
            fill="#ffffff"
            textAnchor="middle"
          >
            DOORS
          </text>
          <text
            x="64"
            y="88"
            fontFamily="monospace"
            fontSize="18"
            fontWeight="bold"
            fill="#A6D5FA"
            textAnchor="middle"
          >
            DXL
          </text>
        </svg>
      );

    case "Mt":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill="#E16A27" />
          <path
            d="M24 74 Q 44 24, 64 64 T 104 54"
            fill="none"
            stroke="#ffffff"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <text
            x="64"
            y="108"
            fontFamily="sans-serif"
            fontSize="14"
            fontWeight="bold"
            fill="#ffffff"
            textAnchor="middle"
          >
            MATLAB
          </text>
        </svg>
      );

    case "Rt":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill="#1B4958" />
          <circle cx="64" cy="64" r="38" stroke="#00C0F3" strokeWidth="6" fill="none" />
          <path d="M48 64h32M64 48v32" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
          <text
            x="64"
            y="114"
            fontFamily="monospace"
            fontSize="11"
            fontWeight="bold"
            fill="#00C0F3"
            textAnchor="middle"
          >
            FreeRTOS
          </text>
        </svg>
      );

    case "Cn":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill="#202A37" />
          <path
            d="M28 64h20l12-24 16 48 12-24h12"
            stroke="#10B981"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <text
            x="64"
            y="110"
            fontFamily="monospace"
            fontSize="14"
            fontWeight="bold"
            fill="#ffffff"
            textAnchor="middle"
          >
            CAN Bus
          </text>
        </svg>
      );

    case "Is":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill="#831843" />
          <polygon
            points="64,24 96,44 96,84 64,104 32,84 32,44"
            stroke="#ffffff"
            strokeWidth="5"
            fill="none"
          />
          <text
            x="64"
            y="68"
            fontFamily="sans-serif"
            fontSize="14"
            fontWeight="900"
            fill="#ffffff"
            textAnchor="middle"
          >
            ISO 26262
          </text>
          <text
            x="64"
            y="82"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="bold"
            fill="#FBCFE8"
            textAnchor="middle"
          >
            ASIL-D
          </text>
        </svg>
      );

    case "Pd":
      return (
        <svg className={className} viewBox="0 0 128 128">
          <rect width="128" height="128" rx="28" fill="#150458" />
          <rect x="42" y="34" width="12" height="60" rx="3" fill="#ffffff" />
          <rect x="58" y="46" width="12" height="48" rx="3" fill="#E70488" />
          <rect x="74" y="58" width="12" height="36" rx="3" fill="#FFD43B" />
          <text
            x="64"
            y="114"
            fontFamily="sans-serif"
            fontSize="12"
            fontWeight="bold"
            fill="#ffffff"
            textAnchor="middle"
          >
            Pandas
          </text>
        </svg>
      );

    default:
      return (
        <div className={`${className} rounded-3xl bg-[#0d0d0d] text-white flex flex-col items-center justify-center p-4 shadow-xl border border-zinc-700`}>
          <span className="font-mono text-3xl font-extrabold tracking-tight">{symbol}</span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 mt-2 truncate max-w-full text-center">
            {name}
          </span>
        </div>
      );
  }
}
