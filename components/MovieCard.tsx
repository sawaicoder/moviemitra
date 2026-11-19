import Link from "next/link";
import { Star, Play } from "lucide-react";
import type { Movie } from "@/lib/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movies/${movie.slug}`} className="movie-card group">
      <div className="poster-wrap">
        {/* Remote poster URLs are demo imagery; replace with licensed artwork before launch. */}
        <img src={movie.poster} alt={`${movie.title} poster artwork`} loading="lazy" />
        <div className="poster-overlay"><span className="play-circle"><Play size={18} fill="currentColor" /></span></div>
        <span className="rating"><Star size={12} fill="currentColor" /> {movie.rating}</span>
      </div>
      <div className="movie-meta">
        <h3>{movie.title}</h3>
        <p>{movie.year} <span>·</span> {movie.language} <span>·</span> {movie.genre.split(" · ")[0]}</p>
      </div>
    </Link>
  );
}
