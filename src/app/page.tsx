"use client";

// 所有可替换资源都在这里配置。
// public/images/hero.jpg → "/images/hero.jpg"
const assets = {
  hero: "/images/hero.jpg",
  guide: "/images/free-guide.jpg",
  guidePageTwo: "/images/pdf3.jpg",
  guidePageOne: "/images/pdf2.jpg",
  guideCover: "/images/pdf1.jpg",
  videoCover: "/images/video-cover.jpg",
  masterclassMain: "/images/masterclass-main.jpg",
  masterclassDetails: [
    "/images/masterclass-1.jpg",
    "/images/masterclass-2.jpg",
    "/images/masterclass-3.jpg",
    "/images/masterclass-4.jpg",
    "/images/masterclass-5.jpg",
    "/images/masterclass-6.jpg",
  ],
  guidePdf: "/files/free-guide.pdf",

  // 填写完整的视频网址，例如你的 YouTube 视频链接
  freeVideoUrl: "https://youtu.be/gfrtJw5hSEY?si=iG7Xvmx5WpBDvhj4",
  masterclassUrl: "https://jestrickster.gumroad.com/l/igphpo",
};

const guideContents = [
  "Understanding Flow",
  "Fundamental body positions",
  "Mobility & preparation",
  "Improvisation",
  "Exploring movement",
  "Creating movement patterns",
  "Developing your own Flow",
];

const masterclassContents = [
  "12 Breaking Moves",
  "How to work each fundamental",
  "How to develop your fundamentals through specific exercises",
  "How to improve your control, movement quality, and overall understanding",
];

const container = "mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-12";

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-3 border px-5 py-3 " +
  "text-center text-[10px] font-bold uppercase tracking-[0.09em] " +
  "transition-colors duration-200 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 " +
  "focus-visible:outline-current";

const lightButton =
  `${buttonBase} border-[#eeece5] bg-[#eeece5] text-[#101413] ` +
  "hover:border-white hover:bg-white";

const outlineButton =
  `${buttonBase} border-white/50 bg-transparent text-[#eeece5] ` +
  "hover:border-[#eeece5] hover:bg-[#eeece5] hover:text-[#101413]";

const darkButton =
  `${buttonBase} border-[#101413] bg-[#101413] text-[#eeece5] ` +
  "hover:bg-[#303632]";

