import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass,faTableCellsLarge ,faCommentDots,faCircle,faChevronDown,faCircleInfo,faSitemap,faIdCard,faUser,faTable,faTableCells} from '@fortawesome/free-solid-svg-icons'
import ProfilImage from "../assets/images/download.jpg";
import Home from "../pages/home";
import AddPackage from '../pages/AddPackage';

export default function Sidebar({openSidebar}) {
 
  const [openMenu, setOpenMenu] = useState({
    dashboards: false,
    corporate: false,
    userProfile: false,
  });
  const toggleMenu = (menu) => {
    setOpenMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };
  useEffect(() => {
    if (openSidebar) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }, [openSidebar]);
  
  return (
    <>
   {openSidebar && (
  
 <aside>
    <div className='logo'>
      <img src={ProfilImage} alt="" />
      <a href="https://antd-multipurpose-dashboard.netlify.app/" >Antd Admin</a>
       </div>
       <ul className='dashboards'>
        <span onClick={() => toggleMenu("dashboards")} className="menu-title">
        <FontAwesomeIcon icon={faCircle} className='icons'/>
       Dashboards 
       <FontAwesomeIcon icon={faChevronDown} className='icons' />
        </span>
       {openMenu.dashboards && (
          <>
            <li><Link to="/">Default </Link></li>
            <li>Projects</li>
            <li><Link to="/addPackage">AddPackage</Link></li>
            <li>eCommerce</li>
            <li>Marketing</li>
            <li>Social</li>
            <li>Learning</li>
            <li>Logistics</li>
          </>
        )}
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
<span onClick={() => toggleMenu("corporate")} className="menu-title">
<FontAwesomeIcon icon={faIdCard} className='icons'/>
Corporate
<FontAwesomeIcon icon={faChevronDown} className='icons' />
</span>
{openMenu.corporate && (
            <>
              <li>About</li>
              <li>Team</li>
              <li>FAQ</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>License</li>
            </>
          )}
</ul>
<ul className='userprofile'>
<span  onClick={() => toggleMenu("userProfile")} className="menu-title">
<FontAwesomeIcon icon={faUser} className='icons'/>
User profile
<FontAwesomeIcon icon={faChevronDown} className='icons'/>
</span>
{openMenu.userProfile && (
            <>
              <li>Details</li>
              <li>Preferences</li>
              <li>Information</li>
              <li>Security</li>
            </>
          )}

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
   
   )}
   </>
  )

}

