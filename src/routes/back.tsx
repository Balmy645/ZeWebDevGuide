import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaPython, FaLaravel } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { BiLogoSpringBoot, BiLogoDjango } from "react-icons/bi";


const BackPage = () => {

    return(
        <div className="w-full h-full pl-8 pr-8">
        <h1 className="text-3xl font-medium pt-8">¿Qué es el Back End?</h1>
        <p className="p-4">
        El backend es la parte de una aplicación o sistema que maneja la lógica de negocio, la interacción con la base de datos y otros procesos que ocurren en el "lado del servidor".
        </p>
        <li className="text-2xl pt-4">
        Lenguajes y tecnologías
        </li>
        <p className="p-4 pl-8">En el backend, se utilizan varias tecnologías cada una llega a aportar algo que otra puede que no, por lo que es mejor analizar cual conviene más para cada proyecto.</p>
        
        <div className="flex justify-around">
            
            <a href="https://docs.oracle.com/en/java/" target="_blank">
            <div className="flex flex-col w-72 items-center text-center text-pretty">
            <FaJava className="w-52 h-52 text-red-600"/>
            <p className="pb-2 pt-2 font-medium">Java</p>
            <p>
            Utilizado en tecnologías como Java EE (Enterprise Edition) o Spring Framework.
            </p>
            </div>
            </a>
            
            <a href="https://docs.python.org/3/" target="_blank">
            <div className="flex flex-col w-72 items-center text-center text-pretty">
            <FaPython className="w-52 h-52 text-yellow-400"/>
            <p className="pb-2 pt-2 font-medium">Python</p>
            <p>
            Ampliamente utilizado por su facilidad de aprendizaje y flexibilidad, con frameworks como Django o Flask.
            </p>
            </div>
            </a>
            
            <a href="https://www.php.net/manual/es/" target="_blank">
            <div className="flex flex-col w-72 items-center text-center text-pretty">
            <SiPhp className="w-52 h-52 text-violet-700"/>
            <p className="pb-2 pt-2 font-medium">PHP</p>
            <p>
            Aunque ha perdido popularidad en los últimos años, sigue siendo relevante en el desarrollo web, especialmente con frameworks como Laravel, el cual es uno de los mejores frameworks hasta la epoca.
            </p>
            </div> 
            </a>

            <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript" target="_blank">
            <div className="flex flex-col w-72 items-center text-center text-pretty">
            <IoLogoJavascript className="w-52 h-52 text-yellow-400"/>
            <p className="pb-2 pt-2 font-medium">JavaScript</p>
            <p>
            Sí, también se usa en el backend gracias a Node.js, que permite ejecutar JavaScript en el servidor.
            </p>
            </div> 
            </a>

        </div>

{/*Section 2*/}

        <li className="text-2xl pt-4">
            Frameworks y bibliotecas
        </li>

        <p className="p-4 pl-8">Al igual que en el front existen varios frameworks y bibliotecas que facilitan el desarrollo del backend, como Laravel, etc. Estas herramientas proporcionan una estructura y un conjunto de herramientas para construir manejadores web de manera más eficiente y segura.
        </p>

         <p className="pl-8 pr-10 pb-8 font-medium">
            Te recomiendo estudiarlas más a fondo por tu propia cuenta para descubrir varios de los beneficios que aporta cada una. El backend es una de las areas donde más flexibilidad lógica ocupas, debido a que estos llegan a cambiar de gran manera entre cada lenguaje
        </p>

        <div className="flex justify-around">

            <a href="https://laravel.com/docs/11.x" target="_blank">
            <div className="flex flex-col items-center text-center">
            <FaLaravel className="w-52 h-52 text-orange-600"/>
            <p className="text-xl pt-2">Laravel</p>
            </div>
            </a>
            
            <a href="https://docs.spring.io/spring-framework/reference/" target="_blank">
            <div className="flex flex-col items-center text-center">
            <BiLogoSpringBoot className="w-52 h-52 text-green-600"/>
            <p className="text-xl pt-2">Spring</p>
            </div>
            </a>
            
            <a href="https://docs.djangoproject.com/es/5.0/" target="_blank">
            <div className="flex flex-col items-center text-center">
            <BiLogoDjango className="w-52 h-52"/>
            <p className="text-xl pt-2">Django</p>
            </div>
            </a>
            
            
        </div>

        <div className="w-full h-40"></div>
    </div>

    )


}

export default BackPage