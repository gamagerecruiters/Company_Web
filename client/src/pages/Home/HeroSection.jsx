import "./styles/App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
    const navigate = useNavigate();

    const navigateToContacts = () => {
        // 👇️ navigate to /contacts
        navigate("/contact-us");
    };

    return (
        <section id="heroSection" className=" hero--section">
            <div className="hero--section--content--box">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="lg:ml-14 hero--section--content">
                        <p className="italic ... section--title">Hey, We Are</p>
                        <h1 className="lg:text-10xl hero--section--title">
                            <span
                                className=" hero--section-title--color"
                                style={{ color: "hsl(217, 68%, 53%, 1)" }}
                            >
                                GAMAGE
                            </span>{" "}
                            Recruiters
                        </h1>
                        <p className="lg:text-xl hero--section-description italic ...">
                            Your go-to recruiting site for seamless talent solutions. What
                            sets us apart? <br />
                            It’s our connection of top talent with great opportunities,
                            <br /> we're your key to success to finding jobs or posting them
                            to hire talent.
                        </p>
                    </div>
                </motion.div>
                <button
                    onClick={navigateToContacts}
                    type="button"
                    className="lg:ml-14 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-100 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-500"
                >
                    Contact Us
                </button>{" "}
            </div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="brightness-90 hero--section--img">
                    <img src="/img/Clients/hero.png" alt="Hero Section" />
                </div>
            </motion.div>
        </section>
    );
}