const heading =
  "font-stretch-condensed font-black uppercase tracking-tight leading-[1.05]";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M4 12h15m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b100f] font-sans text-[#eeece5]">
      {/* 1. HERO */}
      <section className="relative isolate overflow-hidden bg-[#080c0b]">
        {/* 右侧背景图片；手机端放在顶部 */}
        <div className="absolute inset-x-0 top-0 -z-20 h-[370px] md:inset-y-0 md:left-[24%] md:h-full">
          <img
            src={assets.hero}
            alt="Dancer performing a breaking freeze"
            fetchPriority="high"
            className="h-full w-full object-cover object-[65%_center] grayscale"
          />

          {/* 桌面端：图片左侧 fade，与黑色背景自然融合 */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,#080c0b_0%,rgba(8,12,11,0.92)_12%,rgba(8,12,11,0.45)_35%,transparent_65%)] md:block" />

          {/* 手机端：底部 fade，让图片自然过渡到文字区域 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,12,11,0.1)_35%,#080c0b_100%)] md:hidden" />

          {/* 底部细微渐变 */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(to_top,rgba(8,12,11,0.6),transparent_30%)] md:block" />
        </div>

        <div
          className={`${container} flex min-h-[620px] items-end pb-12 pt-64 md:min-h-[440px] md:items-center md:py-20 lg:min-h-[500px]`}
        >
          <div className="w-full max-w-lg">
            <h1 className={`${heading} text-[clamp(2.1rem,4.2vw,3.8rem)]`}>
              Break The Movement
            </h1>

            <p className="mt-5 whitespace-nowrap text-base font-semibold uppercase tracking-[0.18em] sm:text-xl">
              FLEX MIND • FLOW BODY • POWER SOUL
            </p>

            <p className="mt-5 text-sm leading-relaxed text-white/75">
              Understand your body. Explore movement.
              <br />
              Build your own movement language.
            </p>

            {/* 两个按钮始终并排、等宽等高 */}
            {/* <div className="mt-7 grid max-w-md grid-cols-2 gap-3">
              <a
                href={assets.guidePdf}
                download="Break-The-Movement-Free-Guide.pdf"
                className={`${lightButton} h-full px-3`}
              >
                Get the free guide
              </a>

              <a href="#masterclass" className={`${outlineButton} h-full px-3`}>
                Watch the masterclass
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* 2. FREE GUIDE */}
      <section className="bg-[#e9e6dd] py-12 text-[#101413] lg:py-14">
        <div
          className={`${container} grid items-center gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1.25fr_0.85fr] lg:gap-8`}
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
              Free Guide
            </p>

            <h2 className={`${heading} mt-3 text-3xl sm:text-4xl`}>
              Create Your Flow
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/75">
              Learn the foundations of Flow, understand your body&apos;s
              fundamental positions, and explore how to connect movements
              naturally.
            </p>

            <a
              href={assets.guidePdf}
              download="Break-The-Movement-Free-Guide.pdf"
              className={`${darkButton} mt-6 min-w-48`}
            >
              Get the free guide
            </a>

            <p className="mt-3 text-[11px] text-black/50">
              Free PDF. Download instantly.
            </p>
          </div>

          {/* 建议使用包含封面与内页的完整产品展示图 */}
          <div className="flex items-center justify-center">
            {/* 三张图片重叠展示 */}
            <div className="relative isolate aspect-[5/3] w-full max-w-md">
              {/* 最后面：第二张内页 */}
              <img
                src={assets.guidePageTwo}
                alt="Guide sample page two"
                loading="lazy"
                className="absolute left-[62%] top-[15%] z-10 h-[78%] w-[34%] rotate-[6deg] object-fill shadow-[3px_5px_12px_rgba(0,0,0,0.15)]"
              />

              {/* 中间：第一张内页 */}
              <img
                src={assets.guidePageOne}
                alt="Guide sample page one"
                loading="lazy"
                className="absolute left-[38%] top-[9%] z-20 h-[83%] w-[39%] rotate-[4deg] object-fill shadow-[3px_5px_12px_rgba(0,0,0,0.18)]"
              />

              {/* 最前面：黑色封面 */}
              <img
                src={assets.guideCover}
                alt="Create Your Flow guide cover"
                loading="lazy"
                className="absolute left-[3%] top-[3%] z-30 h-[91%] w-[45%] -rotate-[2deg] object-fill shadow-[4px_7px_16px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.12em]">
              Free Guide Includes:
            </h3>

            <ol className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-1">
              {guideContents.map((item, index) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 text-xs leading-relaxed"
                >
                  <span className="text-[10px] font-bold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-black/80">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 3. FREE VIDEO */}
      <section className="border-b border-white/10 bg-[#0a0f0e] py-10 lg:py-12">
        <div
          className={`${container} grid items-center gap-8 md:grid-cols-2 lg:gap-16`}
        >
          <a
            href={assets.freeVideoUrl || undefined}
            aria-disabled={!assets.freeVideoUrl}
            aria-label={
              assets.freeVideoUrl
                ? "Watch the free movement video"
                : "Free movement video coming soon"
            }
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block aspect-video overflow-hidden border border-white/20 ${
              assets.freeVideoUrl ? "cursor-pointer" : "cursor-default"
            }`}
          >
            <img
              src={assets.videoCover}
              alt="Movement demonstration"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/15" />

            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-14 items-center justify-center rounded-full border border-white bg-black/15 text-white transition-colors group-hover:bg-black/60">
                <PlayIcon className="ml-1 size-7" />
              </span>
            </span>
          </a>

          <div>
            {/* <p className="text-[10px] uppercase tracking-[0.16em] text-white/75">
              Free Video
            </p> */}

            <h2 className={`${heading} mt-3 text-3xl sm:text-4xl`}>
              How to Create Flow
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              The free guide explains the foundations.
              <br />
              This video shows you how to apply them.
            </p>

            <a
              href={assets.freeVideoUrl || undefined}
              aria-disabled={!assets.freeVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${outlineButton} mt-7 ${
                !assets.freeVideoUrl ? "cursor-default opacity-50" : ""
              }`}
            >
              <PlayIcon className="size-4 shrink-0" />
              {assets.freeVideoUrl
                ? "Watch the free video on YouTube"
                : "Video coming soon"}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* 4. MASTERCLASS */}
      <section
        id="masterclass"
        className="scroll-mt-8 bg-[#0a0f0e] py-10 lg:py-12"
      >
        <div
          className={`${container} grid items-center gap-8 md:grid-cols-2 lg:gap-16`}
        >
          {/* 左侧大图 + 右侧三张小图，均可独立替换 */}
          {/* 上方大图 + 下方六张小图 */}
          <div className="flex min-w-0 flex-col gap-2">
            {/* 大图 */}
            <div className="aspect-[4/3] overflow-hidden border border-white/15">
              <img
                src={assets.masterclassMain}
                alt="Breaking masterclass main demonstration"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* 小图：三列、两行 */}
            <div className="grid grid-cols-3 gap-2">
              {assets.masterclassDetails.map((src, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] min-w-0 overflow-hidden border border-white/15"
                >
                  <img
                    src={src}
                    alt={`Breaking movement demonstration ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/75">
              Go Deeper
            </p>

            <h2 className={`${heading} mt-3 text-3xl sm:text-4xl`}>
              Break Moves
              <br />
              Masterclass
            </h2>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em]">
              1-Hour Masterclass
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Take your Breaking fundamentals further through focused movement
              practice and specific exercises.
            </p>

            <h3 className="mt-6 text-[10px] uppercase tracking-[0.14em] text-white/85">
              In The Masterclass:
            </h3>

            <ul className="mt-4 space-y-3">
              {masterclassContents.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-xs leading-relaxed text-white/75"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-white/30 text-[9px] tabular-nums">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={assets.masterclassUrl || undefined}
              aria-disabled={!assets.masterclassUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${lightButton} mt-7 ${
                !assets.masterclassUrl ? "cursor-default opacity-50" : ""
              }`}
            >
              {assets.masterclassUrl
                ? "Watch full Masterclass"
                : "Masterclass coming soon"}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
