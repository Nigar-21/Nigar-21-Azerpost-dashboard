import { useState } from 'react';
import './assets/scss/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass,faTableCellsLarge ,faCommentDots} from '@fortawesome/free-solid-svg-icons'
import ProfilImage from "./assets/images/download.jpg";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <header>

<div className='first'>
<button>
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
   <aside>
    <div className='logo'>
      <img src={ProfilImage} alt="" />
      <a href="">Antd Admin</a>
       </div>
       <ul><FontAwesomeIcon icon={faGaugeSimple} /></ul>
   </aside>
    </>
  )
}

export default App
