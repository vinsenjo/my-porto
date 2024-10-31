import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
export default function SocialMedia() {
    return (
        <div className='flex gap-6 text-black text-2xl'>
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
    )
}