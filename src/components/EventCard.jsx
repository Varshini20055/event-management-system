function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function EventCard({ event, onRegister }) {
  return (
    <article className={`event-card cat-${event.category.toLowerCase()}`}>
      <span className="event-badge">{event.category}</span>
      <h3>{event.name}</h3>
      <p className="event-desc">{event.description}</p>
      <dl className="event-meta">
        <div>
          <dt>Date</dt>
          <dd>{formatDate(event.date)}</dd>
        </div>
        <div>
          <dt>Time</dt>
          <dd>{event.time}</dd>
        </div>
        <div>
          <dt>Venue</dt>
          <dd>{event.venue}</dd>
        </div>
      </dl>
      <button className="btn btn-primary" onClick={() => onRegister(event)}>
        Register Now
      </button>
    </article>
  );
}

export default EventCard;
