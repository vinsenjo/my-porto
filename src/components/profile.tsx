'use client'
import { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import BlurFade from './ui/blur-fade';
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


export default function Profile({ setState, state }: { state: boolean, setState: Function }) {
    const [click, setIsClick] = useState<boolean>(false)
    const [delayedZIndex, setDelayedZIndex] = useState(false);
    const handleClick = () => {

        setState(true)
    }

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (state) {
            timer = setTimeout(() => {
                setDelayedZIndex(true);
            }, 131);
        } else {
            setDelayedZIndex(false);
        }
        return () => clearTimeout(timer);
    }, [state]);
    return (
        <div className={`bg-cream  lg:h-screen h-screen lg:w-1/2 transition-all duration-1000 relative ease-out  lg:absolute  flex flex-col  justify-center  ${state == true ? `lg:translate-x-[100%] z-0` : `lg:translate-x-0  z-30 `}`}>
            <div className="font-raleway pb-2">
                <BlurFade delay={0.25} inView>
                    <h1 className="text-merah text-4xl lg:text-5xl font-light">Hello, </h1>
                </BlurFade>
                <BlurFade delay={0.25 * 2} inView>
                    <h2 className=" text-3xl lg:text-5xl font-semibold text-merah">I'm Vinsensius Jovinda </h2>
                    <p className='font-roboto text-gray-600'>Enthusiastic Developer committed to continuous growth, passionate about creating meaningful experiences through innovative web applications.</p>
                </BlurFade >
            </div>
            <BlurFade delay={0.25 * 3} inView>

                <button className={`  ${state == true ? "hidden" : "More about me"} lg:block hidden mb-4 font-roboto  gap-2  hover:text-xl z-0 text-abu  hover:text-merah hover:font-semibold w-max  border-biru border-b-2  hover:scale-105 duration-300`} onClick={handleClick}>
                    {state == true ? "Contact Me" : "More about me"}

                </button>
            <div className='flex gap-4 '>
                <a href='https://github.com/vinsenjo' className='flex items-center gap-2 hover:scale-105 duration-300' target='_blank'>
                    <FaGithub />
                    Github
                </a>
                <a href='https://www.linkedin.com/in/vinsensius-jovinda/' className='flex items-center gap-2 hover:scale-105 duration-300' target='_blank'>
                    <FaLinkedin />
                    Linkedin
                </a>
                <a href='https://www.instagram.com/vinsenjovin/' className='flex items-center gap-2 hover:scale-105 duration-300' target='_blank'>
                    <FaInstagram />
                    Instagram
                </a>
            </div>
            </BlurFade>
        </div>
    )
}