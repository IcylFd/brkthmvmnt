"use client";

import Image from "next/image";
import authorImg from "@/assets/author.jpg";
import { StarIcon } from "@/components/StarIcon";

export default function BiographyPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black pt-6 md:pt-20 pb-20 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* 左侧栏：图片与基础信息 */}
        <div className="flex flex-col">
          <div className="relative aspect-[3/4] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <Image
              src={authorImg}
              alt="Oguzhan Karademir"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-10 text-center space-y-6">
            <div>
              <h2 className="text-xl font-bold tracking-[0.2em] uppercase">
                Oguzhan Karademir
              </h2>
              <h2 className="text-xl font-bold tracking-[0.2em] uppercase">
                Jester
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Born in Ankara, Turkiye
              </p>
            </div>
            <ul className="text-sm space-y-1 font-medium text-gray-800">
              <li>- Professional Bboy / Red Bull BC One Ambassador</li>
              <li>- Movement Artist / Performer</li>
              <li>- Hybrid Athlete</li>
            </ul>
            <div className="space-y-4">
              <h3 className="text-lg font-serif italic">Education</h3>
              <ul className="text-sm space-y-1 font-medium text-gray-800">
                <li>- Contemporary Fine Arts (MSGSU)</li>
                <li>- Sports and Recreation (Istanbul)</li>
                <li>- Cakrawala Academy (Bali)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 右侧栏：大标题与详细介绍 */}
        <div className="flex flex-col space-y-12">
          {/* <h1 className="text-7xl md:text-[12rem] font-serif leading-none tracking-tighter">
            Author
          </h1> */}

          {/* 4. 调整最大宽度：移动端 max-w-lg 可能导致两边留白过多，确保 w-full */}
          <div className="w-full md:max-w-lg space-y-8 text-sm leading-relaxed text-gray-700 uppercase tracking-wider">
            <section>
              <h4 className="font-bold text-black mb-4 tracking-[0.3em]">
                A former national athlete and multiple-time champion with
                international competition experience, he continues to compete,
                perform, and evolve his practice globally.
              </h4>
              <p>
                Break The Movement was created by a movement practitioner with
                over 16 years of experience.
              </p>
            </section>

            <section>
              <p>
                The foundation was built in breaking culture, where discipline
                is earned through repetition, control, and presence.
              </p>
            </section>

            <section>
              <p>Over time, the practice expanded beyond one style.</p>
              <ul className="mt-4 space-y-1 font-bold text-black">
                <li>Hybrid Movement training.</li>
                <li>Performance Preparation.</li>
                <li>Acrobatic Flow and Contemporary influence.</li>
                <li>Martial Arts structure.</li>
                <li>Breathwork and Energy regulation.</li>
                <li>Recovery process.</li>
              </ul>
            </section>

            <section>
              <p className="text-black font-bold">
                Years of experimentation led to one realization:
              </p>
              {/* 5. 调整字号：移动端 text-lg 有点挤，可微调为 text-base */}
              <p className="mt-4 italic normal-case font-serif text-base md:text-lg">
                The body does not need more intensity. <br />
                It needs better structure.
              </p>
            </section>

            <section className="space-y-4">
              <p>
                This method was not built in theory. It was built through
                practice, injury, adaptation, and long-term discipline.
              </p>
              <p>
                Break The Movement is the result of studying complexity,
                breaking it into parts, and rebuilding it sustainably.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
