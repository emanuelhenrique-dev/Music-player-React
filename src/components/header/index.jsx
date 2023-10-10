import './styles.css'
import { 
  linkLogo, 
  marvelLogo, 
  spiderVerse,
  gitLogo } from '../../assets/image'

export const Header = () => {
  return ( 
    <nav>
      <div className="nav-items">
      <ul className='menu'>
        <li>Home</li>
        <li>Search</li>
        <li>My songs</li>
      </ul>
      <div className='contacts'>
          <img src={linkLogo} alt="" />
          <img src={gitLogo} alt="" />
          <img src={marvelLogo} alt="" />
      </div>
      <img className='Logo' src={spiderVerse} alt="" />
      </div>



    </nav>
   );
}
 
