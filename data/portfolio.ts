export const site = {
  name: "Pulasthi Aberathne",
  shortName: "PA",
  title: "Full-Stack Engineer",
  email: "hello@pulasthiabey.dev",
  website: "https://pulasthiabey.dev",
  github: "https://github.com/PulasthiAbey",
  linkedin: "https://www.linkedin.com/in/pulasthi-aberathne-b87979175/",
  medium: "https://pulasthiaberathne.medium.com/",
};

export function getExperienceYears(date = new Date()) {
  const startDate = new Date(2019, 4, 1);
  let years = date.getFullYear() - startDate.getFullYear();

  if (
    date.getMonth() < startDate.getMonth() ||
    (date.getMonth() === startDate.getMonth() && date.getDate() < startDate.getDate())
  ) {
    years -= 1;
  }

  return years;
}

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const expertise = [
  { number: "01", title: "Backend & APIs", description: "Designing services and communication boundaries that stay clear as systems grow.", technologies: ["Node.js", "TypeScript", "NestJS", "Java", "Spring Boot", "REST", "gRPC", "Protobuf"] },
  { number: "02", title: "Frontend & Mobile", description: "Building focused interfaces across web and mobile, with the API contract in mind.", technologies: ["React", "Next.js", "React Native", "TypeScript"] },
  { number: "03", title: "Cloud & Platform", description: "Working close to the runtime: deployments, environments, and the systems that keep products moving.", technologies: ["AWS", "GCP", "Kubernetes", "Helm", "Docker", "CI/CD"] },
  { number: "04", title: "Data & Systems", description: "Connecting data, integrations, and distributed system concerns into dependable product behavior.", technologies: ["PostgreSQL", "MongoDB", "Distributed systems", "Integrations", "Caching", "Geospatial / search"] },
];

export const caseStudies = [
  { number: "01", type: "Platform engineering", title: "Unified Location Discovery Platform", description: "A backend platform that combined location and place information from multiple external providers into a consistent discovery experience.", details: ["Built backend services integrating multiple external data providers.", "Normalized heterogeneous provider data into consistent application models.", "Implemented geographic deduplication, relevance-based ranking, and proximity-aware search.", "Used caching to reduce unnecessary external API calls and exposed a consistent API layer to consumers."], technologies: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Google Places", "TripAdvisor APIs"] },
  { number: "02", type: "Current professional work", title: "Enterprise Distributed Services", description: "Building and maintaining enterprise distributed services and applications using Java / Spring Boot and TypeScript / NestJS, with service-to-service communication using gRPC / Protocol Buffers and deployment into Kubernetes-based cloud environments.", details: ["Details intentionally limited to respect client and employer confidentiality."], technologies: ["Java", "Spring Boot", "NestJS", "TypeScript", "gRPC", "Protocol Buffers", "React", "Kubernetes", "Helm", "GCP"] },
  { number: "03", type: "Product engineering", title: "Mobile & Web Product Engineering", description: "Professional work across React, React Native, and TypeScript applications, including API integration, GraphQL, mobile development, production troubleshooting, and reliability work.", details: [], technologies: ["React", "React Native", "TypeScript", "GraphQL", "REST APIs"] },
];

export const writing = { title: "gRPC vs REST: What I Learned Using Both in Distributed Systems", description: "Why the right choice depends less on the technology and more on the communication boundary you’re designing.", href: site.medium };
