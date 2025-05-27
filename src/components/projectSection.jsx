import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects=[
    {
        id:1,
        title:"Ecommerce website",
        description:"Ecommerce business website",
        image:"/projects/project1.jpg",
        tags:["React","TailwindCSS"],
        demoURL:"#",
        githubURL:"#"
    },
    {
        id:2,
        title:"WIFI Monitoring website",
        description:"A system tracking the wifi usage by clients in various locations",
        image:"/projects/project2.jpg",
        tags:["React","TailwindCSS"],
        demoURL:"#",
        githubURL:"#"
    },
    {
        id:3,
        title:"Meals Tracker website",
        description:"A system tracking the daily meals provided by the vendor to company",
        image:"/projects/project3.jpg",
        tags:["React","TailwindCSS"],
        demoURL:"#",
        githubURL:"#"
    }
]

export const ProjectSection=()=>{

    return <section id={"projects"} className={"py-24 px-4 relative"} >
        <div className={"container mx-auto max-w-5xl"} >
        <h2 className={"text-3xl md:text-4xl font-bold mb-4 text-center"} >
            Featured <span className={"text-primary"} >Projects</span>
            </h2>

            <p className={"text-center text-muted-foreground mb-12 max-w-2xl mx-auto"} >
            00:00:06,131 00:00:08,133
            ["Hymn for Nuns" playing]00:00:09,800:00:14,180Thou strength is found 00:00:14,264 00:00:18,101 Guided by our lord 00:00:18,184 00:00:23,690 Enduring this dark night500:00:23,773 00:00:25,775-[screaming] -[gun shots]00:00:25,859 00:00:29,029Thine eyes that shine 00:00:29,112  00:00:33,241 Follow not in vain
            </p>

            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"} >
                {
                    projects.map((project,key)=>(
                        <div key={key} className={"group bg-card rounded-lg overflow-hidden shadow-xs card-hover"}>
                            <div className={"h-48 overflow-hidden"} >
                                <img src={project.image} alt={project.title} className={"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "} />
                            </div>

                            <div className={"p-6"} >
                                <div className={"flex flex-wrap gap-2 mb-4"} >
                                {
                                    project.tags.map((tag)=>(
                                        <span className={"px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary"} >{tag}</span>
                                    ))
                                }
                                </div>
                          

                            <h3 className={"text-xl font-semibold mb-1"} >{project.title}</h3>
                                <p className={"text-muted-foreground text-sm mb-4"} >
                                {project.description}
                                </p>

                                <div className={"flex justify-between items-center"}>
                                    <div className={"flex space-x-3"} >
                                        <a className={"text-foreground/80 hover:text-primary transition-colors duration-300"} target="_blank" href={project.demoURL}><ExternalLink  size={20} /> </a>
                                        <a className={"text-foreground/80 hover:text-primary transition-colors duration-300"} target="_blank" href={project.githubURL}><Github  size={20} /> </a>
                                    </div>
                                </div>
                                </div>
                        </div>
                    ))
                }
            </div>

            <div className={"text-center mt-12"} >
                <a className={"cosmic-button w-fit flex items-center mx-auto gap-2"} 
                target="_blank" href="https://github.com/126jgvvb/"
                >Check My GitHub <ArrowRight size={16} /> </a>
            </div>
        </div>
    </section>
}