export type Project = {
  title: string;
  category: string;
  description: string;
  tools: string[];
  status: string;
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    category: "Software",
    description:
      "A personal portfolio site for showcasing engineering projects, business analysis, writing, and technical growth. Built as a clean, expandable platform rather than a one-off static page.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
    status: "In progress",
  },
  {
    title: "Desk-Mounted Robot Arm",
    category: "Engineering / Robotics",
    description:
      "A robotics project focused on detecting and interacting with objects near a desk. The goal is to build technical depth in electronics, control, CAD, and embedded systems.",
    tools: ["ESP32", "sensors", "servos", "CAD", "3D printing"],
    status: "Planning / prototyping",
  },
  {
    title: "Business and Market Analysis",
    category: "Finance / Strategy",
    description:
      "A collection of written analysis on markets, companies, industries, and strategy. The goal is to develop judgment across engineering, finance, and business.",
    tools: ["Research", "economic analysis", "financial modeling"],
    status: "Ongoing",
  },
];
