function Hero({ onRegisterClick }) {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <h1>
          Discover.
          <br />
          Participate.
          <br />
          Celebrate.
        </h1>
        <p>
          Explore exciting technical, cultural, and sports events and register
          for the events you love.
        </p>
        <div className="hero-actions">
          <a href="#events" className="btn btn-primary btn-lg">
            Explore Events
          </a>
          <button className="btn btn-light btn-lg" onClick={onRegisterClick}>
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
