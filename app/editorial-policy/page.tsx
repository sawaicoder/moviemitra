import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Editorial Policy",
  description: "MovieMitra's standards for research, reviews, corrections and sponsored content.",
};

export default function EditorialPolicyPage() {
  return (
    <LegalPage eyebrow="OUR STANDARDS" title="Editorial Policy" intro="Our goal is to help readers discover films through useful, clear and responsible information. This policy describes the standards every published article should follow.">
      <h2>Original work</h2>
      <p>Articles should be written or meaningfully edited by a human editor and add context, explanation, analysis or first-hand observations. We do not publish copied articles, spun text, scraped descriptions or mass-produced pages created only to attract search traffic.</p>
      <h2>Research and fact-checking</h2>
      <p>Writers should use reliable sources, prioritise official studio, distributor and streaming-service announcements for release and availability details, and verify names, dates and credits before publication. When information is uncertain, the article should say so.</p>
      <h2>Reviews and opinions</h2>
      <p>Reviews should reflect the writer's genuine opinion and explain the basis for that opinion. Ratings, where used, should follow a consistent editorial approach. Paid placements must never be presented as independent reviews.</p>
      <h2>Updates and corrections</h2>
      <p>We aim to correct material errors when they are brought to our attention. Significant updates should be reflected in the article where useful. Readers can report errors through the Contact page.</p>
      <h2>Images and other media</h2>
      <p>We use original, licensed, permissioned or otherwise lawfully usable media. We do not assume that a poster, screenshot, press image or trailer thumbnail is free to reuse simply because it is available online. Credits and attribution are provided when required by the applicable licence.</p>
      <h2>AI assistance</h2>
      <p>AI tools may be used for research assistance, outlining, translation or editing, but they do not replace editorial verification. We do not publish unreviewed AI output as fact or use automation to generate large volumes of low-value pages.</p>
      <h2>Advertising and conflicts</h2>
      <p>Advertising and affiliate relationships should be clearly disclosed. Advertisers do not receive editorial control over independent coverage, and sponsored material should be labelled.</p>
    </LegalPage>
  );
}
