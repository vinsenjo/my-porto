
interface IProps {
    text: string;
    state: boolean
}
export default function NavButton({ text, state }: IProps) {
    return (
        <a href="#textrefeal" className={`${state == false ? "text-merah after:bg-merah " : "text-white after:bg-white"}   duration-150  after:content-[''] relative  after:h-[3px] after:w-0 hover:after:w-full after:duration-500 after:rounded-xl after:absolute after:left-0 after:-bottom-[2px]`}>
            {text}
        </a>
    );
}