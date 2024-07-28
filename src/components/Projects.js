import Link from "next/link";
import React from "react";
import megamart from "../../public/images/megamart.png";
import recipe from "../../public/images/recipe.png";
import marketing from "../../public/images/marketing.png";
import ui from "../../public/images/ui.png";
import Image from "next/image";
import Title from "./common/Title";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "MegaMart Landing Page",
      image: megamart,
      content:
        "The MegaMart landing page is a responsive e-commerce platform with a static data setup. It features a modern, user-friendly interface with sections for product categories, best deals, and daily essentials.",
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
        "A dynamic food recipe application designed to help users discover and explore various recipes. Built with Next.js for efficient data fetching from APIs and seamless routing, it ensures fast performance and smooth navigation.",
      tech: "Nextjs/Reactjs, Tailwind CSS",
      git: "https://github.com/Akash-Mech/food-recipe-nextjs14",
      live: "https://recipe-nextjs14.netlify.app/",
      ui: false,
    },
    {
      id: 3,
      title: "UI Prototypes",
      image: ui,
      content:
        "Designed comprehensive UI prototypes for a company’s marketing website using Figma. These prototypes showcase user-centered design principles and provide a clear vision for the site's layout and functionality.",
      tech: "Figma, Canva",
      ui: true,
    },
    {
      id: 4,
      title: "Marketing Website",
      image: marketing,
      content:
        "Migrated a marketing website to a JAMstack architecture, enhancing performance and scalability. Added SEO optimization, EmailJS integration for email functionalities, and Google Analytics for tracking user behavior.",
      tech: "Nextjs/Reactjs, Tailwind CSS, Emailjs",
      ui: false,
    },
  ];
  return (
    <div className="mb-20" id="projects">
      <Title title="Projects" />
      <div className="gap-8 flex flex-col xl:w-4/5 mx-auto">
        {projectData.map((data) => {
          return (
            <div key={data.id}  className={`project-card flex flex-col items-center justify-center gap-8 ${
              data.id === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}>
              <div>
                <Image src={data.image} alt={data.title} width={1000} height={1000} />
              </div>
              <div className="space-y-4 lg:w-4/5">
                <h2 className="sub-title">{data.title}</h2>
                <p className="section-content ml-4">{data.content}</p>
                {data.ui == false ? (
                  <h3 className="sub-title">TechStack</h3>
                ) : (
                  <h3 className="sub-title">Tools Used</h3>
                )}

                <p className="section-content ml-4">{data.tech}</p>
                <div className="flex gap-2">
                  {data.git && (
                      <Link className="btn" target="_blank" href={data.git}> Github</Link>
                  )}
                  {data.live && (             
                      <Link className="btn !bg-transparent !border-primary !border-2" target="_blank" href={data.live}>View Live</Link>
                  )}

                
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
