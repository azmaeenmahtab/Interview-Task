import { useNavigate } from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/signup');
    }

    const handleLogin = () => {
        navigate('/login');
    }


    return(
        <nav className="border-b border-gray-500/50 bg-[#030014] sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-[1240px] p-5 mx-auto">
            {/* icon */}
            <div className="text-3xl font-bold text-white">
                COACH <span>PRO</span>
            </div>
            {/* middle btns */}
            <div className="flex items-center gap-10 text-[#718096]">
                <a href="#hero">Home</a>
                <a href="#courses">Courses</a>
                <a href="#feature">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#review">Review</a>
                <a href="#contact">Contact</a>
            </div>
            {/* right btns */}
            <div className="flex items-center gap-3.5 font-semibold text-white">
                <button onClick={handleLogin}>Login</button>
                <div class="relative p-[1px] rounded-lg">
                    <div class="absolute inset-0 bg-gradient-to-r from-black  to-white rounded-lg"></div>
                    <button onClick={handleRegister} class="relative bg-white rounded-lg px-2.5 py-1 bg-gradient-to-r from-[#7A6BCC] to-[#0C0C0D]">
                    Get Started
                    </button>
                </div>

            </div>
        </div>
        </nav>
    )
}

export default Navbar;