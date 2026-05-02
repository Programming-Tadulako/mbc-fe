"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export type TOCItem = {
  id: string;
  label: string;
};

type ComputedData = {
  positions: [number, number][];
};

const SCROLL_THRESHOLD = 130; // px from viewport top

function useSectionObserver(ids: string[]): [string, (id: string) => void] {
  const [activeId, setActiveId] = useState("");
  const pinnedIdRef = useRef("");

  const manualSet = useCallback((id: string) => {
    pinnedIdRef.current = id;
    setActiveId(id);
  }, []);

  useEffect(() => {
    const update = () => {
      // Keep the clicked section active while it's still visible in the viewport
      if (pinnedIdRef.current) {
        const el = document.getElementById(pinnedIdRef.current);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (bottom > 0 && top < window.innerHeight) return;
        }
        pinnedIdRef.current = "";
      }

      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollBottom >= pageHeight - 2;

      if (nearBottom) {
        let lastVisible = "";
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const { top } = el.getBoundingClientRect();
          if (top < window.innerHeight) lastVisible = id;
        }
        if (lastVisible) {
          setActiveId(lastVisible);
          return;
        }
      }

      // Deepest section whose top has crossed SCROLL_THRESHOLD
      let found = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= SCROLL_THRESHOLD) found = id;
      }
      setActiveId(found);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => window.removeEventListener("scroll", update);
  }, [ids]);

  return [activeId, manualSet];
}

function TOCThumb({
  computed,
  activeIdx,
}: {
  computed: ComputedData;
  activeIdx: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (activeIdx === -1) {
      el.style.removeProperty("--track-top");
      el.style.removeProperty("--track-bottom");
    } else {
      const pos = computed.positions[activeIdx];
      el.style.setProperty("--track-top", `${pos[0]}px`);
      el.style.setProperty("--track-bottom", `${pos[1]}px`);
    }
  }, [activeIdx, computed]);

  return (
    <div
      ref={ref}
      className="absolute inset-y-0 inset-s-0 w-px bg-primary transition-[clip-path] duration-200"
      style={{
        clipPath:
          activeIdx !== -1
            ? "polygon(0 var(--track-top,0px), 100% var(--track-top,0px), 100% var(--track-bottom,0px), 0 var(--track-bottom,0px))"
            : "polygon(0 0, 100% 0, 100% 0, 0 0)",
      }}
    />
  );
}

export function TOC({
  items,
  className,
}: {
  items: TOCItem[];
  className?: string;
}) {
  const ids = items.map((item) => item.id);
  const [activeId, setActiveId] = useSectionObserver(ids);
  const activeIdx = items.findIndex((item) => item.id === activeId);

  const containerRef = useRef<HTMLDivElement>(null);
  const [computed, setComputed] = useState<ComputedData | null>(null);

  // Measure link positions for clip-path thumb
  const onCompute = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const positions: [number, number][] = [];

    for (const item of items) {
      const el = container.querySelector<HTMLElement>(`a[href="#${item.id}"]`);
      if (!el) continue;

      const styles = getComputedStyle(el);
      positions.push([
        el.offsetTop + parseFloat(styles.paddingTop),
        el.offsetTop + el.clientHeight - parseFloat(styles.paddingBottom),
      ]);
    }

    setComputed({ positions });
  }, [items]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(onCompute);
    ro.observe(container);
    onCompute();

    return () => ro.disconnect();
  }, [onCompute]);

  return (
    <aside
      aria-label="Table of contents"
      className={cn("flex flex-col gap-3", className)}
    >
      <p className="flex items-center gap-1.5 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
        <ListIcon size={12} weight="bold" />
        On this page
      </p>

      <div className="relative">
        {computed && <TOCThumb computed={computed} activeIdx={activeIdx} />}

        <div
          ref={containerRef}
          className="flex flex-col border-l border-border/60"
        >
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "py-1.5 pl-3 text-[11px] font-semibold tracking-widest uppercase transition-colors",
                activeId === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
