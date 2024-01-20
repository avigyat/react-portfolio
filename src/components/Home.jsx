import React from "react";
import HeroImage from "../assets/heroimage.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-gray-950 to to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Welcome to Avigyat's Portfolio-
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Hi I am an IT professional with 27 months of industry experience.
            <br />
            All the mentioned Experience is earned while working with infosys.
            <br />
            SKILLS-MEAN/MERN Stack , ETL Development, Python, SQL/SSIS. <br />
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer">
              Portfolio
              <span className="px-2 group-hover:rotate-90 duration-300">
                <IoIosArrowDroprightCircle size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full" 
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
