import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Contact MovieMitra",
  description: "Contact MovieMitra for general questions, corrections, privacy requests and copyright concerns.",
};

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "REPLACE-WITH-YOUR-EMAIL@example.com";

export default function ContactPage() {
  const isPlaceholder = email.includes("REPLACE-WITH-YOUR-EMAIL");
  return (
    <LegalPage eyebrow="GET IN TOUCH" title="Let's talk cinema." intro="We welcome reader feedback, factual corrections, privacy questions and copyright concerns.">
      <h2>Contact the team</h2>
      {isPlaceholder ? (
        <p><strong>Action required:</strong> The website owner must set a real, monitored contact email in <code>NEXT_PUBLIC_CONTACT_EMAIL</code> before publishing this site or applying for advertising approval.</p>
      ) : (
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
      )}
      <h2>What to include</h2>
      <ul>
        <li><strong>General enquiries:</strong> Tell us what you would like to know.</li>
        <li><strong>Corrections:</strong> Include the article URL, the statement that needs correcting and a reliable source.</li>
        <li><strong>Privacy requests:</strong> Describe the request and provide enough information for us to locate the relevant correspondence.</li>
        <li><strong>Copyright concerns:</strong> Include the exact page URL, identify the material and explain your rights or authority to report it. See our Copyright page.</li>
      </ul>
      <p>We aim to review genuine enquiries within a reasonable time. Do not send passwords, payment card details or other sensitive information by email.</p>
    </LegalPage>
  );
}
