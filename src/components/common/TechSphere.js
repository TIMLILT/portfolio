import React, { useEffect, useMemo, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const DEFAULT_SPEED = { x: 0.0025, y: 0.004 };

// Nuage de technologies réparties sur une sphère 3D qui tourne.
// La souris oriente la rotation ; les positions sont mises à jour hors React pour rester fluides.
const TechSphere = ({ items, highlight = [], label }) => {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const speed = useRef({ ...DEFAULT_SPEED });
  const radius = useRef(170);
  const reduceMotion = useReducedMotion();

  // Répartition uniforme des points sur la sphère (spirale de Fibonacci)
  const points = useMemo(() => {
    const n = items.length;
    return items.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / n);
      const theta = Math.sqrt(n * Math.PI) * phi;
      return [Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi)];
    });
  }, [items]);

  useEffect(() => {
    const container = containerRef.current;
    let angleX = 0.4;
    let angleY = 0;
    let frame;
    let running = true;

    const render = () => {
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      points.forEach(([x, y, z], i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        const y1 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const depth = (z2 + 1) / 2; // 0 = derrière, 1 = devant
        el.style.transform = `translate(-50%, -50%) translate3d(${x1 * radius.current}px, ${y1 * radius.current}px, 0) scale(${0.6 + depth * 0.5})`;
        el.style.opacity = String(0.2 + depth * 0.8);
        el.style.zIndex = String(Math.round(depth * 100));
        el.style.filter = depth < 0.35 ? 'blur(1px)' : 'none';
      });
    };

    const tick = () => {
      if (running) {
        angleX += speed.current.x;
        angleY += speed.current.y;
        render();
      }
      frame = requestAnimationFrame(tick);
    };

    const resize = new ResizeObserver(([entry]) => {
      radius.current = Math.min(entry.contentRect.width / 2 - 60, 190);
      render();
    });
    resize.observe(container);

    const visibility = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
    });
    visibility.observe(container);

    render();
    if (!reduceMotion) frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      visibility.disconnect();
    };
  }, [points, reduceMotion]);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    speed.current = { x: dy * 0.02, y: -dx * 0.02 };
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handleMove}
      onPointerLeave={() => { speed.current = { ...DEFAULT_SPEED }; }}
      className="relative w-full h-[380px] sm:h-[440px] select-none"
      aria-label={label}
    >
      {/* Halo lumineux au centre */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-brand-500/20 blur-3xl" />
      {items.map((item, i) => (
        <span
          key={item}
          ref={(el) => { itemRefs.current[i] = el; }}
          className={`absolute left-1/2 top-1/2 whitespace-nowrap rounded-full px-3 py-1 font-semibold will-change-transform ${
            highlight.includes(item)
              ? 'bg-brand-600 text-white text-base shadow-lg shadow-brand-600/30'
              : 'bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm'
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default TechSphere;
