import { ReactComponent as Logo } from "../assets/Logo.svg";

const Navbar = () => {
    return (
        <div className="Navbar flex justify-between p-5">
            <div className="logo">
                <Logo />
            </div>
            <ul className="nav-items flex items-center gap-[3rem]">
                <li className="">Home</li>
                <li>Flashcard</li>
                <li>Contact</li>
                <li>FAQ</li>
                <button class="bg-gradient-to-b from-blue-900 to-blue-600 text-white font-bold py-2 px-6 rounded-full">
                    Login
                </button>
            </ul>
        </div>
    )
}

export default Navbar