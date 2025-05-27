import { ThemeToggle } from "../components/themeToggle"
import { StarBackground } from "../components/starBackground"
import { NavBar } from "../components/navBar";
import { HeroSection } from "../components/heroSection";
import { AboutSection } from "../components/aboutSection";
import { SkillSection } from "../components/skillSection";
import { ProjectSection } from "../components/projectSection";
import { ContactSection } from "../components/contactSection";
import { Footer } from "../components/footer";

export const Home=()=>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
{/*theme toogle*/}
        <ThemeToggle/>
{/*background effects */}
        <StarBackground/>
{/*navbar*/}
        <NavBar/>

{/*main content*/}
<main>
    <HeroSection/>
    <AboutSection/>
    <SkillSection/>
    <ProjectSection/>
    <ContactSection/>
</main>



{/*footer*/}
<Footer/>  
        </div>
    )
}