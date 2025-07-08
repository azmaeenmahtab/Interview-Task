import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (
        <div id="hero " className="flex items-center justify-center gap-7 max-w-[1240px] px-5 mx-auto pt-14 mb-[100px]">
        <div className="   ">

        {/* Ai button */}
    <div className="text-white w-[230px] text-[14px] mx-auto">
        <a href="" className="flex items-center gap-[15px] border border-[#3CE8C3]/50 px-[4px] py-[4px] rounded-[20px] bg-[#3CE8C3]/10">
            <p><span className="mr-3 border border-[#3CE8C3] px-[7px] py-[1px] rounded-[12px] bg-[#3CE8C3]">New</span><span className="text-[#3CE8C3]/90">Introducing  System</span></p>
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#64c4b9",}} />
        </a>

    </div>
    {/* title */}
    <div className="text-6xl  text-white font-semibold text-left max-w-[800px] mt-6 " >
        <h5 className="tracking-wider">The best way to build your startup.</h5>
    </div>
    {/* description */}
    <div className="text-gray-500 text-xl font-medium text-left max-w-[800px] mt-5">
        <p>Our app eliminates the need for complex spreadsheets, endless email threads, empowering businesses to achieve greater efficiency.</p>
    </div>
    {/* 2 buttons */}
    <div className="flex gap-4 mt-[70px] mx-auto">
    <button className=" text-black bg-white rounded-full font-semibold px-[30px] py-[16px] ">Get started<FontAwesomeIcon icon={faAngleRight} style={{color: "#000000",marginLeft:"10px"}} /></button>
    <button className="px-6 py-3 text-white">Documentation <FontAwesomeIcon icon={faAngleRight} style={{color: "white",marginLeft:"10px"}} /></button>
</div>
    </div>

    <div className="w-[600px]">
        <img src="../../src/assets/dashboard_prev_ui.png" alt="" srcset="" className="rounded-3xl w-full" />
    </div>
    </div>
    )
}

export default Hero;