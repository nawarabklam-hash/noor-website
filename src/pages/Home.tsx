import AboutSection from "../components/home/AboutSection"
import Hero from "../components/home/Hero"
import Projects from "../components/home/Projects"
import References from "../components/home/References"
import Services from "../components/home/Services"
import WhyChooseUs from "../components/home/WhyChooseUs"

const Home = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <References />
            <Services />
            <WhyChooseUs />
            <AboutSection />
        </div>
    )
}

export default Home