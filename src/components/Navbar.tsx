"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Product", href: "/product" },
    { name: "Online", href: "/online" },
    { name: "Biography", href: "/biography" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* 1. 移动端汉堡按钮 - 仅在移动端显示 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-[60] md:hidden flex flex-col gap-1.5 p-2 
  mix-blend-difference"
      >
        <span className="w-6 h-[1px] bg-white"></span>
        <span className="w-6 h-[1px] bg-white"></span>
        <span className="w-6 h-[1px] bg-white"></span>
      </button>

      {/* 2. PC端侧边栏 - 在移动端隐藏 (hidden md:flex) */}
      <nav className="hidden md:flex fixed right-0 top-0 h-screen w-48 flex-col justify-between py-12 px-6 bg-black border-l border-white/10 z-50">
        <Link
          href="/"
          className="relative w-full overflow-hidden rounded-lg group"
        >
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={200}
            height={100}
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" // 临时加个红框
          />
        </Link>
        <div className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex flex-col items-start"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors uppercase">
                {link.name}
              </span>
              <span className="h-[1px] w-4 bg-white mt-1 transition-all group-hover:w-8"></span>
            </Link>
          ))}
        </div>
        <div className="text-[10px] text-gray-500 uppercase">
          © 2026 BREAKTHEMOVEMENT
        </div>
      </nav>

      {/* 3. 移动端抽屉菜单 (Overlay + Drawer) */}
      {/* 背景遮罩层 */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-md z-[70] transition-opacity duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 侧滑抽屉内容 */}
      <div
        className={`fixed top-0 right-0 h-screen w-[75vw] max-w-[360px] bg-black border-l border-white/10 z-[80] transition-transform duration-500 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 顶部区域 */}
        <div className="relative flex items-center justify-between px-8 pt-10">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="relative w-28 h-14"
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </Link>

          {/* 关闭按钮 */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl font-light"
          >
            ✕
          </button>
        </div>

        {/* 分割线 */}
        <div className="border-t border-white/10 mt-8" />

        {/* 菜单内容 */}
        <div className="flex flex-col justify-center px-10 py-16 space-y-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-black italic tracking-tighter uppercase text-white hover:pl-4 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
