import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass,faTableCellsLarge ,faCommentDots,faCircle,faChevronDown,faCircleInfo,faSitemap,faIdCard,faUser,faTable,faTableCells} from '@fortawesome/free-solid-svg-icons'
import ProfilImage from "../assets/images/download.jpg";


export default function sidebar() {
  return (
    <aside>
    <div className='logo'>
      <img src={ProfilImage} alt="" />
      <a href="https://antd-multipurpose-dashboard.netlify.app/" >Antd Admin</a>
       </div>
       <ul className='dashboards'>
        <span>
        <FontAwesomeIcon icon={faCircle} className='icons'/>
       Dashboards 
       <FontAwesomeIcon icon={faChevronDown} className='icons' />
        </span>
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
       <FontAwesomeIcon icon={faCircleInfo} className='icons' />
       About
       </span>
       <span>
       <FontAwesomeIcon icon={faSitemap} className='icons'/>
       Sitemap
       </span>
       <div className='pages'>
<p>Pages</p>
<ul className='corporate'>
<span>
<FontAwesomeIcon icon={faIdCard} className='icons'/>
Corporate
<FontAwesomeIcon icon={faChevronDown} className='icons' />
</span>
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
<span>
<FontAwesomeIcon icon={faUser} className='icons'/>
User profile
<FontAwesomeIcon icon={faChevronDown} className='icons'/>
</span>
<li>Details</li>
<li>Preferences</li>
<li>Information</li>
<li>Security</li>

</ul>
       </div>
       <div className='help'>
        <p>Help</p>
        <span>
        <FontAwesomeIcon icon={faTable} className='icons'/>
        Roadmap
        </span>
        <span>
        <FontAwesomeIcon icon={faTableCells} className='icons'/>
        Components
        </span>
       </div>
   </aside>
  )
}
