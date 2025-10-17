import { useState, useEffect, useRef } from 'react';
import Header from "./../components/header/Header"

const Home = () => {
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
    <>
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <Header />
        <main className="section">
            <div className="container">
              <ul className="content-list">
                  <li className="content-list__item">
                      <h2 className="title-2">Frontend</h2>
                      <p>JavaScript, ReactJS, HTML, CSS</p>
                  </li>
                  <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                      <p>MySQL, PHP, Laravel in future</p>
                  </li>
              </ul>
            </div>
        </main>
      </div>
    </>
  );
}
 
export default Home
;