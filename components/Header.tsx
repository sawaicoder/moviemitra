"use client";
import Link from "next/link";
import { Clapperboard, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand"><span className="brand-mark"><Clapperboard size={20} /></span><span>MOVIE<span className="brand-accent">MITRA</span><small>YOUR WORLD OF CINEMA</small></span></Link>
        <nav className={open ? "main-nav nav-open" : "main-nav"}>
          <Link href="/">Home</Link><a href="/#trending" onClick={() => setOpen(false)}>Trending</a><a href="/#categories" onClick={() => setOpen(false)}>Categories</a><a href="/#upcoming" onClick={() => setOpen(false)}>Upcoming</a>
        </nav>
        <div className="nav-actions"><a className="search-link" href="/#discover" aria-label="Search movies"><Search size={19} /></a><button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></div>
      </div>
    </header>
  );
}
