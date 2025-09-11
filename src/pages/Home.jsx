import { ThemeToggle } from "../Component/ThemeToggle";
import {StarBackground} from "@/Component/StarBackground";
import {Navbar} from "../Component/Navbar";
import { HeroSection } from "../Component/Herosection";
import { AboutSection } from "../Component/AboutSection";
import { ProjectsSection } from "../Component/ProjectsSection";
import { ContactSection } from "../Component/ContactSection";

export const Home = ()=>{
    return <div>
        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
        <main>
            <HeroSection/>
            <AboutSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
    </div>

}