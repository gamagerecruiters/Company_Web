import React from "react";
import { JobImg } from "../assets";
// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadSlim } from "tsparticles-slim";


const About = () => {

  // const particlesInit = useCallback(async engine => {
  //   console.log(engine);
  //   await loadSlim(engine);
  // }, []);

  // const particlesLoaded = useCallback(async container => {
  //   await console.log(container);
  // }, []);

  return (
    <>
      <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[250px] bg-[url('https://tecdn.b-cdn.net/img/new/standard/city/078.jpg')]">
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              {/* <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  // background: {
                  //   color: {
                  //     value: "#000000",
                  //   },
                  // },
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#000000",
                    },
                    links: {
                      color: "#000000",
                      distance: 150,
                      enable: true,
                      opacity: 0.1,
                      width: 1,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 6,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 800,
                      },
                      value: 80,
                    },
                    opacity: {
                      value: 0.1,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 5 },
                    },
                  },
                  detectRetina: true,
                }}
              /> */}
              <h1 className="mt-16 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                ABOUT US <br />
                <h2 className="mt-6 mb-16 text-xl font-bold tracking-tight md:text-xl xl:text-2xl">
                  <p>
                    Where you get to know the heart of Gamage Recruiters.
                  </p>
                </h2>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>

        <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
          <div className='w-full md:2/3 2xl:w-2/4'>
            <h1 className='lg:text-4xl md:text-4xl text-blue-600 font-bold mb-5'>About Us</h1>
            <p className='lg:text-xl text-justify leading-7'>
              Gamage Recruiters Pvt Ltd is a developing executive
              search and recruitment agency with a focus on emerging markets.
              This enables businesses to efficiently fill their executive talent pool
              in order to maximize their potential and retain their competence. As
              we extend our service offerings to emerging markets, we
              strategically leverage a diverse pool of talent from burgeoning
              countries and industries.
            </p>
          </div>
          <img src={JobImg} alt='About' className='lg:ml-11 w-auto h-[300px]' />
        </div>

        <div className='lg:text-xl leading-8 px-5 text-justify'>
          <p>
            Our commitment to establishing a global
            footprint involves the seamless sharing of information and fostering
            best practices within our executive search team, enabling effective
            collaboration on a regional and global scale.
            This approach not only empowers companies to access a rich
            reservoir of leadership potential but also facilitates the retention of
            valuable skills. A central tenet of our ethos is the steadfast pursuit
            of diversity in the workplace. By upholding best practices within our
            executive search team for managing both regional and international
            operations, we have successfully cultivated a robust international
            presence. Our pivotal role in assisting numerous organizations in
            filling their managerial and leadership talent pools underscores our
            commitment to excellence.
            Our focus on a meticulous process, precise matching, and
            meaningful connections is augmented by proprietary technology
            and a dedicated team of recruiters. For real-time updates on job
            openings, we invite you to follow us on LinkedIn or reach out via
            email for any inquiries related to your staffing or search
            requirements.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
