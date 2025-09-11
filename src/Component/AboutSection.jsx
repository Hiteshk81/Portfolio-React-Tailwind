import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">

            <p className="text-muted-foreground">
             I am a Computer Science Engineering student with a keen interest in problem-solving and building efficient solutions. I have a solid foundation in core subjects like Data Structures & Algorithms, Operating Systems and Database Mangagement System.
            </p>

            <p className="text-muted-foreground">
              Along with this, I enjoy working on projects and exploring new technologies. As a fresher, I bring curiosity, dedication, and a drive to apply my knowledge to real-world challenges while continuously learning and growing in the tech industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Practicing Data Structures and Algorithms to strengthen logical thinking and coding efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Adaptability</h4>
                  <p className="text-muted-foreground">
                    Quick to learn new tools and technologies, and adaptable to different project requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Programming</h4>
                  <p className="text-muted-foreground">
                    Writing code in C++ continuously improving coding style and efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};