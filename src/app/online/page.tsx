/*
 * @Date: 2026-02-13 20:22:43
 * @LastEditors: lifangdi
 * @LastEditTime: 2026-02-21 15:11:31
 */
"use client"; // 声明这是客户端组件，因为我们要处理鼠标交互和提交

import React, { useState } from "react";

export default function Online() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  // 处理提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setToast({
          message: "Application submitted successfully.",
          type: "success",
        });
        setEmail("");
      } else {
        setToast({
          message: "Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (err) {
      setToast({
        message: "Network error. Please try later.",
        type: "error",
      });
    }

    // 自动消失
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#111]">
      {toast && (
        <div
          className={`fixed top-6 right-6 px-6 py-4 rounded-xl shadow-xl text-sm font-medium transition-all duration-500
      ${
        toast.type === "success"
          ? "bg-green-400 text-white"
          : "bg-red-400 text-white"
      }`}
        >
          {toast.message}
        </div>
      )}
      {/* 背景：几何四芒星阵列 */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-10 gap-4 p-8 opacity-20">
        {[...Array(40)].map((_, i) => (
          /* 这个 div 是关键：它固定大小，作为鼠标感应区 */
          <div
            key={i}
            className="group flex items-center justify-center w-full h-full aspect-square"
          >
            {/* 四芒星 SVG：增加 pointer-events-none 防止它干扰鼠标感应 */}
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-gray-500 transition-all duration-500 ease-out 
                   pointer-events-none
                   group-hover:fill-white 
                   group-hover:scale-150 
                   group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            >
              <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-4">
          1:1 Movement Mentorship
        </h1>
        <p className="text-gray-400 text-xl font-light uppercase leading-relaxed mb-8 p-8">
          A long-term supervision system built for structural progression.
          <br />
          Personalized to your level, load capacity, and schedule.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-2 w-full max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => {
              e.target.setCustomValidity(""); // 清空之前的自定义错误提示
              setEmail(e.target.value); // 更新状态
            }}
            className="flex-grow px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-white transition-all"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95 whitespace-nowrap"
          >
            APPLY NOW
          </button>
        </form>
      </div>
    </div>
  );
}
