import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react"
import { cn } from "../utils/utils";
import { useState } from "react";

export const ContactSection=()=>{
    const [isSubmiting,setSubmit]=useState(false);

    const handleSubmit=(Event)=>{
        Event.preventDefault();
        setSubmit(true);

        setTimeout(()=>{ alert('Email submission successfull'); setSubmit(false); },1500);
    }

    return <section id="contact" className={"py-24 px-4 relative bg-secondary/30"} >
        <div className={"container mx-auto max-w-5xl"} >
        <h2 className={"text-3xl md:text-4xl font-bold mb-4 text-center"} >
            Get In <span className={"text-primary"} >Touch</span>
        </h2>

        <p className={"text-center text-muted-foreground mb-12 max-w-2xl mx-auto"} >
        00:00:06,131 00:00:08,133
        ["Hymn for Nuns" playing]00:00:09,800:00:14,180Thou strength is found 00:00:14,264 00:00:18,101 Guided by our lord 00:00:18,184 00:00:23,690 Enduring this dark night500:00:23,773 00:00:25,775-[screaming] -[gun shots]00:00:25,859 00:00:29,029Thine eyes that shine 00:00:29,112  00:00:33,241 Follow not in vain
        </p>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-12"} >
        <div className={"space-y-8"} >
        <h3 className={"text-2xl font-semibold mb-6"} >Contact Information</h3>
       
       <div className={"space-y-6 justify-center "} >
        <div className={"flex items-start space-x-4"} >
        <div className={"p-3 rounded-full bg-primary/10"} >
        <Mail className="text-primary h-6 w-6" />
        </div>

        <div >
            <h4 className={"font-medium"} >Email</h4>
            <a href={"mailto:wadikakevin@gmail.com"} className={"text-muted-foreground hover:text-primary"} >
            wadikakevin@gmail.com
            </a>
        </div>
        </div>


        <div className={"flex items-start space-x-4"} >
        <div className={"p-3 rounded-full bg-primary/10"} >
        <Phone className="text-primary h-6 w-6" />
        </div>

        <div >
            <h4 className={"font-medium"} >Phone Number</h4>
            <a href={"tel:+256741882818"} className={"text-muted-foreground hover:text-primary"} >
            (+256) 741882818
            </a>
        </div>
        </div>


        <div className={"flex items-start space-x-4"} >
        <div className={"p-3 rounded-full bg-primary/10"} >
        <MapPin className="text-primary h-6 w-6" />
        </div>

        <div >
            <h4 className={"font-medium"} >Location</h4>
            <a className={"text-muted-foreground hover:text-primary"} >
                Bweyogerere,wakiso
            </a>
        </div>
        </div>

       </div>
        </div>

        <div className="pt-8" >
        <h4 className={"font-medium mb-4"} >Connect with Me</h4>
        <div className={"flex space-x-4 justify-center"} >
        <a href="#" target="_blank" > <Linkedin/></a>
        <a href="#" target="_blank" > <Twitter/></a>
        <a href="#" target="_blank" > <Instagram/></a>
        <a href="#" target="_blank" > <Twitch/></a>
        </div>
        </div>
        </div>

        <div className={"bg-card px-12 mt-8 rounded-lg shadow-xs"} >
        <h3 className={"text-2xl font-semibold mb-6"} >Send a Message</h3>
       <form className={"space-y-6"} onSubmit={(Event)=>handleSubmit(Event)} >
        <div className={""} >
            <label htmlFor="name" className={"block text-sm font-medium mb-2"} >Your Name</label>
            <input type="text" id="name" name="name" required className={cn("w-full px-4 py-3 border border-input  ",
                "bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
            )}
            placeholder="delos kevin"
            />
        </div>

        <div className={""} >
            <label htmlFor="email" className={"block text-sm font-medium mb-2"} >Your Email</label>
            <input type="email" id="email" name="email" required className={cn("w-full px-4 py-3 border border-input  ",
                "bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
            )}
            placeholder="delos@gmail.com"
            />
        </div>


        <div className={""} >
            <label htmlFor="message" className={"block text-sm font-medium mb-2"} >Your Message</label>
            <textarea id="message" name="message"  required className={cn("w-full px-4 py-3 border border-input  ",
                "bg-background resize-none focus:outline-hidden focus:ring-2 focus:ring-primary"
            )}
            placeholder="message...."
            />
        </div>

        <button type="submit" disabled={isSubmiting} className={cn("cosmic-button w-full flex items-center justify-center gap-2 ")} >
           { 
           isSubmiting? "Sending..." :<Send size={20}/> 
            }
      </button>

       </form>
        </div>

        </div>
    </section>
}