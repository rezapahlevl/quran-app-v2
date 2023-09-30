import { Github, Instagram, PersonStanding, PersonStandingIcon, User2Icon } from "lucide-react";

export default function Footer(){
    return (
        <footer className="footer items-center p-4 bg-neutral mt-3 text-neutral-content">
        <aside className="items-center grid-flow-col">
            <User2Icon/> 
            <p>Copyright © 2023 - All right reserved. Designed by Reza Pahlevi</p>
        </aside> 
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a target="_blank" href="https://instagram.com/rezapahlevl"><Instagram/>
            </a> 
            <a target="_blank" href="https://github.com/rezapahlevl"><Github/>
            </a> 
        </nav>
        </footer>
    )
}