import Balmy from "../../assets/BalmyLogo.svg"

export default function NavBar() {

    return(
        <div className="flex w-full h-20 pt-2 pl-6 items-center justify-around bg-slate-100 shadow-sm font-medium text-xl">
            <a href="/" className="w-16 h-16">
                <img src={Balmy} alt="null"/>
            </a>
            <a className="transition duration-0 hover:duration-500 hover:text-red-300" href="/front">Qué es el Front?</a>
            <a className="transition duration-0 hover:duration-500 hover:text-red-300" href="/back">Qué es el Back?</a>
            <a className="transition duration-0 hover:duration-500 hover:text-red-300" href="/SpeedDev">Desarrollo enfocado en velocidad</a>
            <a className="transition duration-0 hover:duration-500 hover:text-red-300" href="/Tools">Herramientas</a>
            <a className="transition duration-0 hover:duration-500 hover:text-red-300" href="/Tec">Documentación</a>
        </div>
    )

}