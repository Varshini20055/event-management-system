function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div id="about">
          <h4>About</h4>
          <p>
            Event Management System is a simple college event portal where
            students can browse technical, cultural and sports events and
            register online.
          </p>
        </div>
        <div id="contact">
          <h4>Contact</h4>
          <p>events@college.edu</p>
          <p>+91 98765 43210</p>
          <p>Student Activity Centre, Main Campus</p>
        </div>
        <div>
          <h4>Quick links</h4>
          <p><a href="#home">Home</a></p>
          <p><a href="#events">Events</a></p>
        </div>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Event Management System. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
