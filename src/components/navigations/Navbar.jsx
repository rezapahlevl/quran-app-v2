import { BookOpen, Palette } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <div className="navbar bg-base-300 fixed top-0 z-10 border-b border-base-200">
        <div className="flex-1">
            <Link to={"/"}>
            <button className="btn btn-ghost normal-case rounded text-xl"><BookOpen />Quran App</button>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-1 rounded">
            <Palette/>
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-52 font-semibold">
                    <li><button onClick={()=>setTheme("light")}>Light</button></li>
                    <li><button onClick={()=>setTheme("dark")}>Dark</button></li>
                    <li><button onClick={()=>setTheme("retro")}>Retro</button></li>
                    <li><button onClick={()=>setTheme("aqua")}>Aqua</button></li>
                    <li><button onClick={()=>setTheme("black")}>Black</button></li>
                    <li><button onClick={()=>setTheme("system")}>System</button></li>
            </ul>
            </div>
            {/* <li><a className="font-semibold text-md">Link</a></li> */}
            </ul>
        </div>
        </div>
    )
}