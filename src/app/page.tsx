"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [windowSize, setWindowSize] = useState({ w: 1440, h: 800 });
  const [mounted, setMounted] = useState(false);

  // 1. 监听滚动和窗口大小
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () =>
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 2. 使用 useMemo 配合固定值来模拟随机感，避开 Math.random 报错
  // 我们手动给每条线分配不同的系数
  const lineConfigs = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      opacity: 0.1 + (i / 20) * 0.4,
      // 使用 i 的函数来代替完全随机，保证每次刷新效果一致
      freq: 0.003 + (i % 7) * 0.0006,
      amp: 60 + (i % 5) * 15,
      phase: i * 0.5, // 初始相位错开
    }));
  }, []);

  // 3. 计算波浪路径
  const renderScrollWaves = () => {
    if (!mounted) return null; // 避免服务端渲染与客户端不一致

    const { w, h } = windowSize;
    const scrollFactor = scrollY * 0.002;

    return lineConfigs.map((config, i) => {
      const points = [];
      const segments = 40;
      const gap = (w + 200) / segments;

      for (let x = 0; x <= segments; x++) {
        const xPos = x * gap - 100;
        // 随滚动变化的相位
        const angle =
          xPos * config.freq + config.phase + scrollFactor * (i * 0.05 + 1);

        // 随滚动增加的振幅，向下滚时线条更“随性”
        const dynamicAmp = config.amp + scrollY * 0.02;
        const yPos = h * 0.5 + Math.sin(angle) * dynamicAmp;

        points.push(`${xPos},${yPos}`);
      }

      return (
        <polyline
          key={i}
          points={points.join(" ")}
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          className="transition-all duration-200 ease-linear"
          style={{ opacity: config.opacity }}
        />
      );
    });
  };

  return (
    <div className="relative min-h-[400vh] bg-black text-white">
      {/* 背景：SVG 线条 */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
        <svg className="w-full h-full">{renderScrollWaves()}</svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 max-w-6xl mx-auto px-10">
        <section className="h-screen flex flex-col justify-center">
          <h1 className="text-[12vw] font-black italic tracking-tighter leading-[0.8] uppercase">
            Break The <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Movement
            </span>
          </h1>
          <p className="mt-8 text-gray-500 tracking-[0.5em] uppercase text-xs">
            FLEX MIND FLOW BODY POWER SOUL
          </p>
        </section>

        <section className="h-[80vh] flex items-center">
          <div className="max-w-2xl border-l border-white/30 pl-12">
            <h2 className="text-4xl font-black italic mb-8 uppercase">
              A STRUCTURAL METHOD FOR SUSTAINABLE BODYWORK BUILT FOR REAL LIFE.
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              A structured training method designed to break destructive
              patterns and build sustainable performance. Train with awareness.
              Move with intention. Build long-term consistency.
              <br />
              The method integrates diverse movement elements into one
              structural system. Strength and control. Mobility and range.
              Balance and inversion. Flow and rhythm. Conditioning and recovery.
              These are not separate practices. They are connected layers of one
              body. The method teaches how to break complexity into parts, adapt
              daily, and build sustainable consistency over time.
            </p>
          </div>
        </section>

        <section className="h-[80vh] flex items-center justify-end">
          <div className="max-w-xl text-right border-r border-white/30 pr-12">
            <h2 className="text-4xl font-black italic mb-8 uppercase">
              Break The Movement is not random workouts.
            </h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
              It is a structured system built from years of movement practice,
              hybrid training, and performance culture.
              <br />
              This method helps you:
              <br />
              • Break destructive physical patterns
              <br />
              • Understand how your body actually works
              <br />
              • Train with awareness instead of ego
              <br />
              • Build strength without losing mobility
              <br />
              • Develop discipline that lasts
              <br />
              It&apos;s not about intensity. It&apos;s about consistency.
            </p>
          </div>
        </section>

        <section className="h-screen flex items-center">
          <div className="max-w-2xl border-l border-white/30 pl-12">
            <h2 className="text-4xl font-black italic mb-8 uppercase">
              WHO IS THIS FOR?
            </h2>
            <div className="text-gray-400 text-xl font-light leading-relaxed">
              <h2 className="text-purple-400 text-2xl font-black italic mb-4 uppercase">
                Dancers
              </h2>
              <p className="mb-6">
                Built for dancers who want strength without losing flow.
                Inspired by breaking culture and contemporary technique, this
                method integrates control, mobility, and performance awareness.
                Designed to support long careers - not short peaks.
              </p>
              <h2 className="text-orange-400 text-2xl font-black italic mb-6 uppercase">
                Hybrid Athletes
              </h2>
              <p className="mb-6">
                For those who train across disciplines — calisthenics, tricking,
                parkour, martial arts, or mixed movement practices. If you
                combine strength, skills, and creativity, you need structure to
                stay balanced and injury-free.
              </p>
              <h2 className="text-blue-400 text-2xl font-black italic mb-6 uppercase">
                Movement Practitioners
              </h2>
              <p className="mb-6">
                For individuals who value body awareness over ego lifting. For
                those who want to understand how their body moves — not just
                copy workouts.
              </p>
              <h2 className="text-green-400 text-2xl font-black italic mb-6 uppercase">
                Long-Term Builders
              </h2>
              <p className="mb-6">
                If you are rebuilding your foundation, coming back from
                inconsistency, or seeking intelligent progression - this method
                gives you structure.
              </p>
            </div>
          </div>
        </section>

        <footer className="h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold italic mb-12 uppercase tracking-widest">
            Get your guidance
          </h2>
          <Link
            href="/product"
            className="group relative px-16 py-6 border border-white overflow-hidden transition-all"
          >
            <span className="relative z-10 font-bold group-hover:text-black transition-colors">
              EXPLORE MORE
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
