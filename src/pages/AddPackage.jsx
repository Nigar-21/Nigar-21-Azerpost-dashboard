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
  const CustomTable = () => {
    const [trackingId, setTrackingId] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [count, setCount] = useState(0);
    const handleCheck = () => {
      const filtered = data.filter((item) =>
        item.trackingId.includes(trackingId)
      );
      setFilteredData(filtered);
      setCount(filtered.length);
    };
  };

  return (
    <div className="addPackage">
      <h2>Acceptance of packages</h2>
      <div className="checking">
        <input value={trackingId} />
        <div className="buttons">
          <span>12</span>
          {<button className="check" onClick={handleCheck}>
            Check
          </button> }
          <button className="status">Change status</button>
        </div>
      </div>
      <div className="data">
        { <CustomTable dataSource={filteredData} /> }
      </div>
    </div>
  );
}
