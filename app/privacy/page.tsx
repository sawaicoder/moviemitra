import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description: "Learn how MovieMitra handles information, cookies, analytics and advertising technologies.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="YOUR PRIVACY"
      title="Privacy Policy"
      intro="This policy explains how MovieMitra may collect, use and protect information when you visit our movie discovery website. Review and update it so it accurately describes the tools and services you actually use before launch."
    >
      <h2>1. Who we are</h2>
      <p>MovieMitra is an independent movie information and discovery website. It publishes film-related information, editorial articles, reviews and links to legitimate viewing options. It is not a film studio, streaming service or download service.</p>
      <p><strong>Website owner / publisher:</strong> [Add your legal name or business name before launch].<br /><strong>Website:</strong> [Add your final website URL].<br /><strong>Privacy contact:</strong> [Replace with a monitored email address].</p>
      <h2>2. Information we may collect</h2>
      <p>Depending on the features enabled on the live website, we may collect:</p>
      <ul>
        <li>Information you choose to send us, such as your name, email address and message when you contact us.</li>
        <li>Technical and usage information such as IP address, browser type, device information, approximate location derived from IP, pages viewed, referring pages and timestamps.</li>
        <li>Cookie identifiers and similar information used for site functionality, analytics, security, advertising and remembering preferences, where enabled and permitted.</li>
      </ul>
      <p>Do not add a contact form, analytics tool, newsletter, account system or advertising service without updating this policy to explain the actual data collected and the relevant provider.</p>
      <h2>3. How we use information</h2>
      <p>We may use information to operate and secure the website, respond to enquiries, understand aggregate site usage, improve content and navigation, prevent abuse, comply with legal obligations and, if enabled, measure and display advertising.</p>
      <h2>4. Cookies, advertising and Google AdSense</h2>
      <p>MovieMitra may use first-party cookies and similar technologies for essential site functions and preferences. If Google AdSense is enabled, Google and its partners may use cookies or other identifiers to serve, measure and personalise ads, subject to the choices available to visitors and applicable law.</p>
      <p>Google's use of advertising cookies enables Google and its partners to serve ads based on visits to this site and/or other sites. Visitors can learn how Google uses information from sites or apps that use its services at <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">How Google uses information from sites or apps that use its services</a> and manage ad personalisation through <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer">My Ad Center</a>.</p>
      <p>Third-party vendors, including Google, may use cookies to serve ads based on a user's prior visits to this website or other websites. Where required, we will provide a suitable consent mechanism before using non-essential cookies or personalised advertising. For visitors in the EEA, UK and Switzerland, publishers using Google advertising products must use a Google-certified Consent Management Platform when required by Google's policies. A basic notice on this page is not a substitute for a compliant CMP.</p>
      <p>We have not enabled AdSense on this starter project. Before enabling advertising, add the actual publisher details, configure the required consent solution for the regions you serve, and confirm the current Google policies.</p>
      <h2>5. Analytics and third-party services</h2>
      <p>If we add analytics, embedded video players, social media embeds, affiliate links, hosting, security or movie-data providers, those services may process technical information under their own privacy terms. This policy must be updated with the actual providers and configuration before those tools go live. We do not claim to use a provider that has not been installed.</p>
      <h2>6. Sharing and disclosure</h2>
      <p>We do not sell personal information for money. We may share limited information with service providers who help operate the website, advertising partners if enabled, or authorities where required by law. We may also disclose information to protect the rights, safety and security of the website, visitors or others.</p>
      <h2>7. Data retention and security</h2>
      <p>We keep personal information only for as long as reasonably necessary for the purpose for which it was collected, to resolve disputes, maintain security and meet legal obligations. We use reasonable technical and organisational safeguards, but no internet transmission or storage system can be guaranteed to be completely secure.</p>
      <h2>8. Your choices and rights</h2>
      <p>Depending on where you live, you may have rights to request access, correction, deletion, restriction or a copy of personal information, or to object to certain processing. You can also manage browser cookies and advertising preferences using the tools linked above. To make a privacy request, contact the website owner using the real privacy email address published on the Contact page.</p>
      <h2>9. Children's privacy</h2>
      <p>MovieMitra is intended for a general audience and is not knowingly designed to collect personal information from children. If you believe a child has provided personal information, contact us so we can review the request.</p>
      <h2>10. Changes to this policy</h2>
      <p>We may update this policy when the website, services or legal requirements change. The revised date at the top of this page indicates when it was last updated.</p>
      <h2>11. Contact</h2>
      <p>For privacy questions or requests, use the contact details on our Contact page. Replace all bracketed owner, domain and email placeholders before publishing this website or applying to AdSense.</p>
    </LegalPage>
  );
}
