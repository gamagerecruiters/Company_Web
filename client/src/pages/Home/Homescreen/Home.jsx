import HeroSection from "../HeroSection";
import Industries from "../Industries";
import AboutUs from "../AboutUs";
import Testimonial from "../Testimonials";
import Partners from "../Partners";
import ContactUs from "../ContactUs";
// import Slider from "../Slider"




export default function Home() {
    return (
        <>

            <HeroSection />
            <Industries />
            <AboutUs />
            <Testimonial />
            <Partners />
            {/* <Slider /> */}
            <ContactUs />
        </>
    );
}