import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import Title from "./common/Title";

const Contact = () => {
  const contactDetails = [
    {
        id:1,
      icon: <MdOutlineEmail />,
      data: "akashsmani05@gmail.com",
    },
    {
        id:2,
      icon: <MdOutlineLocalPhone />,
      data: "7094750797",
    },
  ];
  return (
    <div id="contact" className="mb-20">
      <Title title="Contact"/>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {contactDetails.map((detail) => {
            return(
                <div key={detail.id} className="mx-auto contact-card">
                    <span className="text-2xl">{detail.icon}</span>
                    <h2>{detail.data}</h2>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Contact;
