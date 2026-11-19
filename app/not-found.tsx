import Link from "next/link";
export default function NotFound() { return <main className="not-found"><span className="section-label">404 · SCENE MISSING</span><h1>This story isn't here.</h1><p>The page may have moved or the movie does not exist in this demo collection.</p><Link href="/" className="btn-primary">Back to homepage</Link></main>; }
