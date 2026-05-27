export type FAQ = {
  question: string;
  answer: string;
};

export const faq: FAQ[] = [
  {
    question: "How does the studio work?",
    answer:
      "Placeholder answer. Describe how the studio is structured, who clients work with day to day, and what makes the approach different. Keep it specific to the brand.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Placeholder answer. Describe the ideal client: stage, size, sector, and the common thread that makes a good fit.",
  },
  {
    question: "How long does a typical engagement run?",
    answer:
      "Placeholder answer. A foundational brand and website project usually lands in a set number of weeks, with ongoing partnership after. Set real timelines here.",
  },
  {
    question: "Do you only do digital, or campaigns and print too?",
    answer:
      "Placeholder answer. State the range of work the studio takes on and where the brand needs to hold up.",
  },
  {
    question: "What does it cost?",
    answer:
      "Placeholder answer. Explain how pricing works: sized to the work, packaged, or retainer. Set expectations honestly.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Placeholder answer. Explain when the studio builds on an existing foundation and when it starts clean.",
  },
];

/**
 * Per-service FAQ. Keyed by service slug. Falls back to the general `faq`
 * above if a slug is not covered here. Keys must match slugs in
 * lib/content/services.ts.
 */
export const serviceFaq: Record<string, FAQ[]> = {
  "brand-strategy": [
    {
      question: "What ships at the end of a brand engagement?",
      answer:
        "Placeholder answer. List the concrete deliverables: positioning, messaging, identity system, and a usable brand framework.",
    },
    {
      question: "Do you do naming?",
      answer:
        "Placeholder answer. State whether naming is part of the offer and when you recommend it.",
    },
    {
      question: "We already have a logo. Do we start over?",
      answer:
        "Placeholder answer. Explain how you handle an existing identity: keep, rebuild, or restart.",
    },
    {
      question: "How long does a brand build take?",
      answer:
        "Placeholder answer. Give a realistic range for a focused brand engagement.",
    },
  ],

  "content-systems": [
    {
      question: "Do you build the system, or also produce the content?",
      answer:
        "Placeholder answer. Clarify whether you design the formats, produce against them, or both.",
    },
    {
      question: "Which platforms do you cover?",
      answer:
        "Placeholder answer. Name the platforms you focus on and how you choose them.",
    },
    {
      question: "How does AI fit in?",
      answer:
        "Placeholder answer. Explain how you use AI in the workflow and where human judgement stays.",
    },
    {
      question: "Can you take over an existing content function?",
      answer:
        "Placeholder answer. Describe how you audit and rebuild an existing content operation.",
    },
  ],

  "website-design": [
    {
      question: "How do you decide what to build the site on?",
      answer:
        "Placeholder answer. Explain how you pick the stack against the brief.",
    },
    {
      question: "Do you handle hosting and ongoing maintenance?",
      answer:
        "Placeholder answer. State what is included at launch and what ongoing support looks like.",
    },
    {
      question: "Rebuild on our current site, or full restart?",
      answer:
        "Placeholder answer. Explain when you redesign in place and when you start clean.",
    },
    {
      question: "Will the site be fast and SEO-ready?",
      answer:
        "Placeholder answer. Confirm performance, semantic markup, and analytics are part of the build.",
    },
  ],

  "visual-direction": [
    {
      question: "Do you shoot photography and video, or only direct it?",
      answer:
        "Placeholder answer. Clarify what you produce in-house versus art-direct.",
    },
    {
      question: "We already have visual assets. Can you direct from those?",
      answer:
        "Placeholder answer. Explain how you blend new direction with existing libraries.",
    },
    {
      question: "Is creative direction a one-off or ongoing?",
      answer:
        "Placeholder answer. Describe both options and when each fits.",
    },
    {
      question: "Do you deliver editable assets and templates?",
      answer:
        "Placeholder answer. Confirm what editable files and templates the client receives.",
    },
  ],

  "automation-growth": [
    {
      question: "How do you decide what to build with?",
      answer:
        "Placeholder answer. Explain how you choose tooling and lean toward what the team can operate.",
    },
    {
      question: "Will my team be able to maintain this after you leave?",
      answer:
        "Placeholder answer. Describe documentation, training, and handoff.",
    },
    {
      question: "Do you do custom integrations or only no-code?",
      answer:
        "Placeholder answer. State where you use no-code versus custom code.",
    },
    {
      question: "How do you decide what is worth automating?",
      answer:
        "Placeholder answer. Give the bar a workflow has to clear before it earns automation.",
    },
  ],
};

export function getServiceFaq(slug: string): FAQ[] {
  return serviceFaq[slug] ?? faq;
}
