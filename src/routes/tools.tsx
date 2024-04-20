import { SiVisualstudiocode, SiJira } from "react-icons/si";
import { FaFigma, FaTrello, FaGithub, FaDribbble, FaBehance } from "react-icons/fa";

const ToolsPage = () => {

    return(
        <div className="w-full h-full pl-8 pr-8">
            <p className="text-3xl pt-8 font-medium">¿Qué herramientas uso?</p>
            <p className="pt-4 pl-8">
                Cuando se trata de herramientas para el desarrollo web yo he ido
                construllendo mi propia colección dependiendo de la experiencia que
                más he recibido, eventualmente tú también tendras que expandir tu
                repocitorio de herramientas para ayudar a comenzar con el desarrollo
                de un proyecto. 
            </p>

            <p className="pt-8 pl-8 text-2xl font-medium">
                Editor de Texto
            </p>
            <div className="flex justify-around items-center pt-8">
                <div className="w-1/2 h-auto">
                <p className="pt-4 pl-8">
                Mi editor de texto preferido es Visual Studio Code, debido a la gran cantidad de 
                extensiones que uno puede usar para acelerar el desarrollo de código para la aplicación.
                Algunas de las extensiones que uso son las siguientes...
                </p>
                <div className="pl-12 pt-4">
                    <li>Console Ninja</li>
                    <li>Intellisenses of X languaje</li>
                    <li>SnipeSets of X languaje</li>
                    <li>Languaje Support Extensions</li>
                    <li>Better Comments</li>
                    <li>Icon Themes</li>
                    <li>Path Intellisense</li>
                    <li>Tabnine AI Assistant</li>
                </div>
                </div>
            <SiVisualstudiocode className="w-64 h-64" />
            </div>

            <p className="flex pt-16 pr-12 text-2xl font-medium justify-end">
                Prototipado de Interfaces
            </p>


            <div className="flex justify-around items-center pt-8">
            <FaFigma className="w-64 h-64"/>
            <p className="w-1/2 pt-4 pl-8">
                Para el prototipado de interfaces, Figma es la opción en la que siempre voy a pensar primero.
                Figma es una herramienta de diseño gráfico bastante intuitiva y hoy en dia Figma esta comenzando
                a tomar como público objetivo a los desarrolladores de software, por lo que a futuro sera mucho 
                mejor herramienta para nuestro campo de trabajo. 
            </p>
            </div>

            <p className="flex pt-16 pl-12 text-2xl font-medium">
                Getión de Trabajo
            </p>

            <div className="flex justify-around items-center pt-8">
            <p className="w-1/2 pt-4 pl-8">
                Para la getión de tú trabajo y de tus compañeros como desarrolladores de software, uno debe tener la manera de coordinarce
                con todo el equipo, por lo que herramientas de getión basadas en Gantt y Versiones son necesarias. Algunas de las que 
                se usan principalmente entre este ambito de trabajo son las siguientes.
            </p>

            <div className="flex flex-col items-center">
            <SiJira className="w-32 h-32"/>
            <p className="text-xl font-medium pt-4">Jira</p>
            </div>

            <div className="flex flex-col items-center">
            <FaTrello className="w-32 h-32"/>    
            <p className="text-xl font-medium pt-4">Trello</p>
            </div>

            <div className="flex flex-col items-center">
            <FaGithub className="w-32 h-32"/>  
            <p className="text-xl font-medium pt-4">GitHub</p>
            </div>
            
            
            

            </div>

            <p className="flex pt-24 pr-12 text-2xl font-medium justify-end">
                Falto de Inspiración para Diseñar? Prueba los siguientes sitios!
            </p>

            <div className="flex justify-around items-center text-center pt-8">
                
                <div className="flex flex-col items-center transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 duration-300 hover:font-medium">
                <a href="https://dribbble.com/shots/popular"> 
                <FaDribbble className="w-32 h-32"/>
                <li>
                Dribbble
                </li>
                </a>
                </div>
                
                <div className="flex flex-col items-center transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 duration-300 hover:font-medium">
                <a href="https://www.behance.net/search/projects?field=web+design">
                <FaBehance className="w-32 h-32"/>
                <li>
                Behance
                </li>
                </a>
                </div>
                

                <div className="flex flex-col items-center transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 duration-300 hover:font-medium">
                <a href="https://www.awwwards.com/">
                <p className="text-9xl font-normal">W.</p>
                <li>
                Awwwards
                </li>
                </a>
                </div>

                <div className="flex flex-col items-center transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 duration-300 hover:font-medium">   
                <a href="https://www.cssdesignawards.com/">
                <img className="w-72"
                    src="https://asset.brandfetch.io/idAuTwQIFL/id1L9L8Yvp.svg" alt="" />
                </a>
                
                </div>
                

                
            </div>

            

            
        <div className="w-full h-40"></div>
    </div>

    )


}

export default ToolsPage