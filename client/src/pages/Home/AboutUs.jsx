import "./styles/App.css";

export default function AboutUs() {
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

        <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 mb-8 md:mb-0">
                        <h1 className="text-5xl font-bold text-center md:text-left">ABOUT US</h1>
                        <p className="text-xl mt-10 text-center md:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
                            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
                            tempora numquam sint odit optio.
                        </p>
                        <p className="text-xl mt-6 text-center md:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
                            recusandae?
                        </p>
                    </div>
                    <div className="w-full md:w-6/12">
                        <img className="w-4/6 h-6/6 border-10 border-transparent rounded-full mx-auto" src="./icon.jpg" alt="About Us" />
                    </div>
                </div>
            </div>
        </section>
    );
}
