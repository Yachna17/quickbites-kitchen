export const metadata = {
  title: 'About Us',
  description: 'Learn more about QuickBites Kitchen and our philosophy of healthy, 15-minute meals.',
};

export default function AboutPage() {
  return (
    <div className="container section" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>About QuickBites Kitchen</h1>
      <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
          alt="Cooking in the kitchen" 
          style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}
        />
        <p>Welcome to <strong>QuickBites Kitchen</strong>, your ultimate destination for healthy, delicious meals that fit into your busy schedule.</p>
        <p>We know how hard it can be to balance work, family, and personal time, let alone finding the energy to cook a nutritious meal at the end of the day. That's why we created this space: to prove that you don't need hours in the kitchen to eat well.</p>
        <h2 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Philosophy</h2>
        <p>We believe in the power of the 15-minute meal. Every recipe on our site is designed to be prepped and cooked in 15 minutes or less. We focus on:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li><strong>Accessible Ingredients:</strong> No hunting for rare spices; we use everyday items.</li>
          <li><strong>Nutritional Balance:</strong> High protein, good carbs, and healthy fats.</li>
          <li><strong>Minimal Cleanup:</strong> One-pan and one-pot recipes to save you from endless dishwashing.</li>
        </ul>
        <p>Whether you're a college student on a budget, a busy parent, or someone looking to maintain a healthy lifestyle without the hassle, you'll find something to love here.</p>
      </div>
    </div>
  );
}
