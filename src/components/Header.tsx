import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => (
    <header className="bg-brand text-white py-4 flex justify-end items-center sticky-top top-0 z-50">
        
        <nav>
            <a href="tel:+6494461709" className="mr-4 hover:text-blue-400 flex items-center gap-2 justify-center">
                <LuPhone /> (08 9240 421)
            </a>
            <Link to="/about" className="mr-4 hover:text-blue-400">
                About
            </Link>
            <Link to="/contact" className="hover:text-blue-400">
                Contact
            </Link>
        </nav>
    </header>
);

export default Header;
