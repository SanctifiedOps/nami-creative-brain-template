"use client";

import { motion } from "motion/react";
import { stage, fadeUp, blurUp } from "@/lib/motion";

export function PositioningBand() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface-1/40 py-20 md:py-28">
      <div aria-hidden className="hairline-grid absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(255_0_188/0.12),transparent_70%)] blur-2xl"
      />
      <motion.div
        className="container-shell relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={stage}
      >
        <motion.p
          className="mx-auto max-w-3xl text-center text-[clamp(1.4rem,3vw,2.25rem)] font-medium leading-tight tracking-tight text-fg"
          variants={blurUp}
        >
          A bold positioning statement that names the problem your clients
          face and the shift you{" "}
          <span className="text-gradient">help them make.</span>
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-center text-fg-muted md:text-lg"
          variants={fadeUp}
        >
          A short supporting line that explains how the studio brings brand,
          content, and systems together. Replace this placeholder copy.
        </motion.p>
      </motion.div>
    </section>
  );
}
