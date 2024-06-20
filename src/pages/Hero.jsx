import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import HeroPic form '../../'

const Hero = () => {
  return (
    <>
      <Header />
      <main>
        <section className="py-32 px-4 mx-auto max-w-7xl sm:px-6">
          <div className="md:flex items-center gap-6">
          <div className="mr-12"><img src="main.png" width={350} height='auto'/></div>
            <div className="max-w-2xl ml-12">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl mb-8 font-extrabold tracking-tighter">
                Unleash the Power of Algorithms with Stunning Visuals!
                </h1>
                <span className="bg-clip-text font-extrabold leading-tighter tracking-tighter text-4xl mt-12 md:text-6xl text-transparent bg-gradient-to-r from-red-500 to-pink-400">
                  AlgoVista
                </span>
                <p className="my-6 text-gray-700 text-xl tracking-tighter">
                  Transform complex algorithms into beautiful,
                  intuitive visualizations.
                  Understand, learn, and master algorithms
                  like never before.
                </p>
                <div>
                  <Link
                    to="/visualize"
                    className="text-white bg-red-500 hover:bg-pink-400 py-2 px-5 rounded md:text-xl"
                  >
                    Let's Start
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        
       
      </main>
      <Footer/>
    </>
  );
};

export default Hero;
