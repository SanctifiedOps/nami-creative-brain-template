"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/socials";
import { PageHero } from "@/components/sections/page-hero";
import { Testimonials } from "@/components/sections/testimonials";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { values } from "@/lib/content/values";
import { stage, stageFast, fadeUp, cardIn } from "@/lib/motion";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title={
          <>
            A short line about{" "}
            <span className="text-gradient sm:block">the studio.</span>
          </>
        }
        lead="A short introduction to the studio: what it does and the kind of work it takes on. Replace this placeholder with your own about copy."
      />

      {/* Story */}
      <section className="container-shell py-24 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stage}
          className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20"
        >
          <motion.p className="mono-label md:mt-2" variants={fadeUp}>
            01 / The story
          </motion.p>
          <motion.div variants={fadeUp} className="space-y-6 max-w-2xl">
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              A short opening statement about{" "}
              <span className="text-gradient">
                why the studio exists
              </span>{" "}
              and what it sets out to do.
            </p>
            <p className="text-fg-muted md:text-lg leading-relaxed">
              A placeholder paragraph about the studio's point of view. Replace
              this with the problem you solve and how you think about the work.
            </p>
            <p className="text-fg-muted md:text-lg leading-relaxed">
              A second placeholder paragraph about how the studio operates and
              what makes the approach distinctive. Replace this with your own
              story.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-surface-1/40 py-24 md:py-32">
        <div className="container-shell">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stage}
            className="mb-14 max-w-2xl"
          >
            <motion.span className="mono-label mb-5 block" variants={fadeUp}>
              How we think
            </motion.span>
            <motion.h2
              className="text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight"
              variants={fadeUp}
            >
              Three principles <span className="text-gradient">we hold to.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stageFast}
            className="grid gap-6 md:grid-cols-3 md:gap-8"
          >
            {values.map((value, i) => (
              <motion.div key={value.title} variants={cardIn}>
                <SpotlightCard
                  tilt={4}
                  className="glass-refractive glass-refractive--hover h-full rounded-2xl"
                >
                  <div className="relative z-10 p-8 md:p-10">
                    <span className="font-mono text-sm text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">
                      {value.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-fg-muted">
                      {value.body}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Founder note */}
      <section className="container-shell py-24 md:py-32 border-t border-line">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stage}
          className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start md:gap-16 lg:gap-20"
        >
          <motion.div variants={fadeUp}>
            <div className="glass-refractive relative aspect-3/4 overflow-hidden rounded-2xl">
              <Image
                src="/placeholder-portrait.svg"
                alt="Studio founder"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mono-label mt-4">Founder name · Founder</p>
          </motion.div>
          <motion.div variants={fadeUp} className="max-w-2xl space-y-6">
            <p className="mono-label">02 / The founder</p>
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Hi, I&apos;m <span className="text-gradient">your name.</span>
            </p>
            <p className="text-fg-muted md:text-lg leading-relaxed">
              A short placeholder bio. Introduce yourself, your background, and
              why you started the studio. Replace this with your own story.
            </p>
            <p className="text-fg-muted md:text-lg leading-relaxed">
              A second placeholder paragraph for relevant experience, notable
              work, or credentials. Keep it focused and concrete.
            </p>
            <p className="text-fg-muted md:text-lg leading-relaxed">
              A third placeholder paragraph about who you work with and the
              kind of clients the studio is built for.
            </p>

            <dl className="grid gap-8 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="mono-label">Experience</dt>
                <dd className="mt-2 text-lg font-medium tracking-tight text-fg">
                  A stat
                </dd>
                <p className="mt-1 text-sm text-fg-muted">
                  A short label
                </p>
              </div>
              <div>
                <dt className="mono-label">A label</dt>
                <dd className="mt-2 text-lg font-medium tracking-tight text-fg">
                  A stat
                </dd>
                <p className="mt-1 text-sm text-fg-muted">
                  A short label
                </p>
              </div>
              <div>
                <dt className="mono-label">A label</dt>
                <dd className="mt-2 text-lg font-medium tracking-tight text-fg">
                  A stat
                </dd>
                <p className="mt-1 text-sm text-fg-muted">
                  A short label
                </p>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-accent transition-colors"
              >
                <LinkedinIcon size={16} aria-hidden />
                Connect on LinkedIn
                <ArrowUpRight
                  size={12}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-accent transition-colors"
              >
                Start a conversation
                <ArrowUpRight
                  size={14}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
