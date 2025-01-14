import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { useState } from "react";
import IMG1 from "../../assets/projects/cdw.webp";
import IMG2 from "../../assets/projects/mulearncce.webp";
import IMG3 from "../../assets/projects/fundesign.webp";

import IMG4 from "../../assets/projects/wrap.webp";
import IMG5 from "../../assets/projects/unnathi.webp";
import IMG6 from "../../assets/portfolio1.png";
import IMG7 from "../../assets/projects/Cholaarts.webp";
import IMG8 from "../../assets/projects/gtaHackathon.webp";
import IMG9 from "../../assets/projects/sarahsTechno.webp";
import IMG10 from "../../assets/projects/opengrad.webp";
import IMG11 from "../../assets/projects/offcet.webp";
import IMG12 from "../../assets/projects/urbantrash.webp";
import IMG13 from "../../assets/projects/karghewala.webp";

const Projects = () => {
  const [activeNav, setActiveNav] = useState("#");

  const data = [
    {
      id: 12,
      image: IMG12,
      title: "Urban Trash",
      github: "https://github.com/fundesigns/UrbanTrash-New",
      demo: "https://urbantrash.in/",
    },
    {
      id: 13,
      image: IMG13,
      title: "Karghewala",
      github: "https://github.com/fundesigns/Karghewala",
      demo: "https://karghewale.vercel.app/",
    },
    {
      id: 1,
      image: IMG1,
      title: "CODe Design Week Website",
      github: "https://github.com/amalcpaulson/code-design-week",
      demo: "https://codedesignweek.netlify.app/",
    },
    {
      id: 10,
      image: IMG10,
      title: "OpenGrad",
      github: "https://github.com/amalcpaulson/opengrad-frontend",
      demo: "https://opengrads.netlify.app/",
    },
    {
      id: 5,
      image: IMG5,
      title: "Unnathi - Website",
      github: "https://github.com/amalcpaulson/unnathi-vite",
      demo: "https://unnathi-new.vercel.app/",
    },

    {
      id: 4,
      image: IMG4,
      title: "WRAP - Waste Management Application",
      github: "https://github.com/amalcpaulson/Wrap-Django",
      demo: "https://wrap-web-app.netlify.app/",
    },

    {
      id: 7,
      image: IMG7,
      title: "Chola Art Gallery",
      github: "https://github.com/amalcpaulson/Chola-Arts-Gallery",
      demo: "https://cholaart.in/",
    },
    {
      id: 8,
      image: IMG8,
      title: "GTA Hackathon (Mulearn) - Website",
      github: "https://github.com/amalcpaulson/gtahackathon",
      demo: "https://gta.mulearn.org/",
    },

    {
      id: 3,
      image: IMG3,
      title: "Web applicaation for Fundesign",
      github: "https://github.com/amalcpaulson/fundesign",
      demo: "https://fundesign.vercel.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Website - Mulearn CCE Chapter",
      github: "https://github.com/amalcpaulson/mulearn_cce",
      demo: "https://mulearn-cce.vercel.app/",
    },

    {
      id: 9,
      image: IMG9,
      title: "Sarah's Techno",
      github: "https://github.com/amalcpaulson/SarasTechno",
      demo: "https://saras-techno.vercel.app/",
    },
    {
      id: 5,
      image: IMG11,
      title: "Offcet",
      github: "https://github.com/amalcpaulson/offcet",
      demo: "https://offcet.netlify.app/",
    },
    {
      id: 6,
      image: IMG6,
      title: "Lab Report Daily basis analysing application",
      github: "https://github.com/amalcpaulson/TEZER",
      demo: "https://github.com/amalcpaulson/TEZER",
    },
  ];

  return (
    <div style={{background:"black"}}>
      <div>
        <nav className="navbar">
          <a
            href="../"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
          <a
            href="../#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#" ? "active" : ""}
          >
            <BiUserCircle />
          </a>
          <a
            href="../#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#" ? "active" : ""}
          >
            <BsJournalBookmarkFill />
          </a>
          <a
            href="../#services"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#" ? "active" : ""}
          >
            <MdOutlineHomeRepairService />
          </a>
          <a
            href="../#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#" ? "active" : ""}
          >
            <TbMessages />
          </a>
        </nav>
      </div>
      <div className="projects-wrapper">
        <div id="portfolio" className="portfolio-wrapper">
          <div className="portfolio-header" style={{ marginTop: "15px" }}>
            <h2>My Projects</h2>
          </div>
          <div className="portfolio_container">
            {data.map(({ id, image, title, github, demo }) => {
              return (
                <article key={id} className="portfolio_item">
                  <a
                    href={demo}
                    target="_blank"
                    className="portfolio_item_image"
                    rel="noopener noreferrer"
                  >
                    <img src={image} alt={title} />
                  </a>
                  <h3 style={{ color: `var(--color-primary)`, fontFamily: "Bella" }}>
                    {title}
                  </h3>
                  <div className="portfolio_item_cta">
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
