import { Briefcase, Code, User } from "lucide-react";
import { cn } from "../utils/utils";

export const AboutSection=()=>{


    return(
        <section id={"about"} className="py-24 px-4 relative" >
            <div className={"container mx-auto mx-w-5xl"} >
            <h2 className={"text-3xl md:text-4xl font-bold mb-12 text-center"} >
            About <span className={"text-primary"} >Me</span>
            </h2>

            <div className={"grid grid-cols-1 md:grid-cols-2 gap-12 items-center"} >
            <div className={"space-y-6"} >
                <h3 className={"text-2xl font-semibold"} >Self driven developer among the rest </h3>

                <p className="text-muted-foreground" >
                00:00:06,131 00:00:08,133
                ["Hymn for Nuns" playing]00:00:09,800:00:14,180Thou strength is found 00:00:14,264 00:00:18,101 Guided by our lord 00:00:18,184 00:00:23,690 Enduring this dark night500:00:23,773 00:00:25,775-[screaming] -[gun shots]00:00:25,859 00:00:29,029Thine eyes that shine 00:00:29,112  00:00:33,241 Follow not in vain
                </p>
           
                <p className="text-muted-foreground" >
                00:00:06,131 00:00:08,133
                ["Hymn for Nuns" playing]00:00:09,800:00:14,180Thou strength is found 00:00:14,264 00:00:18,101 Guided by our lord 00:00:18,184 00:00:23,690 Enduring this dark night500:00:23,773 00:00:25,775-[screaming] -[gun shots]00:00:25,859 00:00:29,029Thine eyes that shine 00:00:29,112  00:00:33,241 Follow not in vain
                </p>

                <div className={"flex flex-col sm:flex-row gap-4 pt-4 justify-center"} >
                <a href={"#contact"} className={"cosmic-button px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium  transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"} >
                Contact Me
                </a>

                <a href={""} className={cn("px-6 py-2 rounded-full border border-primary text-primary",
                " hover:bg-primary/10 transition-colors duration-300")} >
                Download CV
                </a>
                </div>
            </div>

                    <div className={"grid grid-cols-1 gap-6"} >
                    <div className={"gradient-border p-6 card-hover"} >
                    <div className={"flex items-start gap-4"} >
                    <div className={"p-3 rounded-full bg-primary/10"} >
                    <Code className="h-6 w-6 text-primary" />
                    </div>

                    <div className={"text-left"} >
                    <h4 className={"font-semibold text-lg"} >Web development</h4>
                    <p>
                        I create responsive websites with an intuitive user experience.
                    </p>
                    </div>
                    </div>
                    </div>

                    <div className={"gradient-border p-6 card-hover"} >
                    <div className={"flex items-start gap-4"} >
                    <div className={"p-3 rounded-full bg-primary/10"} >
                    <User className="h-6 w-6 text-primary" />
                    </div>

                    <div className={"text-left"} >
                    <h4 className={"font-semibold text-lg"} >UI/UX Design</h4>
                    <p>
                        I create responsive websites with an intuitive user experience.
                    </p>
                    </div>
                    </div>
                    </div>

                    <div className={"gradient-border p-6 card-hover"} >
                    <div className={"flex items-start gap-4"} >
                    <div className={"p-3 rounded-full bg-primary/10"} >
                    <Briefcase className="h-6 w-6 text-primary" />
                    </div>

                    <div className={"text-left"} >
                    <h4 className={"font-semibold text-lg"} >UI/UX Design</h4>
                    <p>
                        I create responsive websites with an intuitive user experience.
                    </p>
                    </div>
                    </div>
                    </div>

                    </div>
            </div>

            </div>
        </section>
    )
}
