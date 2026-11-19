import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, Globe2, Star } from "lucide-react";
import { movies } from "@/lib/movies";

export function generateStaticParams() { return movies.map((movie) => ({ slug: movie.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const movie = movies.find((item) => item.slug === slug);
  return movie ? { title: movie.title, description: movie.synopsis } : {};
}
export default async function MoviePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const movie = movies.find((item) => item.slug === slug);
  if (!movie) notFound();
  return <main className="detail-page"><div className="detail-backdrop" style={{ backgroundImage: `linear-gradient(90deg, #09090c 10%, rgba(9,9,12,.88) 48%, rgba(9,9,12,.35)), url(${movie.backdrop})` }} /><div className="detail-content"><Link href="/" className="back-link"><ArrowLeft size={16}/> Back to movies</Link><span className="section-label">{movie.category.toUpperCase()} SPOTLIGHT</span><h1>{movie.title}</h1><p className="detail-subtitle">{movie.genre}</p><div className="detail-facts"><span><CalendarDays size={15}/>{movie.year}</span><span><Globe2 size={15}/>{movie.language}</span><span><Clock3 size={15}/>{movie.runtime}</span><span><Star size={15} fill="currentColor"/>{movie.rating}/10</span></div><p className="detail-synopsis">{movie.synopsis}</p><div className="notice-box">This is a design demo. Official trailers and legal streaming availability will be added after connecting licensed sources.</div><Link className="btn-primary" href="/#discover">Discover more movies</Link></div></main>;
}
