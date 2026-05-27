export type ProcessStep = {
  number: string;
  title: string;
  duration: string;
  summary: string;
  detail: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery + positioning",
    duration: "Weeks 1 to 2",
    summary:
      "Get inside the business, learn what is true, and lock the strategic narrative.",
    detail: [
      "Stakeholder + customer interviews",
      "Market + competitor audit",
      "Positioning workshop + statement",
      "Messaging architecture draft",
    ],
  },
  {
    number: "02",
    title: "Design + build",
    duration: "Weeks 3 to 6",
    summary:
      "Turn strategy into an applied system: visual identity, content, and the website that carries them.",
    detail: [
      "Visual identity + design tokens",
      "Content format + platform plan",
      "Website build",
      "Brand book + applied guidelines",
    ],
  },
  {
    number: "03",
    title: "Launch + integrate",
    duration: "Week 7",
    summary:
      "Ship the brand live, wired into the systems that keep it running.",
    detail: [
      "Live site + analytics in place",
      "Lead-capture + nurture flows",
      "Content + ops handoff",
      "Launch sequence + comms",
    ],
  },
  {
    number: "04",
    title: "Scale + evolve",
    duration: "Ongoing partnership",
    summary:
      "Stay close. Refine what is working, retire what is not, and grow the system as the business grows.",
    detail: [
      "Monthly creative direction",
      "Content pipeline support",
      "Conversion + funnel iteration",
      "New design work as needed",
    ],
  },
];
