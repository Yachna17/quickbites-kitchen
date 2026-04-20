export default function TermsPage() {
  return (
    <div className="container section" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2 style={{ marginTop: '2rem' }}>1. Acceptance of Terms</h2>
      <p>By accessing and using QuickBites Kitchen, you accept and agree to be bound by the terms and provision of this agreement.</p>
      
      <h2 style={{ marginTop: '2rem' }}>2. Use of Content</h2>
      <p>All recipes, text, images, and other content on this website are the property of QuickBites Kitchen unless otherwise noted. You may not reproduce, distribute, or transmit any content without prior written permission, except for personal, non-commercial use.</p>

      <h2 style={{ marginTop: '2rem' }}>3. User Comments</h2>
      <p>Users may post comments on recipes as long as the content is not illegal, obscene, threatening, defamatory, or otherwise injurious to third parties. We reserve the right to remove any comments that violate these terms.</p>
    </div>
  );
}
