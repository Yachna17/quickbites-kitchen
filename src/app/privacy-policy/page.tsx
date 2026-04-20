export default function PrivacyPolicyPage() {
  return (
    <div className="container section" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2 style={{ marginTop: '2rem' }}>1. Introduction</h2>
      <p>Welcome to QuickBites Kitchen. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
      
      <h2 style={{ marginTop: '2rem' }}>2. The data we collect about you</h2>
      <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
      <ul>
        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
        <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
        <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
        <li><strong>Usage Data</strong> includes information about how you use our website, products and services. (Tracked via Google Analytics 4)</li>
      </ul>

      <h2 style={{ marginTop: '2rem' }}>3. Google AdSense & Cookies</h2>
      <p>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Ads Settings.</p>
    </div>
  );
}
