import { useState, useEffect, useRef } from 'react';
import Project from "../components/project/Project"
import {projects} from "./../helpers/projects_list"
import "./style.css"

const Projects = () => {
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
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projects.map((project, index) => {
                    return <Project key={project.id} title={project.title} img={project.img} index={index}/>
                })}
            </ul>
        </div>
      </div>
    </main>
  );
}
 
export default Projects;