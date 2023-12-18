import "./styles/App.css";

export default function Industries() {
    return (
        <section className="industries--section" id="Industries">
            <div className="industries--container">
                <h2 className="industries--section--heading font-bold">INDUSTRIES</h2>
            </div>
            <div className="grid grid-cols-1 gap-14 items-center md:grid-cols-2 lg:grid-cols-4">
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-84">
                        <img className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.ctfassets.net/sv4wepqk8nm7/1c1iQy6NmWxRhLtNHK2X7H/9b9cd1e4e385c013ff96a52241359c60/What-Is-FMCG-Deliverect-OV.jpg" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">FMCG</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-84">
                        <img className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://assets-global.website-files.com/62ebfb971503db47b2aa5f8f/62ebfb981503db2257aa6671_5db1d8ad66e7cc216fa20ed5_VnBt666Tx6MYkdpJU7oDe1enc_9CwrRID8rxPoNCZuK7DK1sCA9vWqngyTafb9hS-9VIuavC4Wta1umg-80cpUnuS9_84TMgeCXiSbp8c71Ay_p8E06FLOWLvfu7CWljY8BajX-9.png" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">E-commerce</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-84">
                        <img className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.assettype.com/fortuneindia%2F2019-02%2Fda36fc18-1887-4049-b186-5a22d8f61c7c%2FMotherson_Sumi_IMG_2330_copy.JPG?rect=0,0,5616,3159&w=1250&q=60" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">Manufacturing</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-84">
                        <img className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://www.1training.org/wp-content/uploads/2015/01/Information-Technology-and-Cloud-Computing-1024x870-e1422276882760-1.jpg" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white mb-10">Information Technology</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-84">
                        <img className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://www.greenbiz.com/sites/default/files/images/articles/featured/solarwind2sstock.jpg" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">Power & Energy</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-84">
                        <img className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://careertraining.ed2go.com/common/images/1/16862/phr-certification.jpg" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">Human Resources</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-84">
                        <img className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://dg1xqmhtoint1.cloudfront.net/img/ihm/blog/Hospitality-3.webp?mtime=20230420152018&focal=none" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">Hospitality</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div className="h-96 w-84">
                        <img className="h-full w-96 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://globitexworld.com/wp-content/uploads/2019/12/slider1-silceb.jpg" alt="" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 className="font-dmserif text-3xl font-bold text-white">Shipping / Freight</h1>
                        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                        <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}