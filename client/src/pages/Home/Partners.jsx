import "./styles/App.css";
import img1 from '/img/1.jpeg';
import img2 from '/img/2.jpeg';
import img3 from '/img/3.jpeg';
import img4 from '/img/4.jpeg';
import img5 from '/img/5.jpeg';
import img6 from '/img/6.jpeg';
import img7 from '/img/7.jpeg';
import img8 from '/img/8.jpeg';
import img9 from '/img/9.jpeg';
import img10 from '/img/10.jpeg';
import img11 from '/img/11.jpeg';
import img12 from '/img/12.jpeg';
import img13 from '/img/13.jpeg';
import img14 from '/img/14.jpeg';
import img15 from '/img/17.jpeg';
import img16 from '/img/16.jpeg';
import Marquee from 'react-fast-marquee';

export default function Partners() {
    return (
        <section className="mt-8 pb-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold text-gray-800 mb-4 md:mb-6">OUR CLIENTS</h2>
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
