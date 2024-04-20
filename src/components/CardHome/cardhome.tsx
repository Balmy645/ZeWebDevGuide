
export default function CardHome(
    CardProps : 
    {Text?: string,
     BgColor?: string,
     icon? : any

    }
){

    return (
        <div className={`flex flex-col w-96 h-64 bg-${CardProps.BgColor} rounded-md
         hover:text-white text-center items-center 
         justify-center transition ease-in-out delay-150 
         hover:-translate-y-1 hover:scale-110 duration-300
          hover:bg-red-100 hover:font-medium`}>
            <div className="pb-8">
            {CardProps.icon}
            </div>
            <div className="text-2xl">
            {CardProps.Text}                
            </div>
        </div>


    )



}