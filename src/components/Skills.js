import React from "react";
import Title from "./common/Title";

const Skills = () => {
  const skillSet = [
    {
      id: 1,
      title: "Frontend Developer",
      content:
        "As a Frontend Developer, I am proficient in creating responsive and interactive web pages using",
      tech: "Nextjs/Reactjs, Tailwind CSS, JavaScript",
      tools: "VS Code, Figma, Git, Canva",
    },
    {
      id: 2,
      title: "Software Developer",
      content:
        "As a Software Developer, I have expertise in the following technologies",
      tech: "ROS2, Nav2, OpenCV, Python, Frontend Development",
      tools: "Gazebo, Rviz2",
    },
  ];
  return (
    <div id="skills" className="mb-20">
      <Title title="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center xl:w-4/5 mx-auto">
        {skillSet.map((skill) => {
          return (
            <div key={skill.id} className="card group hover:bg-white">
              <div className="group-hover:text-black">
                {" "}
                <h2 className="sub-title">{skill.title}</h2>
                <p className="section-content ml-4">{skill.content}</p>
              </div>
              <div className="group-hover:text-black">
                {" "}
                <h3 className="sub-title">Skills</h3>
                <p className="section-content ml-4">{skill.tech}</p>
              </div>
              <div className="group-hover:text-black">
                {" "}
                <h3 className="sub-title">Tools</h3>
                <p className="section-content ml-4">{skill.tools}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
