import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',      
  background: '#364d79',
};
const CustomSlider = () => (
 <div className='carousel'>
     <Carousel autoplay >
    <div>
        <h3>Aenean Sit Amet</h3>
         <p>Owner: <span>Dael Bulward,</span></p>
        <p>Client: <span>Topicblab,</span></p>
        <p>Priority: <span>Medium,</span></p>
       <p>Type: <span>Marketing,</span></p>
      <p>Location: <span>Palermo,</span></p>
      </div>
      <div>
       <h3>Mauris Eget Mas</h3>
        <p>Owner: <span>Jarrod McLanaghan,</span></p>
        <p>Client: <span>Wikibox,</span></p>
        <p>Priority: <span>Low,</span></p>
         <p>Type: <span>Software Development,</span></p>
      </div>
       <div>
      <h3>Quis Tortor Id</h3>
        <p>Owner: <span> Lyon Spreag,</span></p>
         <p>Client: <span>Ntags,</span></p>
        <p>Priority: <span>Medium,</span></p>
       <p>Type: <span>Research,</span></p>
       <p>Location: <span>Brotas,</span></p>
     </div>
      <div>
      <h3>Etiam Vel Augue</h3>
        <p>Owner: <span> Keefe Ogan,</span></p>
        <p>Client: <span> Gabtune,,</span></p>
        <p>Priority: <span>Low,</span></p>
        <p>Type: <span>Marketing,</span></p>
        <p>Location: <span>Hanzhong,</span></p>
     </div>
  </Carousel>
 </div>
);
export default CustomSlider;