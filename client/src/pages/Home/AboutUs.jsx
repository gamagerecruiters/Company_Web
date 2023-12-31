import "./styles/App.css";
import { motion } from "framer-motion";

export default function AboutUs() {

    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.100,
                staggerChildren: 0.100,
            },
        },
    };
    return (
        // <section id="AboutUs" className="about--section">
        //     <div className="about--section--img">
        //         <img src="./icon.jpg" alt="About Us" />
        //     </div>
        //     <div className="hero--section--content--box about--section--box">
        //         <div className="hero--section--content">
        //             <h1 className="industries--section--heading uppercase">About Us</h1>
        //             <p className="hero--section-description">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        //                 officiis sit debitis omnis harum sed veniam quasi dicta accusamus
        //                 recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
        //                 tempora numquam sint odit optio.
        //             </p>
        //             <p className="hero--section-description">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        //                 officiis sit debitis omnis harum sed veniam quasi dicta accusamus
        //                 recusandae?
        //             </p>
        //         </div>
        //     </div>
        // </section>

        <section className="lg:ml-48 mt-12">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-wrap">

                    <div className=" w-full md:w-6/12 mb-8 md:mb-0">
                        <motion.div variants={container} initial="hidden" whileInView="visible">
                            <h1 className="text-4xl font-bold text-center md:text-left">ABOUT US</h1>
                        </motion.div>
                        <motion.div variants={container} initial="hidden" whileInView="visible">
                            <p className="text-xl mt-10 text-center md:text-left">
                                Welcome to our About Us
                                Page, where you get to know the heart of Gamage Recruiters.
                            </p>
                        </motion.div>
                        <motion.div variants={container} initial="hidden" whileInView="visible">
                            <p className="text-xl mt-6 text-center md:text-left">
                                Gamage Recruiters is an evolving executive search and recruitment agency
                                that directs its focus toward burgeoning markets. Explore our profound
                                commitment to precision, skillfully connecting talented individuals with
                                opportunities, and seamlessly presenting those opportunities to prospective
                                employers. At the heart of our ethos lies an unwavering dedication to excellence,
                                evident in every placement we make. We are not just a recruitment agency; we are
                                architects of careers and catalysts for organizational growth. Join us in this journey
                                where talent meets opportunity, and aspirations find their professional homes. At Gamage
                                Recruiters, we transcend conventional recruitment; we shape destinies.
                            </p>
                        </motion.div>
                    </div>

                    <div className=" w-full md:w-6/12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}>
                            <img className="mt-14 w-3/6 h-/6 border-10 border-transparent rounded-full mx-auto" src="./icon.jpg" alt="About Us" />
                        </motion.div>
                    </div>


                </div>
            </div>
        </section >
    );
}
