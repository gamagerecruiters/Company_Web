import "./styles/App.css";
import { motion } from "framer-motion";

export default function Industries() {
    const container = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <section className="lg:ml-20 industries--section" id="Industries">
            <div className="industries--container">
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <h2 className="industries--section--heading font-bold">INDUSTRIES</h2>
                </motion.div>
            </div>

            <div className=" grid grid-cols-1 gap-6 items-center md:grid-cols-2 lg:grid-cols-4 ">
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_1.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="mb-5 font-dmserif text-2xl font-bold text-white">
                                FMCG
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -Find dynamic jobs from this section and connect with industry
                                leaders.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_2.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="mb-1 font-dmserif text-2xl font-bold text-white">
                                E-commerce
                            </h1>
                            <p className="mb-1 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -Find e-commerce related jobs while connecting top talent to
                                elevate your online business.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_3.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className=" font-dmserif text-2xl font-bold text-white">
                                Manufacturing
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -Connect skilled talent to enhance your production capabilities
                                and the top place for you to get good experience.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_4.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-2xl font-bold text-white mb-3">
                                Information Technology
                            </h1>
                            <p className="mb-5 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -The best chance for job seekers to find proper tech-related
                                jobs.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_5.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-2xl font-bold text-white">
                                Power & Energy
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -Build a high-impact team for your industry leadership by finding
                                top talent.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_6.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="mb-5 font-dmserif text-2xl font-bold text-white">
                                Human Resources
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -Job seekers can find the best opportunities from this page.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_7.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-2xl font-bold text-white">
                                Hospitality
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -We specialize in connecting top talent for exceptional job
                                seeking experiences.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_8.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-2xl font-bold text-white">
                                Shipping / Freight
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -Welcome to this page, where strategic talent meets the dynamic
                                world of logistics.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_9.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-2xl font-bold text-white">
                                Accounting and Finance
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -Connect to the financial landscape through this page ensuring
                                financial success.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_10.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="mb-5 font-dmserif text-2xl font-bold text-white">
                                Telecommunication
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -Embark on a journey of connectivity and innovation.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_11.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="mb-5 font-dmserif text-2xl font-bold text-white">
                                Insurance{" "}
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -Navigate the complex landscape of insurance.-
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <div className="h-64 rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-84">
                            <img
                                className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                src="/img/Industries/industries_12.png"
                                alt=""
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="mb-5 font-dmserif text-2xl font-bold text-white">
                                Education
                            </h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                -Enter the realm of educational excellence.-
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
