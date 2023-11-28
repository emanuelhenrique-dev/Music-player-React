import './styles.css'
import { useState } from 'react';
import { 
  linkLogo, 
  marvelLogo, 
  spiderVerse,
  gitLogo } from '../../assets/image'

export const Header = () => {

  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(isActive => !isActive)
  }

  return ( 
    <nav>
      
      <div className="nav-items">
        <div className= {isActive ? 'mobile-menu open' : 'mobile-menu'}
             onClick={handleClick}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
        </div>
        <ul className='menu'>
          <li>Home</li>
          <li>Search</li>
          <li>My songs</li>
        </ul>
        <div className="logo glitch-wrapper">
        <h2 className="glitch" data-glitch="SPIDER-MAN">SPIDER-MAN</h2>
        <h3 className="glitch" data-glitch="INTO THE SPIDER-VERSE">INTO THE SPIDER-VERSE</h3>
        </div> 
        <div className='contacts'>
            <img src={linkLogo} alt="" />
            <img src={gitLogo} alt="" />
            <img src={marvelLogo} alt="" />
        </div>
      </div>

    </nav>
   );
}
 
