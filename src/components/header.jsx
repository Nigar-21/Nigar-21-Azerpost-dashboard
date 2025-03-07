import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass,faTableCellsLarge ,faCommentDots,faCircle,faChevronDown,faCircleInfo,faSitemap,faIdCard,faUser,faTable,faTableCells} from '@fortawesome/free-solid-svg-icons'

import ProfilImage from "../assets/images/download.jpg";
function Header({toggleSidebar,openSidebar}) {

  return (
     <header>
    
    <div className='first' style={{marginLeft: openSidebar ? "250px" : "0"}}>
    <button className='toggleBtn' onClick={toggleSidebar}> 
       <FontAwesomeIcon icon={faBars} />
    </button>
    <div className='search'>
      <div className='searcLine'>
        <input type="text" placeholder='Search' />
      </div>
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
    </div>
    <div className='second'>
    <button>
    <FontAwesomeIcon icon={faTableCellsLarge} />
    </button>
    <button>
    <FontAwesomeIcon icon={faCommentDots} />
    </button>
    <div className='profile'>
      <img src={ProfilImage} alt="" />
    </div>
    </div>
       </header>
  )
}

export default Header