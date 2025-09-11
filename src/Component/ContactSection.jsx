import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="flex flex-col items-center space-y-6">
          {/* Email & Phone in one line on larger screens */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center space-x-2">
              <Mail className="h-6 w-6 text-primary" />
              <a
                href="mailto:hiteshkr3094@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                hiteshkr3094@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <Phone className="h-6 w-6 text-primary" />
              <a
                href="tel:+917901838893"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +91 - 7901838893
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="pt-8 text-center">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/hitesh-kumar-7a7456273/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/i._.hitesh/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
