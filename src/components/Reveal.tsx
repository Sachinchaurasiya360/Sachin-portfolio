import { useEffect, useRef, type ElementType, type ReactNode } from "react";

// A tiny, dependency-free reveal-on-scroll. One IntersectionObserver per node,
// disconnected after firing. prefers-reduced-motion is handled in CSS, so this
// only ever adds a class — never blocks content from rendering.
type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

const Reveal = ({ as: Tag = "div", className = "", children }: Props) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
};

export default Reveal;
