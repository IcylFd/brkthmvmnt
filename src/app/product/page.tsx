"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "@/components/StarIcon";
import Flare from "@/assets/Flare.jpg";
import Helicoptero from "@/assets/Helicoptero.jpg";
import Windmill from "@/assets/Windmill.jpg";
import AirFlare from "@/assets/air_flare.jpg";
import ElbowFreeze from "@/assets/elbow_freeze.jpg";
import HeadFreeze from "@/assets/head_freeze.jpg";
import OnehandAdvance from "@/assets/onehand_advance.jpg";
import OnehandFreeze from "@/assets/onehand_freeze.jpg";
import Tips from "@/assets/1990tips.jpg";
import ScissorFlare from "@/assets/scissor_flare.jpg";
import Swipes from "@/assets/swipes.jpg";
import Turtle from "@/assets/turtle.jpg";
import Halo from "@/assets/halo.jpg";
import ChairFreeze from "@/assets/chair.jpg";
import Image from "next/image";

const TABS = [
  { id: "level1", levelTitle: "Level 1", title: "Movement Fundamentals" },
  { id: "level2", levelTitle: "Level 2", title: "Flow Moves, Basic Skills" },
  { id: "level3", levelTitle: "Level 3", title: "Next Level Moves" },
];

const EBOOKS = [
  {
    id: 1,
    title: "Flare",
    image: Flare,
    link: "https://www.shopier.com/brkthmvmnt/45629993",
    type: "Video",
    level: "level2",
  },
  {
    id: 2,
    title: "Helicoptero",
    image: Helicoptero,
    link: "https://www.shopier.com/brkthmvmnt/45630044",
    type: "Video",
    level: "level2",
  },
  {
    id: 3,
    title: "Windmill",
    image: Windmill,
    link: "https://www.shopier.com/brkthmvmnt/45630077",
    type: "Video",
    level: "level1",
  },
  {
    id: 4,
    title: "Air Flare",
    image: AirFlare,
    link: "https://www.shopier.com/brkthmvmnt/45740967",
    type: "Video",
    level: "level3",
  },
  {
    id: 5,
    title: "Elbow Freeze",
    image: ElbowFreeze,
    link: "https://www.shopier.com/brkthmvmnt/45741014",
    type: "Video",
    level: "level1",
  },
  {
    id: 6,
    title: "Head Freeze",
    image: HeadFreeze,
    link: "https://www.shopier.com/brkthmvmnt/45740999",
    type: "Video",
    level: "level1",
  },
  {
    id: 7,
    title: "One Hand Freeze",
    image: OnehandFreeze,
    link: "https://www.shopier.com/brkthmvmnt/45741032",
    type: "Video",
    level: "level1",
  },
  {
    id: 8,
    title: "Scissor Flare",
    image: ScissorFlare,
    link: "https://www.shopier.com/brkthmvmnt/45740981",
    type: "Video",
    level: "level3",
  },
  {
    id: 9,
    title: "Swipes",
    image: Swipes,
    link: "https://www.shopier.com/brkthmvmnt/45741166",
    type: "Video",
    level: "level2",
    status: "soon",
  },
  {
    id: 10,
    title: "One Hand Advance",
    image: OnehandAdvance,
    link: "https://www.shopier.com/brkthmvmnt/45741060",
    type: "Video",
    level: "level2",
  },
  {
    id: 11,
    title: "1990 Tips",
    image: Tips,
    link: "https://www.shopier.com/brkthmvmnt/45630077",
    type: "Video",
    level: "level3",
    status: "soon",
  },
  {
    id: 11,
    title: "Turtle Freeze",
    image: Turtle,
    link: "https://www.shopier.com/brkthmvmnt/45742497",
    type: "Video",
    level: "level1",
  },
  {
    id: 12,
    title: "Halo",
    image: Halo,
    link: "https://www.shopier.com/brkthmvmnt/45743776",
    type: "Video",
    level: "level3",
  },
  {
    id: 13,
    title: "Chair Freeze",
    image: ChairFreeze,
    link: "https://www.shopier.com/brkthmvmnt/45743938",
    type: "Video",
    level: "level1",
  },
];

export default function ProductPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("level1");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filtered = EBOOKS.filter((item) => item.level === activeTab);

  return (
    <div className="relative min-h-screen bg-black text-white pt-20 md:pt-32 pb-16 md:pb-20 px-6 sm:px-10 md:px-20 overflow-x-hidden">
      <StarIcon className="absolute -top-30 -right-30 md:-top-[90px] md:-right-[50px] w-60 h-100 md:w-100 md:h-150 text-white opacity-30 md:opacity-50 animate-pulse pointer-events-none" />

      {/* 标题 */}
      <div className="max-w-7xl mx-auto mb-10 md:mb-14">
        <h1 className="text-[clamp(42px,12vw,120px)] font-black italic tracking-tighter leading-[0.9] uppercase">
          Movement <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px white" }}
          >
            library
          </span>
        </h1>

        <p className="mt-5 text-gray-500 max-w-sm tracking-[0.4em] uppercase text-[10px] sm:text-xs">
          ONLINE EDUCATION
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mb-10 flex gap-8 border-b border-white/10 pb-4">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-start gap-1 transition-all cursor-pointer ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">
              {tab.levelTitle}
            </span>
            <span className="text-sm md:text-base font-semibold tracking-tight text-left">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* 卡片 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filtered.map((book) => {
          const isComingSoon = book.status === "soon";

          return (
            <a
              key={book.id} // 现在id都是唯一的了
              href={isComingSoon ? undefined : book.link} // coming soon 不可点击跳转
              target={isComingSoon ? undefined : "_blank"}
              rel={isComingSoon ? undefined : "noopener noreferrer"}
              className={`group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 md:hover:-translate-y-2 md:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${
                isComingSoon ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-900">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className={`object-cover transition-transform duration-700 md:group-hover:scale-110 ${
                    isComingSoon ? "blur-sm brightness-50" : ""
                  }`}
                />

                {/* Coming Soon 遮罩层 */}
                {isComingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-black text-xl md:text-2xl italic tracking-wider border-2 border-white/50 px-6 py-3 rounded-lg backdrop-blur-sm bg-black/30">
                      COMING SOON
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-7 md:p-8 space-y-3 md:space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold italic tracking-tight leading-snug">
                    {book.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs bg-white text-black px-2 py-1 font-bold shrink-0">
                    {book.type}
                  </span>
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {book.description}
                </p>

                <div
                  className={`pt-3 md:pt-4 flex items-center text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase transition-colors ${
                    isComingSoon
                      ? "text-gray-600"
                      : "text-gray-600 md:group-hover:text-white"
                  }`}
                >
                  {isComingSoon ? "Coming Soon" : "Buy Now →"}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* 底部 */}
      <div className="max-w-7xl mx-auto mt-24 md:mt-40 border-t border-white/10 pt-8 md:pt-10 text-gray-600 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-center">
        Next Generation Education Experience
      </div>
    </div>
  );
}
