"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "@/components/StarIcon";
import product0 from "@/assets/product0.jpg";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
import Image from "next/image";
// 示例：作为装饰点缀

// 模拟 E-book 数据
const EBOOKS = [
  {
    id: 1,
    title: "Silent Discipline Starter",
    description:
      "A structured training method built for long-term performance.",
    image: product0,
    link: "https://your-shop-link.com/1",
  },
  {
    id: 2,
    title: "Recovery - 21 Days Reset",
    description:
      "A 3-week structured recovery system designed to restore mobility, and rebuild your training foundation.",
    image: product1,
    link: "https://your-shop-link.com/2",
  },
  {
    id: 3,
    title: "Performance Conditioning for Dancers",
    description:
      "A structured strength & mobility framework inspired by mixed movement arts.",
    image: product2,
    link: "https://your-shop-link.com/3",
  },
  {
    id: 4,
    title: "Strength, Balance & Inversions",
    description:
      "A structured handstand progression focused on control, alignment and awareness upside down.",
    image: product3,
    link: "https://your-shop-link.com/3",
  },
  {
    id: 5,
    title: "Mobility for long-term performance",
    description:
      "Foundational mobility framework designed to restore range, control and flow.",
    image: product4,
    link: "https://your-shop-link.com/3",
  },
];

export default function ProductPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-20">
      <StarIcon className="absolute -top-[90px] -right-[50px] w-100 h-150 text-white opacity-50 animate-pulse" />

      {/* 页面标题 */}
      <div className="max-w-7xl mx-auto mb-20">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase">
          Digital <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Store
          </span>
        </h1>
        <p className="mt-6 text-gray-500 max-w-sm tracking-widest uppercase text-xs">
          Exclusive E-books for movementalist minds.
        </p>
      </div>

      {/* 卡片网格 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {EBOOKS.map((book) => (
          <a
            key={book.id}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            {/* 缩略图容器 */}
            <div className="relative aspect-square overflow-hidden bg-gray-900">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* 文字介绍内容 */}
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold italic tracking-tight">
                  {book.title}
                </h3>
                <span className="text-xs bg-white text-black px-2 py-1 font-bold">
                  PDF
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {book.description}
              </p>

              {/* 底部交互提示 */}
              <div className="pt-4 flex items-center text-xs font-black tracking-[0.2em] uppercase group-hover:text-white text-gray-600 transition-colors">
                Buy Now
                <span className="ml-2 transition-transform group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>

            {/* 悬浮时的发光边框效果 */}
            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all pointer-events-none" />
          </a>
        ))}
      </div>

      {/* 底部装饰线 */}
      <div className="max-w-7xl mx-auto mt-40 border-t border-white/10 pt-10 text-gray-600 text-[10px] tracking-[0.5em] uppercase text-center">
        Next Generation Education Experience
      </div>
    </div>
  );
}
