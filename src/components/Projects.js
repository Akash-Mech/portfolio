"use client";

import Link from "next/link";
import React, { useState } from "react";
import megamart from "../../public/images/megamart.png";
import recipe from "../../public/images/recipe.png";
import marketing from "../../public/images/marketing.png";
import dashboard from "../../public/images/dashboard.png";
import awesome from "../../public/images/awesome.png";
import ui from "../../public/images/ui.png";
import Image from "next/image";
import Title from "./common/Title";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "MegaMart Landing Page",
      image: megamart,
      content:
        "The MegaMart landing page is a responsive e-commerce site with static data, featuring modern product categories and deals.",
      tech: "Nextjs/Reactjs, Tailwind CSS",
      git: "https://github.com/Akash-Mech/megamart-landing-page",
      live: "https://megamart-landing-page.netlify.app/",
      ui: false,
    },
    {
      id: 2,
      title: "Food Recipe App",
      image: recipe,
      content:
        "A dynamic food recipe app with Next.js, offering fast data fetching, seamless routing, and smooth navigation for exploring recipes.",
      tech: "Nextjs/Reactjs, Tailwind CSS",
      git: "https://github.com/Akash-Mech/food-recipe-nextjs14",
      live: "https://recipe-nextjs14.netlify.app/",
      ui: false,
    },
    {
      id: 3,
      title: "Admin Dashboard",
      image: dashboard,
      content:
        "A static admin dashboard with dark/light theme toggle, designed for efficient data visualization with intuitive charts.",
      tech: "Nextjs/Reactjs, Tailwind CSS",
      git: "https://github.com/Akash-Mech/admin-dashboard",
      live: "https://dashboard-light-dark-theme.netlify.app/",
      ui: false,
    },
    {
      id: 4,
      title: "React Components Showcase",
      image: awesome,
      content:
        "A project showcasing various React components and libraries for enhanced UI/UX with effects and interactions, styled for a polished look.",
      tech: "Nextjs/Reactjs, Tailwind CSS",
      git: "https://github.com/Akash-Mech/react-awesome-components",
      live: "https://react-awesome-components.netlify.app/",
      ui: false,
    },
    {
      id: 5,
      title: "UI Prototypes",
      image: ui,
      content:
        "Designed UI prototypes for a company’s marketing website using Figma, showcasing user-centered design principles and clear layout vision.",
      tech: "Figma, Canva",
      ui: true,
    },
    {
      id: 6,
      title: "Marketing Website",
      image: marketing,
      content:
        "Migrated a marketing website to JAMstack, improving performance and scalability with SEO optimization, EmailJS integration, and Google Analytics.",
      tech: "Nextjs/Reactjs, Tailwind CSS, Emailjs",
      ui: true,
    },
  ];
  return (
    <div className="mb-20" id="projects">
      <Title title="Projects" />
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            // when window width is <= 320px
            300: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is <= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is <= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {projectData.map((data) => {
            return (
              <SwiperSlide key={data.id} className="py-4">
                <div className="project-card">
                  <div className="bg-[#FFEBDB] rounded-t-lg">
                    <Image src={data.image} alt={data.title} className="p-1" />
                  </div>

                  <div className="space-y-4 pb-4">
                    <h3 className="sub-title pt-2">{data.title}</h3>
                    <p className="section-content">{data.content}</p>
                    <p>{data.tech}</p>
                  </div>
                  {data.ui == false ? <hr /> : ""}
                  <div className="flex justify-between gap-3 pt-3">
                    {data.git && (
                      <Link className="btn" target="_blank" href={data.git}>
                        {" "}
                        Github
                      </Link>
                    )}
                    {data.live && (
                      <Link
                        className="btn !bg-transparent !border-primary !border-2"
                        target="_blank"
                        href={data.live}
                      >
                        View Live
                      </Link>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
