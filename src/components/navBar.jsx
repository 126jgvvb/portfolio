

import { href } from "react-router-dom";
import { cn } from "../utils/utils";
import { useEffect, useState } from "react";
import {X,Menu} from "lucide-react";

const navItems=[
    {name:"Home",href:"#hero"},
    {name:"About",href:"#about"},
    {name:"Skills",href:"#skills"},
    {name:"Projects",href:"#projects"},
    {name:"Contact",href:"#contact"}
];


export const NavBar=()=>{
    const [isScrolled,setScrolled]=useState(false);
    const [isMenuOpen,setMenu]=useState(true);

    const alterScrollState=()=>{
        setScrolled(window.innerHeight>10);
    }

    useEffect(()=>{
        window.addEventListener("scroll",alterScrollState);
        return ()=>window.removeEventListener("scroll",alterScrollState);
    },[]);


    return <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5"
    )}>

    <div className={"container flex items-center justify-between"} >
    <a href="#hero" className="text-xl font-bold text-primary flex items-center" >
        <span className="relative z-10" >
            <span className="text-glow text-foreground" >DELOS</span> MATRIX
        </span>
    </a>


    { /*desktop nav */ }
   <div className="hidden md:flex space-x-8" >
        {
            navItems.map((item,key)=>(
                <a key={key} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300 " > 
                    {item.name}
                </a>
            ))
        }
   </div>

   { /*mobile nav */ }
    <button aria-label={`${isMenuOpen ?'Close Menu':'Open Menu' }`} onClick={()=>setMenu((previousValue)=>!previousValue)}  className="md:hidden p-2 text-foreground z-50">
        {
            isMenuOpen ? <X size={24}/>: <Menu size={24}/>
        }
    </button>

   <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center",
    "transition-all duration-300 md:hidden",
    isMenuOpen? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
   )}>
   <div className="flex flex-col text-xl space-y-8" >
       
       {
           navItems.map((item,key)=>(
               <a key={key} href={item.href} className="text-foreground hover:text-primary transition-colors duration-300 " > 
                   {item.name}
               </a>
           ))
       }
  </div>
  </div>

    </div>
    </nav>
}