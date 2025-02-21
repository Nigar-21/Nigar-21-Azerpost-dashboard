import { useState } from 'react';
import './assets/scss/main.scss';
import Header from "./components/header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass,faTableCellsLarge ,faCommentDots,faCircle,faChevronDown,faCircleInfo,faSitemap,faIdCard,faUser,faTable,faTableCells} from '@fortawesome/free-solid-svg-icons'
import ProfilImage from "./assets/images/download.jpg";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
   <aside>
    <div className='logo'>
      <img src={ProfilImage} alt="" />
      <a href="">Antd Admin</a>
       </div>
       <ul className='dashboards'>
        <FontAwesomeIcon icon={faCircle} />
       Dashboards 
       <FontAwesomeIcon icon={faChevronDown} />
       <li>
      Default
        </li>
        <li>
        Projects
        </li>
        <li>
          eCommerce
        </li>
        <li>
          Marketing
        </li>
        <li>
          Social
        </li>
        <li>
          Bidding
        </li>
        <li>
          Learning
        </li>
        <li>
          Logistics
        </li>
       </ul>
       <span>
       <FontAwesomeIcon icon={faCircleInfo} />
       About
       </span>
       <span>
       <FontAwesomeIcon icon={faSitemap} />
       Sitemap
       </span>
       <div className='pages'>
<span>Pages</span>
<ul className='corporate'>
<FontAwesomeIcon icon={faIdCard} />
Corporate
<FontAwesomeIcon icon={faChevronDown} />
<li>
  About
</li>
<li>
  Team
</li>
<li>
  FAQ
</li>
<li>
  Contact us
</li>
<li>
  Pricing
</li>
<li>
  License
</li>
</ul>
<ul className='userprofile'>
<FontAwesomeIcon icon={faUser} />
User profile
<FontAwesomeIcon icon={faChevronDown} />
<li>Details</li>
<li>Preferences</li>
<li>Information</li>
<li>Security</li>
</ul>
       </div>
       <div className='Help'>
        <span>Help</span>
        <span>
        <FontAwesomeIcon icon={faTable} />
        Roadmap
        </span>
        <span>
        <FontAwesomeIcon icon={faTableCells} />
        Components
        </span>
       </div>
   </aside>
    </>
  )
}

export default App
