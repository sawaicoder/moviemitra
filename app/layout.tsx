import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: { default: "MovieMitra — Your World of Cinema", template: "%s | MovieMitra" },
  description: "Discover movies from Bollywood, South Indian cinema, Hollywood and around the world. Explore movie details, cast, reviews and legal watch information.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"),
  openGraph: { title: "MovieMitra — Your World of Cinema", description: "Discover your next favourite film.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="site-footer">
          <div className="footer-top">
            <div className="brand footer-brand"><span className="brand-mark"><span>MM</span></span><span>MOVIE<span className="brand-accent">MITRA</span><small>YOUR WORLD OF CINEMA</small></span></div>
            <p>Discover stories worth watching.</p>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} MovieMitra. All rights reserved.</span>
            <div>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/privacy">Privacy</a>
              <a href="/cookies">Cookies</a>
              <a href="/terms">Terms</a>
              <a href="/disclaimer">Disclaimer</a>
              <a href="/copyright">Copyright</a>
              <a href="/editorial-policy">Editorial Policy</a>
            </div>
          </div>
          <p className="disclaimer">MovieMitra is an independent movie information and discovery website. It does not host or provide unauthorised movie downloads or streams. Film names and third-party marks belong to their respective owners. Sample catalogue entries are demonstration content and must be replaced with accurate, licensed information before launch.</p>
        </footer>
      </body>
    </html>
  );
}
