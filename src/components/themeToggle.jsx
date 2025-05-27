import { useEffect, useState } from "react";
import {Moon,Sun} from 'lucide-react';
import { cn } from "../utils/utils";


export const ThemeToggle=()=>{
const [isDark,setDark]=useState(false);

useEffect(()=>{
const darkState=localStorage.getItem('theme');
if(darkState=='dark'){
    setDark(true);
    toggleTheme();
}
else{
    setDark(false);
    toggleTheme();
}
},[]);

const toggleTheme=()=>{
    if(isDark){
        setDark(false);
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme',"light");
    }
    else{
        setDark(true);
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme',"dark");
    }
}

    return <button className={cn(
     "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
     "focus:outlin-hidden"   
    )}
     onClick={()=>toggleTheme()}>
        {isDark?<Sun className="h-6 w-6 text-yellow-300"/>:<Moon className="h-6 w-6 text-blue-300" />}
    </button>

}