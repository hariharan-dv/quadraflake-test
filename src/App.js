import React, { useState } from "react";

import test from './test_qf.json'
import './style.css'

const App = () => {
  // Data Import
  const [...data] = test;

  // Variable declaration
  let data2;
  let data3;

  // State Initialization
  const [asn, setAsn] = useState()
  const [uname, setUname] = useState()
  const [adp, setAdp] = useState()

  // Filter for 1st Dropdown
  let filteredAsn = data?.filter(a => a.asn === asn);
  // Filter for 2nd Dropdown
  filteredAsn.filter((e) => data2 = e.unit);
  // 3rd Dropdown selection
  data2?.filter((e) => data3 = e.ap);

  return (
    // Main Block
    <div className="main">
      {/* Select box block 1 */}
      <div className="wrapper" >
        <label>ASN: </label>
        <select
          placeholder="ASN"
          value={asn}
          onChange={(e) => setAsn(e.target.value)}
        >
          <option value="" >--Choose ASN--</option>
          {data.map((value) => {
            return (
              <option value={value.asn} key={value.asid}>
                {value.asn}
              </option>
            );
          })}
        </select>
      </div>

      {/* Select box block 2 */}
      <div className="wrapper">
        <label className="text-left">Location:</label>
        <select
          placeholder="Location"
          value={asn !== "" ? uname : ""}
          onChange={(e) => setUname(e.target.value)}
          disabled={asn ? false : true}
        >
          <option value="">--Choose Location --</option>
          {data2?.map((value) => {
            return (
              <option value={value.uname} key={value.uid}>
                {value.uname}
              </option>
            );
          })}
        </select>
      </div>

      {/* Select box block 3 */}
      <div className="wrapper">
        <label>Audit Period:</label>
        <select
          placeholder="Audit Period"
          value={uname !== "" ? adp : ""}
          onChange={(e) => setAdp(e.target.value)}
          disabled={asn && uname ? false : true}
        >
          <option value="">--Choose Audit Period--</option>
          {data3?.map((value) => {
            return (
              <option value={value.adp} key={value.adpid}>
                {value.adp}
              </option>
            );
          })}
        </select>
      </div>
      {
        (asn && uname && adp !== undefined && asn && uname && adp !== "" && asn && uname && adp) ?

          <div className="output-wrap">

            <div className="output">
              <strong>ASN:</strong> <span>{asn}</span>
            </div>
            <div className="output">
              <strong>Location:</strong> <span>{uname}</span>
            </div>
            <div className="output">
              <strong>Audit Period:</strong> <span>{adp}</span>
            </div>
          </div>

          :

          null
      }
      <button className="bottom" onClick={() => { setAsn(''); setUname(''); setAdp('') }}>Reset</button>
    </div>
  );
}

export default App;
