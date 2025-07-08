import Navbar from "../components/Navbar/navbar"
import Hero from "../components/Hero/hero"
import Pricing from "../components/Pricing/pricing"
import Features from "../components/Features/feature"
import CourseCarousel from "../components/Carosoul/carosoul"
import TestimonialSection from "../components/Review/review"
function App() {
 
  return (
    <>
      <Navbar />
      <Hero />
      <CourseCarousel />
      <Features />
      <Pricing />
      <TestimonialSection />
    </>
  )
}

export default App
