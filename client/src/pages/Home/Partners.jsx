import "./styles/App.css";
import img1 from '/img/Clients/1.jpeg';
import img2 from '/img/Clients/2.jpeg';
import img3 from '/img/Clients/3.jpeg';
import img4 from '/img/Clients/4.jpeg';
import img5 from '/img/Clients/5.jpeg';
import img6 from '/img/Clients/6.jpeg';
import img7 from '/img/Clients/7.jpeg';
import img8 from '/img/Clients/8.jpeg';
import img9 from '/img/Clients/9.jpeg';
import img10 from '/img/Clients/10.jpeg';
import img11 from '/img/Clients/11.jpeg';
import img12 from '/img/Clients/12.jpeg';
import img13 from '/img/Clients/13.jpeg';
import img14 from '/img/Clients/14.jpeg';
import img15 from '/img/Clients/17.jpeg';
import img16 from '/img/Clients/16.jpeg';
import Marquee from 'react-fast-marquee';
import { motion } from "framer-motion";

export default function Partners() {

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
        <section className="mt-8 pb-8 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div variants={container} initial="hidden" whileInView="visible">
                    <h2 className="text-5xl font-bold text-gray-800 mb-4 md:mb-6 ">OUR CLIENTS</h2>
                </motion.div>
            </div>
            <div className="bg-white "> <Marquee direction="right" speed={50} delay={5}>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img1} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img2} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img3} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img4} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img5} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img6} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img7} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img8} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img9} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img10} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img11} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img12} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img13} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-48 h-48 " src={img14} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img15} alt="" /> </div>
                <div className="w-50 h-48 mx-4 my-1 flex items-center justify-center"> <img className="w-52 h-32 " src={img16} alt="" /> </div>
            </Marquee>
            </div>
        </section>
    );
}
