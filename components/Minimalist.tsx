 "use client";

import Image from "next/image";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const showcaseItems = [
  {
    title: "LIMIT VIEW",
    src: "/screenshots/limit-view.png",
    alt: "ScrollGuard app limit view screen",
    description:
      "Shown when an app is blocked after the user reaches the limit, so they clearly know access is locked until reset.",
  },
  {
    title: "DASHBOARD",
    src: "/screenshots/dashboard.png",
    alt: "ScrollGuard dashboard screen",
    description:
      "The main home screen with usage summary, active focus status, and quick visibility into daily progress.",
  },
  {
    title: "ANALYTICS",
    src: "/screenshots/analytics.png",
    alt: "ScrollGuard analytics screen",
    description:
      "Detailed trends showing where time goes each day so users can adjust limits with data, not guesswork.",
  },
  {
    title: "SETTINGS",
    src: "/screenshots/settings.png",
    alt: "ScrollGuard settings screen",
    description:
      "Where users configure permissions, app rules, and behavior preferences to make ScrollGuard fit their routine.",
  },
];

export function Minimalist() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const amount = scroller.clientWidth / 2;
    scroller.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden px-4 py-24">
      <div className="mx-auto mb-12 flex max-w-6xl items-end justify-between gap-5">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Minimal look, powerful control
          </h2>
          <p className="max-w-xl text-slate-600">
            A clean UI that keeps your rules visible and your attention protected.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            onClick={() => scrollByCards("left")}
            aria-label="Scroll showcase left"
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
            onClick={() => scrollByCards("right")}
            aria-label="Scroll showcase right"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mx-auto flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {showcaseItems.map((item, index) => (
          <article
            key={item.title}
            className="sg-showcase-card group relative min-w-0 shrink-0 basis-full snap-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_15px_45px_rgba(15,23,42,0.06)] md:basis-[calc(50%-12px)]"
            style={{ animationDelay: `${index * 180}ms` }}
          >
            <div className="sg-showcase-glow pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-cyan-200/55 blur-3xl" />

            <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <div className="sg-showcase-phone mx-auto w-[160px] shrink-0 rounded-[1.8rem] border-[6px] border-slate-900 bg-slate-900 p-1.5 shadow-[0_12px_30px_rgba(2,8,23,0.22)] transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="relative h-[280px] overflow-hidden rounded-[1.3rem] bg-[#f4f7fb]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={640}
                    height={1280}
                    className="h-full w-full object-contain object-top"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1 pt-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-700">
                  ScrollGuard UI
                </p>
                <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-600 to-sky-500" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
