import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Cookie Policy",
  description: "Information about cookies and similar technologies used by MovieMitra.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage eyebrow="COOKIES & CHOICES" title="Cookie Policy" intro="This page explains how cookies and similar technologies may be used on MovieMitra. The exact cookies depend on which features and third-party services are enabled on the live website.">
      <h2>What are cookies?</h2>
      <p>Cookies are small text files stored by a browser. Similar technologies can store or read information on a device to support site functions, measure usage or deliver advertising.</p>
      <h2>Types of cookies</h2>
      <ul>
        <li><strong>Essential:</strong> help the website operate, maintain security and remember basic technical settings.</li>
        <li><strong>Analytics:</strong> if enabled, help us understand aggregated visitor activity and improve the site.</li>
        <li><strong>Advertising:</strong> if AdSense or another advertising service is enabled, cookies or identifiers may be used to serve, measure or personalise ads.</li>
      </ul>
      <h2>Third-party cookies</h2>
      <p>Third-party services may set their own cookies when their features are used. For information about Google's advertising technologies and controls, see <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">Google's Advertising policy information</a> and <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer">My Ad Center</a>.</p>
      <h2>Managing cookies</h2>
      <p>You can use your browser settings to view, block or delete cookies. Blocking some cookies may affect website functionality. Where required, we will provide a suitable consent mechanism before using non-essential cookies or personalised advertising. If Google advertising is enabled for visitors in the EEA, UK or Switzerland, we will configure a Google-certified CMP as required by Google's current policies.</p>
      <h2>Current site configuration</h2>
      <p>This starter project does not include Google AdSense, analytics tags or a consent-management platform. Before adding those services, update this page to identify the actual providers and configure the appropriate consent controls. Do not claim that a cookie banner alone satisfies every privacy-law or Google consent requirement.</p>
      <h2>Contact</h2>
      <p>For questions about cookies, contact the website owner using the real contact details on our Contact page.</p>
    </LegalPage>
  );
}
