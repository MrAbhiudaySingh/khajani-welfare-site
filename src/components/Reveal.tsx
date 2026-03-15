import React, { forwardRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ variant = "fade-up", delay = 0, duration = 700, className, children, ...props }, _ref) => {
    const { ref, isVisible } = useScrollReveal();
    const styles = variantStyles[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "transition-all ease-out will-change-transform",
          isVisible ? styles.visible : styles.hidden,
          className
        )}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Reveal.displayName = "Reveal";

export { Reveal };
