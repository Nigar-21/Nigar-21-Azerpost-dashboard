import { useState } from "react";
import CustomTable from "../components/table";
import { Button, Modal } from 'antd';

export default function AddPackage() {
 const data = [
 {
 key: "1",
 trackingId: "1234567",
 Name: 'Selin' ,
 Company: "Trendyol",
 index: "1",
 weight: "2",
 },
 {
 key: "2",
 trackingId: "567890",
 Name: 'Tommy' ,
 Company: "Trendyol",
 index: "1",
 weight: "2",
 },
 {
 key: "3",
 trackingId: "111222",
 Name: 'Mary' ,
 Company: "Amazon",
 index: "2",
 weight: "3",
 },
 ];
 const name = [
  'Kate','Tom','Bob','Jane','John'
 ]
 const randomIndex = Math.floor(Math.random() * name.length);
 const randomName = name[randomIndex];
 const [trackingId, setTrackingId] = useState("");
 const [filteredData, setFilteredData] = useState(data);
 const [count, setCount] = useState(0);
 const [isModalOpen, setIsModalOpen] = useState(false);
 const handleCheck = () => {
  if( trackingId === ""){
    setIsModalOpen(true);
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
 return}
 else{
 setFilteredData([...filteredData,{
 key: filteredData.length+1,
 trackingId: trackingId,
 Name: randomName ,
 Company: "Amazon",
 index: "2",
 weight: "3",
 }])
 };
 setTrackingId('');
 
 };
  
 
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
 
 const handleReset=()=>{
  setFilteredData([]);
 }

 return (
  <div className="addPackage">
    <h2>Acceptance of packages</h2>
    <div className="checking">
      <input value={trackingId} placeholder="Tracking Id" onChange={e => setTrackingId(e.target.value)} maxLength={6} />
      <div className="buttons">
        <span>{filteredData.length}</span>
        <button className="check" onClick={handleCheck}>
          Check
        </button>
        <Modal title="Error" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Tracking Id cannot be empty</p>
       
      </Modal>
        <button className="status" onClick={handleReset}>Change status</button>
      </div>
    </div>
    <div className="data">
      
      <CustomTable data={filteredData.reverse()} />
    </div>
  </div>
);
}

