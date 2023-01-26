import React, { useState } from "react";
import "./App.css";
import MinutesToHours from "./component/MinutesToHours";
import MilesToKilometers from "./component/MilesToKilometers";
import InchToCentimeters from "./component/InchToCentimeters";

function App() {
  // 화살함수
  const [mode, setMode] = useState(false);
  const [converter, setConverter] = useState(0);
  const handleChange = (e) => setConverter(e.target.value);
  const handleSubmit = (e) => e.preventDefault(); // 이벤트 전파를 막아서 새로고침을 안되게!
  const handleMode = () => setMode((prev) => !prev);
  return (
    <div className={mode ? "main dark" : "main day"}>
      <h1 className='site-header'>
        단위 환산 앱
        <button onClick={handleMode}>{mode ? "day" : "night"}</button>
      </h1>
      <div className='unit-converter'>
        <div className='ad'>
          구글 광고나 네이버 광고 이미지가 옵니다. 광고주님들, 연락주세요 ㅠ
          <p>010-123-4567 / address@yourmail.com</p>
        </div>
        <div className='converter'>
          <div className='title'>
            <h3>환산 하고자 하는 작업을 선택하세요!</h3>
            <select
              name='set-converter'
              id='set-converter'
              onChange={handleChange}
              value={converter}
            >
              <option value='0'>:: 단위변환 ::</option>
              <option value='1'>Minutes to Hours</option>
              <option value='2'>Miles to Kilometers</option>
              <option value='3'>Inch to Centimeter</option>
            </select>
          </div>
          <form onSubmit={handleSubmit}>
            {converter === "0" ? (
              <p>
                단위 환산앱은 분-초, 마일-킬로미터, 인치-센티미터 단위를
                환산하는데 도움을 드립니다.
              </p>
            ) : null}
            {converter === "1" ? <MinutesToHours /> : null}
            {converter === "2" ? <MilesToKilometers /> : null}
            {converter === "3" ? <InchToCentimeters /> : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
