import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Disclaimer",
  description: "Important information about MovieMitra's independent movie coverage, third-party links and content.",
};

export default function DisclaimerPage() {
  return (
    <LegalPage eyebrow="IMPORTANT INFORMATION" title="Independent movie information." intro="MovieMitra is an independent movie discovery and information website. Please read this disclaimer before relying on information published here.">
      <h2>No downloads or streaming</h2>
      <p>MovieMitra does not host, upload, stream or provide unauthorised downloads of copyrighted films or television programmes. We provide informational and editorial content and may link to legitimate third-party services.</p>
      <h2>Accuracy and availability</h2>
      <p>Release dates, cast details, credits, ratings, reviews and streaming availability can change. We aim to verify information, but do not guarantee that every item is complete, current or error-free. Confirm availability with the relevant official service.</p>
      <h2>Third-party names and trademarks</h2>
      <p>Film titles, studio names, streaming-service names, logos and other marks belong to their respective owners. Their mention is for identification and informational purposes and does not imply affiliation, sponsorship or endorsement.</p>
      <h2>Images, trailers and rights</h2>
      <p>All media must be original, licensed, permissioned or otherwise legally usable. Where we embed or link to third-party media, that media remains subject to the rights and terms of its owner or platform.</p>
      <h2>Editorial opinions</h2>
      <p>Reviews and ratings are opinions, not statements of fact. Sponsored or affiliate relationships, if any, should be clearly disclosed near the relevant content.</p>
      <h2>External links</h2>
      <p>We are not responsible for the content, privacy practices, security or availability of external websites. You use third-party services at your own discretion and subject to their terms.</p>
    </LegalPage>
  );
}
