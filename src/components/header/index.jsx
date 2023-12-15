import './styles.css'
import { useState } from 'react';
import { 
  linkLogo, 
  marvelLogo, 
  spiderVerse,
  gitLogo } from '../../assets/image'

export const Header = ({ErrorMessage}) => {

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
        <div className="options">
          <ul className='menu'>
            <li onClick={handleClick}>Home</li>
            <li onClick={ErrorMessage}>Search</li>
            <li onClick={ErrorMessage}>My songs</li>
          </ul>
          <div className='contacts'>
            <a target='_blank' href="https://www.linkedin.com/in/emanuel-hfsilva/"><img src={linkLogo} alt="" /></a>
            <a target='_blank' href="https://github.com/emanuelhenrique-dev?tab=repositories"><img src={gitLogo} alt="" /></a>
            <a target='_blank' href="https://www.sonypictures.com/movies/spidermanacrossthespiderverse"><img src={marvelLogo} alt="" /></a>
          </div>
        </div>    
        <div className="logo glitch-wrapper">
        <h2 className="glitch" data-glitch="SPIDER-MAN">SPIDER-MAN</h2>
        <h3 className="glitch" data-glitch="INTO THE SPIDER-VERSE">INTO THE SPIDER-VERSE</h3>
        </div> 
        <div className='contacts'>
            <a target='_blank' href="https://www.linkedin.com/in/emanuel-hfsilva/"><img src={linkLogo} alt="" /></a>
            <a target='_blank' href="https://github.com/emanuelhenrique-dev?tab=repositories"><img src={gitLogo} alt="" /></a>
            <a target='_blank' href="https://www.sonypictures.com/movies/spidermanacrossthespiderverse"><img src={marvelLogo} alt="" /></a>
        </div>
      </div>

    </nav>
   );
}
 
