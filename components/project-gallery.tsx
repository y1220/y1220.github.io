"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  images: string[];
  /** Project title, used to describe each slide to screen readers. */
  title: string;
};

/**
 * A scroll-snap slider. Swiping and keyboard scrolling come from the browser;
 * the arrows and dots drive the same scroller so there is a single source of
 * truth for which slide is showing.
 */
export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Derive the active slide from scroll position so swipe, arrows and dots agree
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const index = Math.round(scroller.scrollLeft / scroller.clientWidth);
        setActive(Math.max(0, Math.min(images.length - 1, index)));
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", onScroll);
    };
  }, [images.length]);

  const goTo = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollTo({
      left: index * scroller.clientWidth,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="group/gallery relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
        tabIndex={0}
      >
        {images.map((src, index) => (
          <div
            key={src}
            className="relative aspect-[16/9] w-full flex-shrink-0 snap-center bg-sage"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${title} — screen ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(Math.max(0, active - 1))}
            disabled={active === 0}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lift transition-opacity hover:bg-paper disabled:pointer-events-none disabled:opacity-0"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous screen</span>
          </button>

          <button
            type="button"
            onClick={() => goTo(Math.min(images.length - 1, active + 1))}
            disabled={active === images.length - 1}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lift transition-opacity hover:bg-paper disabled:pointer-events-none disabled:opacity-0"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next screen</span>
          </button>

          {/* Screenshots vary in brightness, so the dots sit on their own scrim */}
          <div className="absolute inset-x-0 bottom-3 flex justify-center">
            <div className="flex items-center gap-1.5 rounded-full bg-ink/55 px-2.5 py-1.5 backdrop-blur-sm">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-current={index === active}
                  className={cn(
                    "h-1.5 rounded-full bg-paper transition-all duration-300",
                    index === active
                      ? "w-5 opacity-100"
                      : "w-1.5 opacity-50 hover:opacity-80",
                  )}
                >
                  <span className="sr-only">Go to screen {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
