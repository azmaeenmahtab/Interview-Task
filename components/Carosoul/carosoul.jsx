import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Navigate, useNavigate } from 'react-router-dom';

import "swiper/css";
import "swiper/css/navigation";
import "../Carosoul/CourseCarousel.css"; 
const CourseCarousel = () => {

const navigate = useNavigate();

    const handleShow = () => {
        navigate('/coachingregister');
    }

  const courses = [
    {
      title: "React for Beginners",
      img: "../../src/assets/course1.jpg",
    },
    {
      title: "Mastering Node.js",
      img: "../../src/assets/course2.jpg",
    },
    {
      title: "Fullstack with MERN",
      img: "../../src/assets/course3.jpg",
    },
    {
      title: "Advanced TypeScript",
      img: "../../src/assets/course4.jpg",
    },
    {
      title: "Cybersecurity 101",
      img: "../../src/assets/course3.jpg",
    },
  ];

  return (
    <div id="courses" className="max-w-[1240px] mx-auto px-5 py-12 ">
       <div className="text-center mb-[80px] max-w-[720px] mx-auto flex flex-col items-center">
        <div className="flex justify-center mb-6 items-center gap-[5px] border border-teal-400/60 w-[100px] rounded-full px-[5px] py-[3px] bg-teal-400/10 text-teal-400">
        <svg 
        stroke="currentColor" 
        fill="none" 
        stroke-width="2" 
        viewBox="0 0 24 24" 
        aria-hidden="true" 
        height="16px" 
        width="16px" 
        xmlns="http://www.w3.org/2000/svg" 
        >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Courses</span>
        </div>
        <h3 className="text-5xl font-bold mb-4 tracking-wider text-white">
        Popular Courses
        </h3>
        <p className="text-gray-400 text-[18px] px-2.5 max-w-[790px]">
        Whether you're a small startup, a growing mid-sized business, or a large enterprise, we have plans tailored to your specific demands.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {course.title}
                </h3>
                <button onClick={handleShow} className="px-4 py-2 mt-2 border border-blue-500/50 hover:bg-blue-700/30 text-white rounded-full">
                  Showcase Yours
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseCarousel;
