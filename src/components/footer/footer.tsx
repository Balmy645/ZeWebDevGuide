
import { FaLinkedin } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

export default function Footer(){

    return (
        <div className="relative bottom-0 w-full h-40 bg-slate-200 flex justify-end">
            <div className="flex items-center p-4 space-x-2 hover:text-blue-700 transition ease-in-out duration-300 delay-100">
            <GoDotFill />
            <FaLinkedin className="w-12 h-12"/>
            <a 
            className="text-xl"
            href="www.linkedin.com/in/devbalmy-475b962b3" 
            target="_blank">
                Contactame!
            </a>
            </div>
        </div>
    )


}