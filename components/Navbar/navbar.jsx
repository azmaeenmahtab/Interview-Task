const Navbar = () => {
    return(
        <nav className="border-b border-gray-500/50 bg-[#0F172ACC]">
        <div className="flex items-center justify-between max-w-[1240px] p-5 mx-auto">
            {/* icon */}
            <div className="text-3xl font-bold text-white">
                COACH <span>PRO</span>
            </div>
            {/* middle btns */}
            <div className="flex items-center gap-10 text-[#718096]">
                <a href="#hero">Home</a>
                <a href="#feature">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            {/* right btns */}
            <div className="flex items-center gap-3.5 font-semibold text-white">
                <button>Login</button>
                <button className="border border-gray-600 rounded-full px-5 py-2">Get Started</button>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;