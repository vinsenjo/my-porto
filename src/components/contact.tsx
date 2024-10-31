import ClickToCopy from "./ui/click";
import SocialMedia from "./ui/social";

export default function Contact() {
    return (
        <div id="contact" className="h-screen flex flex-col justify-center">
          

            <p className="lg:w-2/3 text-xl text-abu font-raleway ">Thank you for visiting my portfolio! I'm always interested in new projects and exciting collaborations. If you have an idea or challenge that needs a creative solution, or if you're looking to work together on a long-term project, I'd be happy to discuss it further. Feel free to reach out via email or LinkedIn. Let’s create something amazing together!</p>
            
          
            <h3 className=" text-2xl font-semibold mt-10 mb-2">Get in Touch <span className="font-light ">(ClickToCopy)</span></h3>
            
            <div className=" mb-10">

            <ClickToCopy/>
            </div>

            <SocialMedia/>
        </div>
    )
}