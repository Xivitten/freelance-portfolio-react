import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projects_list";
import "./style.css"

const Project = () => {
  const {id} = useParams()
  const project = projects[id]

  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef();

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      setIsVisible(false);
    };
  }, []);

  return ( 
    <main className="section">
      <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>
            <img src={project.imgbig} alt={project.title} className="project-details__cover" />
              <div className="project-details__desc">
                <p>Skills: {project.skills}</p>
              </div>
              {project.gitHubLink && <BtnGitHub link="https://github.com"/>}
          </div>
        </div>
      </div>
  </main>
  );
}
 
export default Project;