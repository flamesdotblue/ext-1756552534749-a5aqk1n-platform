export default function About() {
  return (
    <section className="relative py-24">
      <div
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1475274222280-67279c0b0bb3?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&grayscale')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
        }}
      />
      <div className="relative container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold">Process</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-10 text-zinc-300">
          <p>
            I walk until the city slows down. Light meets concrete, faces cross in a fraction of a second, and I trust the frame. Everything here is shot on 35mm and medium format black-and-white film, developed at home, and printed in the darkroom.
          </p>
          <p>
            The work is about rhythm — footsteps, traffic, the hum between strangers. Grain is not an effect; it is the sound of the street on paper. Prints are made on archival baryta paper with a semi-matte finish to preserve the texture and tonal depth.
          </p>
        </div>
      </div>
    </section>
  );
}
