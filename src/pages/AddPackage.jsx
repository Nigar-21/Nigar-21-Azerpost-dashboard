import { useState } from "react";
import CustomTable from "../components/table";
export default function AddPackage() {
 const data = [
 {
 key: "1",
 trackingId: "1234567",
 Company: "Trendyol",
 index: "1",
 weight: "2",
 },
 {
 key: "2",
 trackingId: "567890",
 Company: "Trendyol",
 index: "1",
 weight: "2",
 },
 {
 key: "3",
 trackingId: "111222",
 Company: "Amazon",
 index: "2",
 weight: "3",
 },
 ];
 const [trackingId, setTrackingId] = useState("");
 const [filteredData, setFilteredData] = useState(data);
 const [count, setCount] = useState(0);
 const handleCheck = () => {
  if( trackingId === ""){
    alert( "Tracking Id cannot be empty!");
 return}
 else{
 setFilteredData([...filteredData,{
 key: filteredData.length+1,
 trackingId: trackingId,
 Company: "Amazon",
 index: "2",
 weight: "3",
 }])

 setTrackingId('');
 }
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
        <button className="status" onClick={handleReset}>Change status</button>
      </div>
    </div>
    <div className="data">
      <CustomTable data={filteredData.reverse()} />
    </div>
  </div>
);
}

