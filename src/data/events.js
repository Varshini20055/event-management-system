// Dummy data: categories and events. Add or edit items here and the UI updates.

export const categories = [
  {
    id: "Technical",
    icon: "💻",
    description: "Build, code and present ideas that solve real problems.",
    examples: ["Hackathon", "Coding Competition", "Paper Presentation", "Project Expo"],
  },
  {
    id: "Cultural",
    icon: "🎭",
    description: "Take the stage with music, movement, drama and style.",
    examples: ["Dance", "Singing", "Drama", "Fashion Show"],
  },
  {
    id: "Sports",
    icon: "🏆",
    description: "Compete with your team and play for the trophy.",
    examples: ["Cricket", "Football", "Volleyball", "Badminton"],
  },
];

export const events = [
  { id: 1, name: "Tech Hackathon", category: "Technical", date: "2026-11-14", time: "9:00 AM", venue: "Innovation Lab, Block A", description: "A 24-hour team hackathon to build a working prototype." },
  { id: 2, name: "Coding Challenge", category: "Technical", date: "2026-11-15", time: "10:30 AM", venue: "Computer Centre", description: "Solve timed algorithm problems and climb the leaderboard." },
  { id: 3, name: "Project Expo", category: "Technical", date: "2026-11-16", time: "11:00 AM", venue: "Main Exhibition Hall", description: "Showcase your project to judges, peers and industry guests." },
  { id: 4, name: "Cultural Fest", category: "Cultural", date: "2026-11-21", time: "5:00 PM", venue: "Open Air Auditorium", description: "An evening of music, drama and performances from every department." },
  { id: 5, name: "Dance Competition", category: "Cultural", date: "2026-11-22", time: "4:00 PM", venue: "Main Auditorium", description: "Solo and group dance rounds across classical and western styles." },
  { id: 6, name: "Singing Competition", category: "Cultural", date: "2026-11-23", time: "3:30 PM", venue: "Mini Auditorium", description: "Sing solo or in a duet and impress our panel of judges." },
  { id: 7, name: "Cricket Tournament", category: "Sports", date: "2026-12-02", time: "8:00 AM", venue: "College Cricket Ground", description: "Inter-department knockout matches played in a T10 format." },
  { id: 8, name: "Football Tournament", category: "Sports", date: "2026-12-03", time: "7:30 AM", venue: "University Football Field", description: "Seven-a-side football with group stages and a final." },
  { id: 9, name: "Badminton Championship", category: "Sports", date: "2026-12-04", time: "9:00 AM", venue: "Indoor Sports Complex", description: "Singles and doubles brackets for all skill levels." },
];
