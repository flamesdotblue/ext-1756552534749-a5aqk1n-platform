import Spline from '@splinetool/react-spline';
import { ShoppingCart, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Street Stories in Black & White
          </h1>
          <p className="mt-4 text-lg md:text-xl text-zinc-300">
            35mm film frames from cities around the world — grain, grit, and quiet moments.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#prints"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-zinc-200 transition"
            >
              <ShoppingCart className="h-5 w-5" />
              Buy Prints
            </a>
            <a
              href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-800 text-white px-6 py-3 font-medium hover:bg-zinc-700 transition"
            >
              <Instagram className="h-5 w-5" />
              Follow on IG
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
