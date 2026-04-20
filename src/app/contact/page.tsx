export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the QuickBites Kitchen team.',
};

export default function ContactPage() {
  return (
    <div className="container section" style={{ maxWidth: '600px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Contact Us</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
        Have a question, recipe request, or just want to say hi? We'd love to hear from you!
      </p>
      
      <form 
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}
      >
        <div>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
          <input type="text" id="name" required placeholder="Your name" />
        </div>
        
        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
          <input type="email" id="email" required placeholder="your.email@example.com" />
        </div>
        
        <div>
          <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Subject</label>
          <select id="subject">
            <option>General Inquiry</option>
            <option>Recipe Question</option>
            <option>Partnership/Sponsorship</option>
            <option>Site Feedback</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
          <textarea id="message" rows={6} required placeholder="How can we help you?"></textarea>
        </div>
        
        <button type="button" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}
