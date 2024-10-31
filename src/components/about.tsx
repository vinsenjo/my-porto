import image from "../assets/pp.png"
import BlurFade from "./ui/blur-fade"
export default function About() {
    return (
        <div className="lg:relative lg:mt-16 lg:p-4 w-full text-merah">
            <div className="lg:pr-5">
                <BlurFade delay={0.25} yOffset={0} inView>
                    <h1 className="text-6xl font-bold">About Me</h1>
                    <div className="flex flex-col gap-5 mt-2">
                        <div className="flex flex-col lg:flex-row gap-2 items-start">
                        <img src={image} alt="profile" className=" w-[250px] h-[300px] object-cover  " />
                        <div className="font-semibold">
                            <p>Vinsensius Jovinda Priamdoko</p>
                            <p>14 Mei 1999</p>
                            <p>Bandung, Indonesia</p>
                        </div>
                        </div>
                        <p className= "tracking-wide text-xl font-roboto font-light lg:text-[22px]">I'm Jovin, a Junior Full-Stack Developer passionate about creating modern and efficient web applications. Specializing in Next.js and Express.js, I bring a strong foundation in Computer Engineering, complemented by advanced training from Purwadhika. I enjoy collaborating, exploring new technologies, and continuously finding ways to deliver the best user experiences through my projects.</p>
                    </div>
                </BlurFade>
            </div>
        </div>
    )
}