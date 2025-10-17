import { useState, useEffect, useRef } from 'react';
import "./style.css"

const Contacts = () => {
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
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Penza, Russia</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+79051234567">+7 (986) 731-34-00</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:webdev@protonmail.com">sindormant58@yandex.ru</a></p>
                        </li>
                    </ul>
            </div>
        </div>
    </main>
  );
}
 
export default Contacts;