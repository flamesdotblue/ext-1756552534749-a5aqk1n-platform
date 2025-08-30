import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const photos = [
  {
    city: 'Tokyo',
    year: '2023',
    src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d6?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wx',
  },
  {
    city: 'New York',
    year: '2022',
    src: 'https://images.unsplash.com/photo-1443304895043-ef30921332c5?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    city: 'Paris',
    year: '2021',
    src: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    city: 'Hong Kong',
    year: '2020',
    src: 'https://images.unsplash.com/photo-1521298277777-5aac66f17367?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    city: 'Istanbul',
    year: '2019',
    src: 'https://images.unsplash.com/photo-1516549442548-557648491178?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    city: 'Mexico City',
    year: '2023',
    src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1880&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
];

function ParallaxCard({ item, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -40 : 40, index % 2 === 0 ? 40 : -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y, scale }} className="group relative overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
        <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-30" style={{ backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAAB2tZ8rAAAACXBIWXMAAAsSAAALEgHS3X78AAAAZUlEQVRYhe3TMQ6CQBBF0a9U5p9Jq2qv0g1LwCw4aYcP5w0M8k5cX2vQ8g0j8m6k3l0mQkq4r4e2k3G8t1gJp8gW0i5K6+f1xV8w9wK7i7vP5oV7w3pQ4GkJbq8Q5P4qcA1bq2hY0k4m3rB4d1dGq2l0Wk6q3v9pQb3HkG+JY2C6w5w3+Zk9nA7F2r6WZ3v8vk7jKc8w3T5yK6F5B3E8Yk7c0QAAO5dQn2l7j0EAAAAAElFTkSuQmCC')" }} />
        <img
          src={`${item.src}&grayscale&sat=-100`}
          alt={`${item.city} — ${item.year}`}
          className="h-80 w-full object-cover grayscale contrast-125 group-hover:contrast-150 transition duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
          <div>
            <h3 className="text-lg font-medium">{item.city}</h3>
            <p className="text-xs text-zinc-400">{item.year}</p>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-zinc-400">35mm</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="prints" className="relative py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.06) 0 20%, transparent 40%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.05) 0 20%, transparent 40%)",
        }}
      />
      <div className="container mx-auto px-6 max-w-6xl relative">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Selected Frames</h2>
            <p className="text-zinc-400 mt-2">Hand-printed on archival baryta paper. Limited runs.</p>
          </div>
          <a
            href="mailto:prints@streetbw.example?subject=Print%20Inquiry"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 hover:bg-zinc-800 transition"
          >
            Request a custom print
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <ParallaxCard key={p.city + i} item={p} index={i} />
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3">
          <a
            href="mailto:prints@streetbw.example?subject=Buy%20Prints"
            className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-zinc-200 transition"
          >
            Buy Prints
          </a>
          <a
            href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-zinc-700 text-white px-5 py-3 font-medium hover:bg-zinc-800 transition"
          >
            Follow on IG
          </a>
        </div>
      </div>
    </section>
  );
}
