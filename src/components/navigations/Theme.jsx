import { Cpu, Moon, Palette, Sun } from "lucide-react";
import {themeChange} from "theme-change";
import { useEffect } from "react";

export default function Theme(){
    const themeValues = [
        "dark",
        "light",
        "dracula"
    ]

    useEffect(()=>{
        themeChange(false)
    });

    return(
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1"><Palette size={40}/></label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-lg">
            <li><a><Sun size={20}/>Light</a></li>
            <li><a><Moon size={20}/>Dark</a></li>
            <li><a><Cpu size={20}/>System</a></li>
            </ul>
        </div> 
    )
}