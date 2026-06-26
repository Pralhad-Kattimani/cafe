import "./Contact.css";

function Contact() {
const handleSubmit = (e) => {
  e.preventDefault();

  alert("Message sent successfully!");

  e.target.reset(); // Clears all form fields
};
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <p className="subtitle">GET IN TOUCH</p>

          <h2>
            We would love <br />
            <span>to hear from you.</span>
          </h2>

          <p className="description">
            Questions about our menu, events, wholesale coffee,
            or just want to say hello — reach us on WhatsApp
            for the fastest reply.
          </p>

          <div className="contact-buttons">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              WhatsApp Us
            </a>

            <a href="tel:+919876543210" className="call-btn">
              Call Us
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-form-box">
          <h3>Send a Message</h3>

          <form onSubmit={handleSubmit} >
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                required
              />

  <input
  type="tel"
  placeholder="Phone / WhatsApp"
  maxLength="10"
  required
  pattern="[0-9]{10}"
  onInput={(e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  }}
 required />
            </div>

            <input
              type="text"
              placeholder="Subject"
            required />

            <textarea
              rows="6"
              placeholder="How can we help?"
           required ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;