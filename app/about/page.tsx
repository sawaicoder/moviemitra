import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "About MovieMitra",
  description: "Learn about MovieMitra, an independent movie discovery and information website.",
};

export default function AboutPage() {
  return (
    <LegalPage eyebrow="ABOUT MOVIEMITRA" title="Stories bring us together." intro="MovieMitra is an independent movie discovery and information website built for people who love cinema across languages and borders.">
      <h2>What we do</h2>
      <p>We aim to publish helpful movie guides, original reviews, cast and crew information, release updates, trailers from authorised sources and information about legitimate ways to watch films. Our coverage may include Hindi cinema, regional Indian cinema, Hollywood and international films.</p>
      <h2>What we don't do</h2>
      <p>MovieMitra does not host, upload, stream or provide unauthorised movie downloads. We do not claim to offer films for free when we only provide information about them.</p>
      <h2>Independence</h2>
      <p>MovieMitra is an independent publication and is not affiliated with or endorsed by film studios, distributors, actors or streaming platforms unless a specific relationship is clearly disclosed.</p>
      <h2>Editorial standards</h2>
      <p>We aim to create original, useful and fact-checked content. Read our <a href="/editorial-policy">Editorial Policy</a> for details about research, reviews, corrections, media rights and sponsored content.</p>
      <h2>Get in touch</h2>
      <p>Questions, corrections and suggestions are welcome. Visit our Contact page for the website owner's current contact details.</p>
    </LegalPage>
  );
}
