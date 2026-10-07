import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/registrations";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  college: "",
  event: "",
  category: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address, like name@example.com.";
  if (!/^[0-9]{10}$/.test(values.phone))
    errors.phone = "Enter a 10-digit phone number using digits only.";
  if (!values.college.trim())
    errors.college = "Please enter your college or organization.";
  if (!values.event) errors.event = "Please select an event.";
  return errors;
}

function RegistrationModal({ events, selectedEvent, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    ...emptyForm,
    event: selectedEvent ? selectedEvent.name : "",
    category: selectedEvent ? selectedEvent.category : "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  // Close on Escape key.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Choosing an event in the dropdown also sets its category.
  const handleEventChange = (e) => {
    const match = events.find((ev) => ev.name === e.target.value);
    setFormData((prev) => ({
      ...prev,
      event: e.target.value,
      category: match ? match.category : "",
    }));
    setErrors((prev) => ({ ...prev, event: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(formData);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setLoading(true);
    setApiError("");
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          college: formData.college.trim(),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setFormData(emptyForm);
      onSuccess();
    } catch (err) {
      setApiError(
        "We could not save your registration. Make sure JSON Server is running on port 3001, then try again."
      );
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <h2 id="modal-title">Register for an event</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Varshini" />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" inputMode="numeric" maxLength={10} value={formData.phone} onChange={handleChange} placeholder="9876543210" />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="field">
            <label htmlFor="college">College / Organization</label>
            <input id="college" name="college" value={formData.college} onChange={handleChange} placeholder="National Engineering College" />
            {errors.college && <span className="error">{errors.college}</span>}
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="event">Selected event</label>
              <select id="event" name="event" value={formData.event} onChange={handleEventChange}>
                <option value="">Choose an event</option>
                {events.map((ev) => (
                  <option key={ev.id} value={ev.name}>
                    {ev.name}
                  </option>
                ))}
              </select>
              {errors.event && <span className="error">{errors.event}</span>}
            </div>

            <div className="field">
              <label htmlFor="category">Category</label>
              <input id="category" name="category" value={formData.category} readOnly placeholder="Set by event" />
            </div>
          </div>

          {apiError && <div className="api-error">{apiError}</div>}

          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationModal;
