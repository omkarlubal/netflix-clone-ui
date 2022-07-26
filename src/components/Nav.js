import React, {useState, useEffect} from 'react';
import '../css/Nav.css'

function Nav() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);  
            } else setShow(false);
        });
    
      return () => {
          // added to remove unnecessary extra listeners
        window.removeEventListener("scroll");
      }
    }, [])
    
  return (
    <div className={`nav && ${show && "nav__black"}`}>
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" 
        alt="Netflix Logo" 
        className="nav__logo" />

        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" 
        alt="Netflix Avatar" className="nav__avatar" />
    </div>
  )
}

export default Nav;