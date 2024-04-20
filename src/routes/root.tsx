import CardHome from "@/components/CardHome/cardhome"
import { FaFigma,
         FaPython,
 } from "react-icons/fa";

 import { TbBrandSpeedtest } from "react-icons/tb";
 import { LiaToolsSolid } from "react-icons/lia";
 import { SiFramework } from "react-icons/si";

export default function Root() {
  return (


    <div className="w-full h-screen flex flex-col items-center ">

      <div className="flex p-4 space-x-4">
        <a href="/front">
          <CardHome Text="Front" BgColor="slate-200" icon={<FaFigma className="w-40 h-28"/>} />
        </a>
        <a href="/back">
        <CardHome Text="Back" BgColor="slate-200" icon={<FaPython className="w-40 h-28"/>}/>
        </a>
      </div>

      <div className="flex p-4 space-x-4">
        <a href="/SpeedDev">
        <CardHome Text="SpeedDev" BgColor="slate-200" icon={<TbBrandSpeedtest className="w-40 h-28"/>}/>
        </a>
        <a href="/Tools">
        <CardHome Text="Tools" BgColor="slate-200" icon={<LiaToolsSolid className="w-40 h-28"/>}/>
        </a>

      </div>


      <div className="flex p-4 ">
        <a href="/Tec">
        <CardHome Text="Docs" BgColor="slate-200" icon={<SiFramework className="w-40 h-28 "/>}/>
        </a>
      </div>


      <div className="w-full h-1 pb-60"></div>




    </div>
  )
}
