import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CategoryCard from "./components/CategoryCard.jsx";
import EventsSection from "./components/EventsSection.jsx";
import RegistrationModal from "./components/RegistrationModal.jsx";
import Footer from "./components/Footer.jsx";
import { categories, events } from "./data/events.js";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("All");
  const [successMessage, setSuccessMessage] = useState("");

  const openModal = (event = null) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const handleSuccess = () => {
    closeModal();
    setSuccessMessage("Registration successful!");
  };

  const handleViewEvents = (categoryName) => {
    setFilter(categoryName);
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (!successMessage) return;
    const timer = setTimeout(() => setSuccessMessage(""), 4000);
    return () => clearTimeout(timer);
  }, [successMessage]);

  return (
    <>
      <Navbar onRegisterClick={() => openModal()} />
      <main>
        <Hero onRegisterClick={() => openModal()} />

        <section id="categories" className="section section-tint">
          <div className="container">
            <h2 className="section-title">Three ways to take part</h2>
            <p className="section-sub">Choose a category and see what is on.</p>
            <div className="grid categories-grid">
              {categories.map((cat) => (
                <CategoryCard key={cat.id} category={cat} onViewEvents={handleViewEvents} />
              ))}
            </div>
          </div>
        </section>

        <EventsSection
          events={events}
          filter={filter}
          onFilterChange={setFilter}
          onRegister={openModal}
        />
      </main>
      <Footer />

      {modalOpen && (
        <RegistrationModal
          events={events}
          selectedEvent={selectedEvent}
          onClose={closeModal}
          onSuccess={handleSuccess}
        />
      )}

      {successMessage && (
        <div className="toast" role="status">
          ✓ {successMessage}
        </div>
      )}
    </>
  );
}

export default App;
