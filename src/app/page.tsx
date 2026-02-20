"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [windowSize, setWindowSize] = useState({ w: 1440, h: 800 });
  const [mounted, setMounted] = useState(false);

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

  const lineConfigs = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      opacity: 0.1 + (i / 20) * 0.4,
      freq: 0.003 + (i % 7) * 0.0006,
      amp: 60 + (i % 5) * 15,
      phase: i * 0.5,
    }));
  }, []);

  const renderScrollWaves = () => {
    if (!mounted) return null;

    const { w, h } = windowSize;
    const scrollFactor = scrollY * 0.002;

    return lineConfigs.map((config, i) => {
      const points = [];
      const segments = 40;
      const gap = (w + 200) / segments;

      for (let x = 0; x <= segments; x++) {
        const xPos = x * gap - 100;
        const angle =
          xPos * config.freq + config.phase + scrollFactor * (i * 0.05 + 1);

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
      {/* 背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
        <svg className="w-full h-full">{renderScrollWaves()}</svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-10">
        {/* HERO */}
        <section className="h-screen flex flex-col justify-center">
          <h1 className="text-[clamp(48px,12vw,140px)] font-black italic tracking-tighter leading-[0.9] uppercase">
            Break The <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Movement
            </span>
          </h1>

          <p className="mt-6 text-gray-500 tracking-[0.4em] uppercase text-[10px] sm:text-xs md:text-sm">
            FLEX MIND FLOW BODY POWER SOUL
          </p>
        </section>

        {/* SECTION 1 */}
        <section className="h-[80vh] flex items-center">
          <div className="max-w-2xl border-l border-white/30 pl-6 sm:pl-8 md:pl-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic mb-6 md:mb-8 uppercase">
              A STRUCTURAL METHOD FOR SUSTAINABLE BODYWORK BUILT FOR REAL LIFE.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed md:leading-loose">
              A structured training method designed to break destructive
              patterns and build sustainable performance. Train with awareness.
              Move with intention. Build long-term consistency.
              <br />
              <br />
              The method integrates diverse movement elements into one
              structural system. Strength and control. Mobility and range.
              Balance and inversion. Flow and rhythm. Conditioning and recovery.
              These are not separate practices. They are connected layers of one
              body.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="h-[80vh] flex items-center justify-end">
          <div className="max-w-xl text-right border-r border-white/30 pr-6 sm:pr-8 md:pr-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic mb-6 md:mb-8 uppercase">
              Break The Movement is not random workouts.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed md:leading-loose">
              It is a structured system built from years of movement practice,
              hybrid training, and performance culture.
              <br />
              <br />
              • Break destructive physical patterns
              <br />
              • Train with awareness instead of ego
              <br />
              • Build strength without losing mobility
              <br />• Develop discipline that lasts
            </p>
          </div>
        </section>

        {/* WHO SECTION */}
        <section className="h-screen flex items-center">
          <div className="max-w-2xl border-l border-white/30 pl-6 sm:pl-8 md:pl-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black italic mb-8 uppercase">
              WHO IS THIS FOR?
            </h2>

            <div className="text-gray-400 text-base sm:text-lg md:text-xl font-light leading-relaxed md:leading-loose">
              <h3 className="text-purple-400 text-lg sm:text-xl md:text-2xl font-black italic mb-4 uppercase">
                Dancers
              </h3>
              <p className="mb-6">
                Built for dancers who want strength without losing flow.
                Designed to support long careers - not short peaks.
              </p>

              <h3 className="text-orange-400 text-lg sm:text-xl md:text-2xl font-black italic mb-4 uppercase">
                Hybrid Athletes
              </h3>
              <p className="mb-6">
                For those who train across disciplines. If you combine strength,
                skills, and creativity, you need structure to stay balanced.
              </p>

              <h3 className="text-blue-400 text-lg sm:text-xl md:text-2xl font-black italic mb-4 uppercase">
                Movement Practitioners
              </h3>
              <p className="mb-6">
                For individuals who value body awareness over ego lifting.
              </p>

              <h3 className="text-green-400 text-lg sm:text-xl md:text-2xl font-black italic mb-4 uppercase">
                Long-Term Builders
              </h3>
              <p>
                If you are rebuilding your foundation or seeking intelligent
                progression - this method gives you structure.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="h-screen flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold italic mb-10 uppercase tracking-widest">
            Get your guidance
          </h2>

          <Link
            href="/product"
            className="group relative px-10 sm:px-14 md:px-16 py-4 sm:py-5 md:py-6 border border-white overflow-hidden transition-all"
          >
            <span className="relative z-10 font-bold group-hover:text-black transition-colors text-sm sm:text-base md:text-lg">
              EXPLORE MORE
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
