import "./styles/App.css";
import Marquee from 'react-fast-marquee';

import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="testimonial--container-box">
        <div className=" testimonial--container">
          <h2 className="testimonial--section--heading lg:text-5xl uppercase">Client Feedback</h2>
        </div>
      </div>
      {/* <div className="bg-white "> */}
      {/* <Marquee direction="right" speed={100} delay={5}> */}
      <div className="testimonial--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">
            <p className="text-md">{item.description}</p>
            <div className=" testimonial--section--card--author--detail">
              <img src={item.src} width="60" height="80" alt="Avatar" />
              <div>
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </Marquee> */}
      {/* </div> */}
    </section >

  );
}

