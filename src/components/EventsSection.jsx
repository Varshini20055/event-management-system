import EventCard from "./EventCard.jsx";

function EventsSection({ events, filter, onFilterChange, onRegister }) {
  const filters = ["All", "Technical", "Cultural", "Sports"];
  const visible =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <section id="events" className="section">
      <div className="container">
        <h2 className="section-title">Upcoming events</h2>
        <p className="section-sub">
          Pick an event and register in under a minute.
        </p>

        <div className="filters" role="tablist" aria-label="Filter events">
          {filters.map((name) => (
            <button
              key={name}
              role="tab"
              aria-selected={filter === name}
              className={`chip ${filter === name ? "active" : ""}`}
              onClick={() => onFilterChange(name)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="grid events-grid">
          {visible.map((event) => (
            <EventCard key={event.id} event={event} onRegister={onRegister} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
