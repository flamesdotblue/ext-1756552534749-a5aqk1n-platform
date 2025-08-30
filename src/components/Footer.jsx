import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Street BW — All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition"
          >
            <Instagram className="h-5 w-5" />
            Follow on IG
          </a>
          <a
            href="mailto:hello@streetbw.example"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition"
          >
            <Mail className="h-5 w-5" />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
