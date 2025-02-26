import React from 'react'
import { faBars, faMagnifyingGlass,faTableCellsLarge ,faCommentDots,faCircle,faChevronDown,faCircleInfo,faSitemap,faIdCard,faUser,faTable,faTableCells,faHouse} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AutoComplete } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Divider } from 'antd';
import { Carousel } from 'antd';
import CustomSlider from '../components/customSlider'
import GetStartedImage from "../assets/images/get-started.png";
const items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Default
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Project
      </a>
    ),
    key: '1',
  },
  {
    label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Ecommerce
        </a>
      ),
      key: '2',
  },
  {
    label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Marketing
        </a>
      ),
      key: '3',
  },
  {
    label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Social
        </a>
      ),
      key: '4',
  },
];
const Line = () => (
    <>
    <Divider orientation="right">Default Dashboard</Divider>
    </>
);
// const AutoScroll = () => (
//     <Carousel autoplay>
//       <div>
//         <h3>Aenean Sit Amet</h3>
//         <p>Owner: <span>Dael Bulward,</span></p>
//         <p>Client: <span>Topicblab,</span></p>
//         <p>Priority: <span>Medium,</span></p>
//         <p>Type: <span>Marketing,</span></p>
//         <p>Location: <span>Palermo,</span></p>
//       </div>
//       <div>
//       <h3>Mauris Eget Mas</h3>
//         <p>Owner: <span>Jarrod McLanaghan,</span></p>
//         <p>Client: <span>Wikibox,</span></p>
//         <p>Priority: <span>Low,</span></p>
//         <p>Type: <span>Software Development,</span></p>
//         <p>Location: <span>Xichangmen,</span></p>
//       </div>
//       <div>
//       <h3>Quis Tortor Id</h3>
//         <p>Owner: <span> Lyon Spreag,</span></p>
//         <p>Client: <span>Ntags,</span></p>
//         <p>Priority: <span>Medium,</span></p>
//         <p>Type: <span>Research,</span></p>
//         <p>Location: <span>Brotas,</span></p>
//       </div>
//       <div>
//       <h3>Etiam Vel Augue</h3>
//         <p>Owner: <span> Keefe Ogan,</span></p>
//         <p>Client: <span> Gabtune,,</span></p>
//         <p>Priority: <span>Low,</span></p>
//         <p>Type: <span>Marketing,</span></p>
//         <p>Location: <span>Hanzhong,</span></p>
//       </div>
//     </Carousel>
//   );
export default function Home() {
  return (
   <div className='home'>
<div className='header'>
<h2>Default Dashboard</h2>
    <span>
    <FontAwesomeIcon className='icons' icon={faHouse} />
    Home
    </span>
    <span className='customHeaderMenu'>
    <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      
         <FontAwesomeIcon  icon={faCircle} className='icons'/>
               Dashboards 
        <DownOutlined />
      
    </a>
  </Dropdown>
  </span>
  <p>
    Default
  </p>
</div>
<Line/>
<div className='boxes'>
<div className='thisWeek'>
<div className='text'>
<h2>
You have 2 projects to finish this week
</h2>
<p>You have already completed 68% of your monthly target. Keep going to achieve your goal.</p>
<button>
    Get started
</button>
</div>
<div className='image'>
   <img src={GetStartedImage} alt="" />
</div>
</div>
<div className='smalls'>
<div className='projects'>
<h2>10+</h2>
<p>Projects</p>
</div>
<div className='smallTasks'>
<h2>60+</h2>
<p>Tasks</p>
</div>
</div>
<div className='onGoingProjects'>
    <h2>Ongoing Projects</h2>
    <button>View all</button>
<CustomSlider/>
</div>
<div className='weeklyActivities'>

</div>
<div className='taskStats'>

</div>
<div className='queuedProjects'>

</div>
<div className='tasks'>

</div>
<div className='notifications'>

</div>
</div>
   </div>
  )
}
