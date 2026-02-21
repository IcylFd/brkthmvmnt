/*
 * @Date: 2026-02-13 20:22:43
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-02-21 20:41:16
 */
"use client";

import React from "react";
import { StarIcon } from "@/components/StarIcon";

const CONTACT_LINKS = [
  {
    name: "Instagram",
    handle: "@breakthemovement",
    url: "https://www.instagram.com/breakthemovement?igsh=eWgxb2Z1d2N2Y2k1&utm_source=qr",
  },
  {
    name: "Email",
    handle: "brkthmvmnt@gmail.com",
    url: "mailto:brkthmvmnt@gmail.com",
  },
  {
    name: "YouTube",
    handle: "@breakthemovement",
    url: "https://youtube.com/@breakthemovement?si=FZEvH8-EaVXTdeh5",
  },
];

export default function ContactPage() {
  return (
    <main className="relative max-h-screen bg-[#f5f5f5] text-black pt-20 md:pt-32 pb-20 px-6 md:px-20 lg:px-32 relative overflow-hidden">
      {/* 装饰性大星星，放在角落作为底纹 */}
      <StarIcon
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] text-black/[0.03] pointer-events-none"
        strokeWidth={0.5}
        color="#ddd"
      />
      <StarIcon
        className="absolute top-0 -left-50 w-[400px] h-[400px] text-black/[0.03] pointer-events-none"
        strokeWidth={0.5}
        color="#ddd"
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start">
        {/* 超大标题 */}
        <h1 className="text-xl uppercase md:text-[4rem] font-serif leading-none tracking-tighter mb-12 md:mb-20">
          Contact
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* 左侧：描述文字 */}
          <div className="space-y-8">
            <h3 className="text-xs font-black tracking-[0.4em] uppercase text-gray-400">
              Collaboration / Inquiries
            </h3>
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed max-w-md">
              Available for international workshops, performance directing, and
              movement consultancy.
            </p>
          </div>

          {/* 右侧：社交链接列表 */}
          <div className="flex flex-col space-y-12 md:space-y-16">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col space-y-2 border-b border-black/10 pb-6 transition-all duration-500 hover:border-black"
              >
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 group-hover:text-black transition-colors">
                    {link.name}
                  </span>
                  <span className="text-xl group-hover:translate-x-2 transition-transform duration-500">
                    →
                  </span>
                </div>
                <span className="text-xl md:text-2xl font-serif tracking-tight lowercase">
                  {link.handle}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-40 text-[10px] tracking-[0.6em] uppercase text-gray-400">
          Stay in movement / 2026
        </div>
      </div>
    </main>
  );
}
