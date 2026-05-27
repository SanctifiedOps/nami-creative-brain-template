export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

/** Placeholder client recommendations. Replace with real, attributed quotes. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "A short, specific quote from a real client about working with the studio and the outcome it delivered. Replace this placeholder.",
    author: "Client name",
    role: "Role, Company",
  },
  {
    quote:
      "A second client quote. Keep it concrete: what changed, what shipped, what the result was. Two sentences at most.",
    author: "Client name",
    role: "Role, Company",
  },
  {
    quote:
      "A third client quote that speaks to how the studio works day to day. Honest and specific beats glowing and vague.",
    author: "Client name",
    role: "Role, Company",
  },
  {
    quote:
      "A fourth optional quote. Remove any you do not need; the section handles any count.",
    author: "Client name",
    role: "Role, Company",
  },
];
