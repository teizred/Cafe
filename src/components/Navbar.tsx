import { Link } from "react-router-dom"
import logo from "../assets/img/logo.png"

export default function Navbar() {
    return (
     <main>
        <div className="bg-[#E6E6E6] text-black flex items-center justify-between px-6 shadow-md">
            <Link to="/"><img src={logo} className="w-24" alt="logo" /></Link>

            <ul className="flex flex-1 justify-center gap-6">
                <li>
                    <Link className="font-bold hover:text-gray-600 transition-colors" to="/about">About</Link>
                </li>
                <li>
                    <Link className="font-bold hover:text-gray-600 transition-colors" to="/services">Services</Link>
                </li>
            </ul>
            <div className="flex gap-6">
                <Link className="font-bold hover:text-gray-600 transition-colors" to="/login">Log in</Link>
                <Link className="font-bold hover:text-gray-600 transition-colors" to="/signup">Sign up</Link>
            </div>
        </div>


     </main>
    )
}