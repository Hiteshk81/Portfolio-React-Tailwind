import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "TaskFlow Pro",
    description: "A task management application designed to streamline your workflow and boost productivity. Organize your tasks with ease, prioritize effectively, and stay on top of deadlines with a clean, intuitive interface.",
    demoUrl: "https://task-flow-pro-c2f1f4ab.base44.app",
  },
    {
    id: 2,
    title: "Basic Block-Chain Simulation Sysytem",
    description:
      "Simulates a 4-user blockchain network with SHA-512 encryption. Allows adding transactions with consensus validation, viewing local copies, and simulating attacks to demonstrate blockchain security and P2P consensus.",
    demoUrl: "https://github.com/Hiteshk81/Basic-Simulation-of-a-Blockchain-System-C-",
  },
  {
    id: 3,
    title: "Hotel Mnagement System",
    description:
      "Developed a system to simplify staff tasks like check-ins, check-outs, room assignments, and billing. I automated processes using PL/SQL procedures to reduce manual errors and to save administrative time and support better decision-making.",
    demoUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projects
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-6 relative"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

              {/* Demo icon at left bottom corner */}
              <div className="absolute bottom-4 left-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Hiteshk81"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
