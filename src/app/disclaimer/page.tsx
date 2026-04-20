export default function DisclaimerPage() {
  return (
    <div className="container section" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
      <h1>Disclaimer</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2 style={{ marginTop: '2rem' }}>Nutritional Information</h2>
      <p>The nutritional information provided on QuickBites Kitchen is an estimate and should be used as a guide only. We use third-party calculators to provide this information. Various factors such as product types, brands, and natural fluctuations in fresh produce can change the nutritional information in any given recipe.</p>
      
      <h2 style={{ marginTop: '2rem' }}>Health & Medical Disclaimer</h2>
      <p>The content on QuickBites Kitchen is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or dietary restrictions.</p>

      <h2 style={{ marginTop: '2rem' }}>Affiliate & AdSense Disclaimer</h2>
      <p>QuickBites Kitchen may contain affiliate links and display advertisements through Google AdSense. We may earn a small commission (at no extra cost to you) if you make a purchase through these links. This helps support the website and allows us to continue making free recipes.</p>
    </div>
  );
}
