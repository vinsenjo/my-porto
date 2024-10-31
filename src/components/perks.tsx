
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import Marquee from "./ui/marquee";
import BlurFade from "./ui/blur-fade";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
<FaGitAlt />




export default function Perks({ state }: { state: boolean }) {

    const icons = [
        <FaReact />, <RiTailwindCssFill />, <SiNextdotjs />, , <RiJavascriptFill />,<FaNode />

    ];
    const icons2 = [

        <SiExpress />, <BiLogoTypescript />, <FaGithub />, <SiMysql />, <SiPrisma />
    ];


    return (
        <div className={`text-merah mt-4 lg:p-4 lg:mt-32 ${state? "lg:block":"lg:hidden"}`}>
            <BlurFade delay={0.35} inView yOffset={0}> 
                <h2 className='text-2xl font-semibold'>My skills as a web developer include:            </h2 >
                <ul className="list-disc mt-2 pl-5 font-roboto font-light">
                    <li>Building and implementing UI/UX designs in web applications using Next.js.</li>
                    <li>Creating responsive and functional websites with Next.js and Tailwind CSS.</li>
                    <li>Working with server-side frameworks like Express.js.</li>
                    <li>Proficiency in JavaScript and TypeScript.</li>
                    <li>Utilizing Git for version control.</li>
                    <li>Designing and structuring databases using DB diagram.</li>
                    <li>Implementing databases with MySQL and Prisma ORM.</li>
                </ul>

                <Marquee pauseOnHover gradient={false} className="mt-12 w-full [--duration:15s] ">
                    <div className="flex gap-10 text-6xl w-full">
                        {icons.map((icon, index) => (
                            <div key={index} className="text-merah">
                                {icon}
                            </div>
                        ))}
                    </div>
                </Marquee>

                <Marquee pauseOnHover reverse={true} gradient={false} className="mt-4 w-full [--duration:15s]">
                    <div className="flex gap-10 text-6xl w-full">
                        {icons2.map((icon, index) => (
                            <div key={index} className="text-merah">
                                {icon}
                            </div>
                        ))}
                    </div>
                </Marquee>
            </BlurFade>


        </div >
    )
}