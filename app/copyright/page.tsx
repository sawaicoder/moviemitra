import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Copyright & Content Removal",
  description: "How to contact MovieMitra about copyright or intellectual-property concerns.",
};

export default function CopyrightPage() {
  return (
    <LegalPage eyebrow="INTELLECTUAL PROPERTY" title="Copyright & Content Removal" intro="MovieMitra respects intellectual-property rights. We do not intend to host or distribute unauthorised copies of films, television programmes, music or other copyrighted works.">
      <h2>Report a concern</h2>
      <p>If you believe material displayed on MovieMitra infringes your copyright or other rights, send a notice to the website owner using the contact email published on our Contact page. Please include:</p>
      <ul>
        <li>Your name and a reliable way to contact you.</li>
        <li>Identification of the copyrighted work or other right you believe has been infringed.</li>
        <li>The exact page URL and a description of the material you want reviewed.</li>
        <li>An explanation of why you believe the use is unauthorised, plus evidence of your authority to act for the rights holder where relevant.</li>
        <li>A statement that the information in your notice is accurate to the best of your knowledge.</li>
      </ul>
      <h2>Review process</h2>
      <p>We will review complete notices and may remove, restrict or replace material while a concern is investigated. We may request additional information where a notice is incomplete. Submitting a notice does not guarantee a particular outcome.</p>
      <h2>Third-party platforms</h2>
      <p>MovieMitra may link to content hosted by independent third-party services. We do not control those services. If your complaint concerns material hosted elsewhere, contact the relevant platform or hosting provider directly as well.</p>
      <h2>Contact details must be completed</h2>
      <p>Before launch, the website owner must publish a monitored copyright contact email on the Contact page. This page is an operational contact process, not legal advice or a substitute for any formal notice procedure required by applicable law.</p>
    </LegalPage>
  );
}
