"use client";
import { useMemo, useState } from "react";
import { Search, ChevronRight, Sparkles } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import { categories, movies } from "@/lib/movies";

export default function HomeClient() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => movies.filter((movie) => (active === "All" || movie.category === active) && `${movie.title} ${movie.language} ${movie.genre}`.toLowerCase().includes(query.toLowerCase())), [active, query]);
  return (
    <>
      <section className="hero">
        <div className="hero-backdrop" />
        <div className="hero-content">
          <div className="eyebrow"><span className="live-dot" /> THE CINEMA GUIDE YOU NEED</div>
          <p className="hero-kicker">DISCOVER • EXPLORE • ENJOY</p>
          <h1>Every story.<br /><span>One destination.</span></h1>
          <p className="hero-description">Find your next favourite film. Explore movie details, cast, trailers, reviews and legal streaming information — all in one place.</p>
          <div className="hero-buttons"><a className="btn-primary" href="#discover">Explore movies <ChevronRight size={17} /></a><a className="btn-ghost" href="#categories">Browse categories</a></div>
          <div className="hero-note"><Sparkles size={14} /> Your friendly guide to cinema from around the world.</div>
        </div>
        <div className="hero-stamp"><span>MM</span><small>EST. 2026</small></div>
      </section>

      <section className="search-section" id="discover">
        <div><span className="section-label">FIND YOUR NEXT WATCH</span><h2>What are you <em>in the mood for?</em></h2></div>
        <label className="search-box"><Search size={19} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies, genres or languages..." /><kbd>⌕</kbd></label>
      </section>

      <section className="content-section" id="trending">
        <div className="section-heading"><div><span className="section-label">HANDPICKED FOR YOU</span><h2>Trending <em>now</em></h2></div><span className="heading-aside">DEMO COLLECTION <span className="red-line" /></span></div>
        <div className="filter-row" id="categories">{categories.map((category) => <button key={category} onClick={() => setActive(category)} className={active === category ? "filter-chip active" : "filter-chip"}>{category}</button>)}</div>
        {filtered.length ? <div className="movie-grid">{filtered.map((movie) => <MovieCard key={movie.slug} movie={movie} />)}</div> : <div className="empty-state">No movies found. Try another title or category.</div>}
      </section>

      <section className="editorial-banner" id="upcoming"><div className="editorial-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span>COMING<br />SOON</span></div><div className="editorial-copy"><span className="section-label">STAY A STEP AHEAD</span><h2>The next big thing<br /><em>starts here.</em></h2><p>Keep an eye on upcoming releases, first looks and the stories everyone will be talking about.</p><a className="text-link" href="#discover">Explore the collection <ChevronRight size={16}/></a></div></section>
    </>
  );
}
