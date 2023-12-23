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
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}>
                    <div className="hero--section--content">
                        <p className="section--title">Hey, We Are</p>
                        <h1 className="hero--section--title">
                            <span
                                className=" hero--section-title--color"
                                style={{ color: "hsl(217, 68%, 53%, 1)" }}
                            >
                                GAMAGE
                            </span>{" "}
                            <br />
                            Recruiters
                        </h1>
                        <p className="hero--section-description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            <br /> Dolorum, quas. Amet soluta assumenda cum?
                        </p>
                    </div>
                </motion.div>
                <button
                    onClick={navigateToContacts}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Contact Us
                </button>{" "}
            </div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>
                <div className=" hero--section--img">
                    <img src="/img/Clients/Hero.jpeg" alt="Hero Section" />
                </div>
            </motion.div>
        </section>
    );
}
