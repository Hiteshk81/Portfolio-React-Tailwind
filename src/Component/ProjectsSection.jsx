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
    title: "QuickChat – Real-Time Messaging Platform",
    description:
      "Developed a real-time chat web application using MERN stack with Socket.io for instant messaging.
      Built a secure user authentication system with JWT tokens and password encryption to ensure safe login and registration.
      Integrated Cloudinary for media storage and designed a responsive, user-friendly interface for smooth chatting experience.",
    demoUrl: "https://ouick-chat.vercel.app/login",
  },
  {
    id: 3,
    title: "Health care : Helathcare Appointment System",
    description:
     Full-stack web application designed to streamline the medical appointment process for doctors and patients.
    Features secure, role-based user authentication, online appointment booking, and integrated payments via Razorpay.
    Provides personalized dashboards for managing schedules, tracking appointment history.",
    demoUrl: "https://codes-2.onrender.com/",
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
