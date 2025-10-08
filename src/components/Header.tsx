import { LuPhone } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="bg-brand text-white">
            <div className=" flex items-center justify-between pl-10">
                <a
                    className="text-lg cursor-pointer flex items-end gap-2"
                    href="tel:+61892404211"
                >
                    <LuPhone className="text-brandGreen size-6" /> (08) 9240
                    4211
                </a>

                <nav className="flex space-x-8 text-md">
                    {/* Example dropdowns with <select> */}
                        <select
                            onChange={(e) =>
                                e.target.value && navigate(e.target.value)
                            }
                            defaultValue=""
                            className="bg-transparent text-white border-none outline-none cursor-pointer hover:text-brandGreen"
                        >
                            <option value="" disabled hidden>
                                About Us
                            </option>
                            <option value="/about">About</option>
                            <option value="/team">Our Team</option>
                            <option value="/careers">Careers</option>
                        </select>

                        <select
                            onChange={(e) =>
                                e.target.value && navigate(e.target.value)
                            }
                            defaultValue=""
                            className="bg-transparent text-white border-none outline-none cursor-pointer hover:text-brandGreen"
                        >
                            <option value="" disabled hidden>
                                Locations
                            </option>
                            <option value="/locations/perth">Perth</option>
                            <option value="/locations/sydney">Sydney</option>
                        </select>

                    <button
                        onClick={() => navigate("/industries")}
                        className="hover:text-brandGreen cursor-pointer"
                    >
                        Industries
                    </button>

                    <button
                        onClick={() => navigate("/journey")}
                        className="hover:text-brandGreen cursor-pointer"
                    >
                        Your Life Journey
                    </button>

                    <button
                        onClick={() => navigate("/clients")}
                        className="hover:text-brandGreen cursor-pointer"
                    >
                        Our Clients
                    </button>

                    <button
                        onClick={() => navigate("/blog")}
                        className="hover:text-brandGreen cursor-pointer"
                    >
                        Blog
                    </button>

                    <button
                        onClick={() => navigate("/community")}
                        className="hover:text-brandGreen cursor-pointer"
                    >
                        Community
                    </button>

                    <button
                        onClick={() => navigate("/resources")}
                        className="hover:text-brandGreen cursor-pointer"
                    >
                        Resources
                    </button>

                    <button
                        onClick={() => navigate("/contact")}
                        className="bg-brandGreen cursor-pointer text-black font-semibold py-2 px-10 rounded-tl-2xl"
                    >
                        Contact Us
                    </button>
                </nav>
            </div>
        </header>
    );
}
