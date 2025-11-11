import AboutSection from "./components/AboutSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import MapSectionComponent from "./components/MapSectionComponent"
import MenuSection from "./components/MenuSection"
import Navbar from "./components/Navbar"
import ReservationSection from "./components/ReservationSection"
import Testimonials from "./components/TestimonialSection"

function App() {

  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <MenuSection />
    <ReservationSection />
    <Testimonials />
    <Footer />
    <MapSectionComponent />
    </>
  )
}

export default App
