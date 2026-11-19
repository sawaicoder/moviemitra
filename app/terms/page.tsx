import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Use",
  description: "Terms governing your use of the MovieMitra movie information website.",
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="PLEASE READ" title="Terms of Use" intro="These terms apply to your access to and use of MovieMitra. By using the website, you agree to these terms.">
      <h2>1. About MovieMitra</h2>
      <p>MovieMitra is an independent movie discovery and information website. We may publish editorial articles, film facts, cast and crew information, reviews, release information and links to third-party services. We do not host, upload, stream or provide unauthorised copies of copyrighted films.</p>
      <h2>2. Informational purposes</h2>
      <p>We make reasonable efforts to keep information accurate and current, but release dates, cast details, ratings, availability and other information can change. We do not guarantee that every listing is complete, current or error-free. Verify important details with the relevant rights holder or official service.</p>
      <h2>3. Intellectual property</h2>
      <p>Unless otherwise stated, original MovieMitra text, branding and site design belong to the website owner. Film titles, names, trademarks, posters, stills, logos, trailers and other third-party materials may belong to their respective owners. Their appearance does not imply endorsement or affiliation. We will only use third-party assets where we have permission, a licence or another valid legal basis.</p>
      <h2>4. Acceptable use</h2>
      <p>You agree not to misuse the website, attempt unauthorised access, interfere with its operation, distribute malware, scrape or copy content at scale without permission, submit unlawful material, or use the site to infringe another person's rights.</p>
      <h2>5. Third-party links</h2>
      <p>Links to streaming platforms, ticketing services, social networks or other websites are provided for convenience. We do not control those services and are not responsible for their content, availability, terms or privacy practices. A link is not an endorsement unless expressly stated.</p>
      <h2>6. Advertising and affiliate links</h2>
      <p>The website may display third-party advertising, including Google AdSense, and may use affiliate links in the future. If we receive a commission from a qualifying purchase or action, we will provide a clear disclosure near the relevant link or content. Ads and sponsored content do not determine our editorial opinions.</p>
      <h2>7. No warranties; limitation</h2>
      <p>The website is provided on an “as is” and “as available” basis to the extent permitted by law. To the extent permitted by applicable law, MovieMitra disclaims warranties and is not liable for indirect or consequential loss arising from use of the website. Nothing in these terms excludes liability that cannot legally be excluded.</p>
      <h2>8. Changes and availability</h2>
      <p>We may change, suspend or remove features or content at any time. We may update these terms by publishing a revised version on this page.</p>
      <h2>9. Governing law</h2>
      <p>These terms are subject to applicable laws. Before launch, the website owner should insert the appropriate governing-law and jurisdiction details after obtaining advice relevant to the owner's location and business.</p>
      <h2>10. Contact</h2>
      <p>For questions about these terms, contact us using the real contact details published on our Contact page.</p>
    </LegalPage>
  );
}
