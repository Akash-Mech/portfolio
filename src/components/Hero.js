import React from "react";
import hero from "../../public/images/heroImg.png";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  items-center justify-center py-20 lg:py-16">
        <div className="mx-auto flex flex-col space-y-8 justify-center">
          <div className="flex flex-col space-y-2 justify-center mb-3">
            <h1 className="text-2xl font-semibold">Hi&#44; I&#10076;m</h1>
            <h2 className="text-2xl md:text-4xl text-primary font-bold">
              Akash
            </h2>
            <p className="text-3xl md:text-6xl font-bold animate-fadeIn">
              Software <br />
              <span className="ml-6">Developer</span>{" "}
            </p>
          </div>
          <div>
            <div className="flex mb-6 text-xl gap-4">
              <Link className="border-primary border-2 p-2 rounded-full" href="https://www.linkedin.com/in/akashsmani05/" target="_blank"><FaLinkedin className="w-6 h-6 "/></Link>
              <Link className="border-primary border-2 p-2 rounded-full" href="https://github.com/Akash-Mech" target="_blank"><FaGithub className="w-6 h-6"/></Link>
              <Link className="border-primary border-2 p-2 rounded-full" href="mailto:akashsmani05@gmail.com" target="_blank"><MdOutlineEmail className="w-6 h-6"/></Link>
            </div>
            <div>
              <a
                href="/resume/Akash-Resume.pdf"
                className="btn"
                download="Akash-Resume"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <Image src={hero} alt="HeroImg" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
