import PortoCard from "./ui/portocard";
import img1 from "../assets/thumbnail_1.jpg"
import img2 from "../assets/thumbnail_2.jpg"
import img3 from "../assets/thumbnail_3.jpg"

export default function Portfolio(){
    return(
        <div className="lg:max-w-[1200px]">
        <div className="gap-10 flex  flex-col items-center ">
           <h1 className=" text-6xl self-start font-bold">My recent projects,<br/> made with <br/> <span className="text-biru">love</span> and code.</h1> 
        <div className="   max-w-[1200px] flex flex-col lg:flex-row flex-wrap  lg:justify-between">
                <PortoCard id={1} image={img1} tittle={"Nezztar"} caption={"Property Rent App"}/>
                <PortoCard id={2} image={img2} tittle={"Flazz"} caption={"Moving House Service"}/>
                <PortoCard id={3} image={img3} tittle={"Ticketist"} caption={"Property Rent App"}/>
        </div>
        </div>
        </div>
    )
}