"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";

const MAX_ANGLE = 1.1; // rad, ~63° each side
// Strap pendulum (pivot at top of strap)
const STRAP_STIFFNESS = 16;
const STRAP_DAMPING = 1.8;
// Card follows the strap with its own lag (second pendulum segment)
const CARD_STIFFNESS = 34;
const CARD_DAMPING = 3.2;
// Entrance drop — starts high, swung to the right
const DROP_HEIGHT = 420;
const DROP_SPEED = 5.5;
const START_ANGLE = -0.55;
const START_CARD_ANGLE = -0.95;
const START_VELOCITY = -1.6;

export default function Lanyard() {
  const outerRef = useRef<HTMLDivElement>(null);
  const strapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const strapAngle = useRef(START_ANGLE);
  const strapVel = useRef(START_VELOCITY);
  const cardAngle = useRef(START_CARD_ANGLE);
  const cardVel = useRef(0);
  const dropY = useRef(-DROP_HEIGHT);
  const dragging = useRef(false);
  const lastMove = useRef({ time: 0, angle: 0 });

  useEffect(() => {
    let raf = 0;
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      let last = performance.now();
      const start = last;
      const tick = (now: number) => {
        const dt = Math.min((now - last) / 1000, 0.032);
        last = now;

        // Hold off-screen briefly, then ease down into place
        if (now - start > 150 && dropY.current < -0.5) {
          dropY.current += (0 - dropY.current) * Math.min(1, DROP_SPEED * dt);
        } else if (dropY.current >= -0.5) {
          dropY.current = 0;
        }

        if (!dragging.current) {
          strapVel.current +=
            (-STRAP_STIFFNESS * strapAngle.current - STRAP_DAMPING * strapVel.current) * dt;
          strapAngle.current += strapVel.current * dt;
        }
        // Card chases the strap's angle with a stiffer, laggier spring
        cardVel.current +=
          (-CARD_STIFFNESS * (cardAngle.current - strapAngle.current) -
            CARD_DAMPING * cardVel.current) *
          dt;
        cardAngle.current += cardVel.current * dt;

        if (outerRef.current) {
          outerRef.current.style.transform = `translateY(${dropY.current}px)`;
        }
        if (strapRef.current) {
          strapRef.current.style.transform = `rotate(${strapAngle.current}rad)`;
        }
        if (cardRef.current) {
          cardRef.current.style.transform = `rotate(${cardAngle.current - strapAngle.current}rad)`;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // Wait for the badge/strap images to be fully decoded before animating,
    // so the entrance never stutters on first paint.
    const imgs = Array.from(outerRef.current?.querySelectorAll("img") ?? []);
    Promise.all(imgs.map((img) => img.decode().catch(() => {}))).then(run);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  const pointerAngle = (e: React.PointerEvent) => {
    const rect = outerRef.current!.getBoundingClientRect();
    const pivotX = rect.left + rect.width / 2;
    const pivotY = rect.top;
    // 0 when hanging straight down, positive when pulled right
    return Math.atan2(e.clientX - pivotX, e.clientY - pivotY);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as Element).setPointerCapture(e.pointerId);
    dragging.current = true;
    strapVel.current = 0;
    lastMove.current = { time: performance.now(), angle: strapAngle.current };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const next = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, pointerAngle(e)));
    const now = performance.now();
    const dt = (now - lastMove.current.time) / 1000;
    if (dt > 0) {
      strapVel.current = (next - lastMove.current.angle) / dt;
    }
    lastMove.current = { time: now, angle: next };
    strapAngle.current = next;
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={outerRef}
      className="absolute -top-44 z-10 will-change-transform"
      style={{ transform: `translateY(${-DROP_HEIGHT}px)` }}
    >
      <div
        ref={strapRef}
        className="flex cursor-grab touch-none select-none flex-col items-center will-change-transform active:cursor-grabbing"
        style={{ transformOrigin: "50% 0%", transform: `rotate(${START_ANGLE}rad)` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* lanyard.svg has its own clasp baked into the bottom 26% — crop it
            off and layer the standalone clasp asset instead, so the badge can
            hook into a fully visible metal clasp like the Figma design */}
        <div className="h-[174px] overflow-hidden">
          <img
            src="/assets/lanyard.svg"
            alt=""
            draggable={false}
            className="h-[235px] w-auto"
          />
        </div>
        <img
          src="/assets/lanyard-clasp.svg"
          alt=""
          draggable={false}
          className="relative z-20 -mt-px h-[61px] w-auto"
        />
        <div
          ref={cardRef}
          className="relative z-10 -mt-[46px] will-change-transform"
          style={{
            transformOrigin: "50% 24px",
            transform: `rotate(${START_CARD_ANGLE - START_ANGLE}rad)`,
          }}
        >
          <img
            src="/assets/badge-card.svg"
            alt="ID badge with a photo of Sanskrati reading UX Designer"
            draggable={false}
            className="w-[345px] max-w-none drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
