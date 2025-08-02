import Navbar from "../components/Navbar/navbar"
import Hero from "../components/Hero/hero"
import Pricing from "../components/Pricing/pricing"
import Features from "../components/Features/feature"
import CourseCarousel from "../components/Carosoul/carosoul"
import TestimonialSection from "../components/Review/review"
import Footer from "../components/Footer/footer"
import SignUp from "../components/Register/register"
import Login from "../components/Login/login"
import RegisterCenter from "../components/Coaching Form/coachingForm"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyProfile from "../components/profile/profile"

function Home () {



  return(
    < >
      <Navbar />
      <Hero />
      <CourseCarousel />
      <Features />
      <Pricing />
      <TestimonialSection />
      <Footer />
    </>
  )
}

function App() {
 
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coachingregister" element={<RegisterCenter />} />
        <Route path="/profile" element={<MyProfile />} />

      </Routes>
    </Router>
      
    </>
  )
}

export default App
