import {useState} from "react"
import CustomTable from "../components/table";
export default function AddPackage() {
  return (
    <div className="addPackage">
      <h2>Acceptance of packages</h2>
      <div className="checking">
        <input type="text" placeholder="Tracking Id" />
        <div className="buttons">
         <span>
          12
         </span>
          <button className="check">Check</button>
          <button className="status">Change status</button>
        </div>
      </div>
      <div className="data">
        <CustomTable />
      </div>
    </div>
  );
}
