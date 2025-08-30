import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';

function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none mix-blend-soft-light opacity-30"
      style={{
        backgroundImage:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAAB2tZ8rAAAACXBIWXMAAAsSAAALEgHS3X78AAAAZUlEQVRYhe3TMQ6CQBBF0a9U5p9Jq2qv0g1LwCw4aYcP5w0M8k5cX2vQ8g0j8m6k3l0mQkq4r4e2k3G8t1gJp8gW0i5K6+f1xV8w9wK7i7vP5oV7w3pQ4GkJbq8Q5P4qcA1bq2hY0k4m3rB4d1dGq2l0Wk6q3v9pQb3HkG+JY2C6w5w3+Zk9nA7F2r6WZ3v8vk7jKc8w3T5yK6F5B3E8Yk7c0QAAO5dQn2l7j0EAAAAAElFTkSuQmCC')",
        backgroundSize: 'auto',
      }}
    />
  );
}

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen antialiased relative">
      <GrainOverlay />
      <Hero />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}
