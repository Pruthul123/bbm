"use client";

import { motion } from 'framer-motion';
import { FaRegGem, FaPenNib, FaVideo, FaChartLine, FaLayerGroup, FaCode } from 'react-icons/fa6';

const services = [
  { title: 'Branding', icon: FaRegGem, copy: 'Naming, identity systems, visual language, and launch-ready brand architecture.', span: 'md:col-span-2 md:row-span-2' },
  { title: 'Website Development', icon: FaCode, copy: 'App-router builds with refined UX, motion systems, and performance-first frontends.', span: '' },
  { title: 'Graphic Design', icon: FaPenNib, copy: 'Editorial graphics, social systems, campaigns, and visual consistency across touchpoints.', span: '' },
  { title: 'Video Editing', icon: FaVideo, copy: 'Cinematic edits, motion titles, polished cuts, and brand-led visual rhythm.', span: '' },
  { title: 'Digital Marketing', icon: FaChartLine, copy: 'High-conviction strategy, paid social, funnels, and measurable growth storytelling.', span: 'md:col-span-2' },
  { title: 'Content Creation', icon: FaLayerGroup, copy: 'Premium content engines that keep the brand moving with clarity and pace.', span: '' }
];

export default function BentoServices() {
  return (
    <div className="grid gap-4 md:grid-cols-3 md:auto-rows-[230px]">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            className={`group rounded-[28px] border border-black/[0.06] bg-[rgba(255,255,255,0.45)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow ${service.span}`}
          >
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white transition group-hover:rotate-6 group-hover:bg-orange group-hover:text-dark">
                  <Icon className="text-2xl" />
                </div>
                <p className="font-groove text-[11px] uppercase tracking-[0.38em] text-black/55">0{index + 1}</p>
              </div>
              <div>
                <h3 className="font-display text-4xl uppercase leading-[0.92] tracking-[0.1em] text-navy md:text-5xl">{service.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-black/80">{service.copy}</p>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}