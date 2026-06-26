import "./Hours.css";

function Hours() {
  return (
    <section className="hours-section" id="hours">
      <div className="hours-container">

        {/* Opening Hours */}
        <div className="hours-left">
          <p className="sub-title">WHEN TO VISIT</p>
          <h2>Opening Hours</h2>

          <div className="hours-table">
            <div className="row">
              <span>Monday - Friday</span>
              <span>07:00 - 19:00</span>
            </div>

            <div className="row">
              <span>Saturday</span>
              <span>08:00 - 18:00</span>
            </div>

            <div className="row">
              <span>Sunday</span>
              <span>09:00 - 17:00</span>
            </div>
          </div>

          <div className="hours-buttons">
            <a href="tel:+91234567890" className="call-btn">
              📞 Call Us
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="hours-right">
          <p className="sub-title">FIND US</p>
          <h2>Location</h2>

          <iframe
            title="Cafe Location"
            src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <p className="address">
            📍 FC Road, Pune, Maharashtra
          </p>
        </div>

      </div>
    </section>
  );
}

export default Hours;