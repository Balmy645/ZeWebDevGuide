import { FaCss3, FaHtml5, FaReact, FaAngular, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
const FrontPage = () => {

    return (
        <div className="w-full h-full pl-8 pr-8">
            <h1 className="text-3xl font-medium pt-8">¿Qué es el Front End?</h1>
            <p className="p-4">
                El frontend es la cara visible de una aplicación web o sitio, donde los usuarios interactúan directamente. Los desarrolladores frontend se encargan de crear interfaces de usuario atractivas, funcionales y responsivas utilizando una combinación de HTML, CSS y JavaScript, junto con frameworks y herramientas modernas.
            </p>
            <li className="text-2xl pt-4">
                Lenguajes Fundamentales
            </li>
            <p className="p-4 pl-8">En el frontend, se utilizan principalmente tres lenguajes: HTML, CSS y JavaScript.</p>
            
            <div className="flex justify-around">
                
                <a href="https://developer.mozilla.org/es/docs/Learn/HTML" target="_blank">
                <div className="flex flex-col w-72 items-center text-center text-pretty">
                <FaHtml5 className="w-52 h-52 text-orange-600"/>
                <p className="pb-2 font-medium">HTML (HyperText Markup Language)</p>
                <p>
                Es el lenguaje de marcado estándar para crear páginas web. Se utiliza para estructurar el contenido de la página, como texto, imágenes, formularios, etc.
                </p>
                </div>
                </a>
                
                <a href="https://developer.mozilla.org/es/docs/Learn/CSS" target="_blank">
                <div className="flex flex-col w-72 items-center text-center text-pretty">
                <FaCss3 className="w-52 h-52 text-blue-500"/>
                <p className="pb-2 font-medium">CSS (Cascading Style Sheets)</p>
                <p>
                Se utiliza para dar estilo al contenido HTML. Con CSS, puedes definir el diseño, colores, fuentes y otros aspectos visuales de la página.
                </p>
                </div>
                </a>
                
                <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript" target="_blank">
                <div className="flex flex-col w-72 items-center text-center text-pretty">
                <IoLogoJavascript className="w-52 h-52 text-yellow-400"/>
                <p className="pb-2 font-medium">JavaScript</p>
                <p>
                Es un lenguaje de programación que se utiliza para hacer que las páginas web sean interactivas. Permite agregar funcionalidades dinámicas, como animaciones, validación de formularios, efectos de desplazamiento y mucho más.
                </p>
                </div> 
                </a>
            </div>

{/*Section 2*/}

            <li className="text-2xl pt-4">
                Frameworks y bibliotecas
            </li>

            <p className="p-4 pl-8">Existen varios frameworks y bibliotecas de JavaScript que facilitan el desarrollo frontend, como React.js, Angular.js, Vue.js, etc. Estas herramientas proporcionan una estructura y un conjunto de herramientas para construir aplicaciones web de manera más eficiente.
            </p>

             <p className="pl-8 pb-8 font-medium">
                Te recomiendo estudiarlas más a fondo por tu propia cuenta para descubrir varios de los beneficios que aporta cada una.
            </p>

            <div className="flex justify-around">

                <a href="https://es.react.dev/" target="_blank">
                <div className="flex flex-col items-center text-center">
                <FaReact className="w-52 h-52 animate-spin-slow text-sky-800"/>
                <p className="text-xl pt-2">React.JS</p>
                </div>
                </a>
                
                <a href="https://angular.io/docs" target="_blank">
                <div className="flex flex-col items-center text-center">
                <FaAngular className="w-52 h-52 text-red-600"/>
                <p className="text-xl pt-2">Angular.JS</p>
                </div>
                </a>
                
                <a href="https://vuejs.org/guide/introduction.html" target="_blank">
                <div className="flex flex-col items-center text-center">
                <FaVuejs className="w-52 h-52 text-green-600"/>
                <p className="text-xl pt-2">Vue.JS</p>
                </div>
                </a>
                
                
            </div>

            <div className="w-full h-40"></div>
        </div>
    )


}

export default FrontPage