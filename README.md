# Event Management System

A React landing page for college events with dummy registration, stored via JSON Server.

## Install

```bash
npm install
```

## Run (two terminals)

```bash
# Terminal 1 - JSON Server (API + database)
npx json-server --watch db.json --port 3001

# Terminal 2 - React app
npm run dev
```

Or run both at once: `npm run start:all`

- App: http://localhost:5173
- API: http://localhost:3001/registrations

## How registration data flows

1. User clicks **Register Now** on an event card. `App.jsx` stores the event in state and opens `RegistrationModal`.
2. The modal pre-fills Event and Category, the user fills in the rest, and the form is validated.
3. `fetch()` sends a `POST` with the form data as JSON to `http://localhost:3001/registrations`.
4. JSON Server assigns an `id` and writes the record into the `registrations` array in `db.json`.
5. React receives a success response, closes and resets the form, and shows "Registration successful!".

If JSON Server is not running, the form shows an error message instead.

## Customising

Edit `src/data/events.js` to add or change categories and events.
