'use client'
export default function Navbar({ state }: { state: boolean }) {
    
    return (
        <nav className="py-4 px-5  flex lg:gap-20 lg:fixed lg:top-0 z-50">
            <h2 className={` ${state == false ? "text-biru " : "text-abu "} lg:block hidden font-semibold text-xl duration-700  `}>Vinsensius <span className={`${state == true ? "text-biru" : "text-biru "} duration-700 `}>Jovinda</span></h2>
            <div className="flex gap-5 items-center text-xl">
                <a href="/"  onClick={ ()=>{
                    const element = document.getElementById('textrefeal')
                    element?.scrollIntoView({
                        behavior:'smooth'
                    })
                }} className={`${state == true ? "text-merah after:bg-merah " : "text-biru after:bg-biru"}   lg:duration-150  after:content-[''] lg:relative  after:h-[3px] after:w-0 hover:after:w-full after:duration-500 after:rounded-xl after:absolute after:left-0 after:-bottom-[2px]`}>
                    About
                </a>
                <button onClick={ ()=>{
                    const element = document.getElementById('porto')
                    element?.scrollIntoView({
                        behavior:'smooth'
                    })
                }} className={`${state == true ? "text-merah after:bg-merah " : "text-biru after:bg-biru"}   duration-150  after:content-[''] relative  after:h-[3px] after:w-0 hover:after:w-full after:duration-500 after:rounded-xl after:absolute after:left-0 after:-bottom-[2px]`}>
                    Portfolio
                </button>
                <button onClick={ ()=>{
                    const element = document.getElementById('contact')
                    element?.scrollIntoView({
                        behavior:'smooth'
                    })
                }} className={`${state == true ? "text-merah after:bg-merah " : "text-biru after:bg-biru"}   duration-150  after:content-[''] relative  after:h-[3px] after:w-0 hover:after:w-full after:duration-500 after:rounded-xl after:absolute after:left-0 after:-bottom-[2px]`}>
                    Contact
                </button>

            </div>
        </nav>
    )
}
