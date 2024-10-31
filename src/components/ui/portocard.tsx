import img from "../../assets/thumbnail_1.jpg"

interface IProps {
    id: number
    tittle: String
    caption: String
    image: string
}

export default function PortoCard({ id, image, caption, tittle }: IProps) {
    return (
        <div>
            <button className={`mb-10 lg:mb-[100px] justify-center flex flex-col items-center group w-max ${id % 2 == 0 ? " lg:relative  lg:top-[300px]" : "mt-0"}`}>
                <div className="overflow-hidden my-2 w-max rounded-3xl hover:scale-95 duration-700 ease-out ">
                    <img src={image} alt="thumbnail" className="group-hover:scale-110 w-[370px] mx-2 lg:w-[530px] lg:h-[600px] object-cover ease-out hover:scale-110 duration-700 overflow-hidden rounded-3xl" />
                </div>
                <div className="flex lg:mt-4 flex-col text-center">
                    <button className="font-semibold group text-2xl">{tittle}</button>
                    <p className="text-xl font-[350] group text-gray-500">{caption}</p>
                </div>
            </button>
        </div>
    )
}