import React from "react";
import "./Styles/Section.css";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CoffeeIcon from "@mui/icons-material/Coffee";
import TerminalIcon from "@mui/icons-material/Terminal";
import BrushIcon from "@mui/icons-material/Brush";

const project = [
  {
    icon: <CodeIcon fontSize="inherit" />,
    text: "Frontend & Backend Development",
    link: "https://www.example.com/frontend-backend", // Add your desired link
  },
  {
    icon: <JavascriptIcon fontSize="inherit" />,
    text: "JavaScript Development",
    link: "https://www.example.com/javascript", // Add your desired link
  },
  {
    icon: <CoffeeIcon fontSize="inherit" />,
    text: "Java",
    link: "https://www.java.com/en/", // Add your desired link
  },
  {
    icon: <TerminalIcon fontSize="inherit" />,
    text: "Python",
    link: "https://www.example.com/python", // Add your desired link
  },
  {
    icon: <BrushIcon fontSize="inherit" />,
    text: "UI and UX Design",
    link: "https://www.example.com/ui-ux", // Add your desired link
  },
];

const Section = () => {
  return (
    <div className="section" id="Section">
      <h1>Projects</h1>
      <div className="project_list">
        {project.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project_link"
          >
            <div className="project_container">
              <div className="project_text">{project.text}</div>
              <div className="project_icon">{project.icon}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section;
