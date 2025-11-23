"use client";

import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ecogic-forest via-ecogic-green to-emerald-400 px-8 py-24 text-white shadow-2xl sm:px-16">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto flex max-w-4xl flex-col gap-8 text-center sm:text-left"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
        ECOGiC présente
      </span>
      <h1 className="text-4xl font-black sm:text-6xl">
        Expomer 2<sup>e</sup> édition · « Renaissances Littorales »
      </h1>
      <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
        Une odyssée immersive dédiée à la résilience côtière et aux innovations
        biosourcées qui transforment l&apos;économie maritime d&apos;Afrique de
        l&apos;Ouest. Cette édition confirme le rôle d&apos;Expomer comme
        laboratoire vivant où industriels, territoires et créateurs co-construisent
        des solutions durables.
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
        <a
          href="#objectifs"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ecogic-forest shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
        >
          Objectifs stratégiques
        </a>
        <a
          href="#program"
          className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
        >
          Feuille de route
        </a>
      </div>
    </motion.div>
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_55%)]" />
    <div className="absolute -bottom-16 right-8 hidden h-48 w-48 rounded-full border border-white/30 bg-white/10 blur-2xl sm:block" />
  </section>
);

export default Hero;
