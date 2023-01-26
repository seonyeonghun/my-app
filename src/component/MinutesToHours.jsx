import React, { useState } from "react";

function MinutesToHours() {
  const [amount, setAmount] = useState("0");
  const [disabled, setDisabled] = useState(false); // 입력폼의 disabled 상태와 연결(=데이터 바인딩)
  // 일반함수
  function handleChange(event) {
    setAmount(event.target.value);
  }
  // 화살표 함수 표기법
  const resetInput = () => {
    setAmount("0");
    setDisabled(false);
  };
  const inversion = () => {
    setDisabled((prev) => !prev);
  };
  return (
    <>
      <ul>
        <li>
          <input
            type='text'
            value={disabled ? amount * 60 : amount}
            onChange={handleChange}
            placeholder='값을 입력하세요'
            disabled={disabled}
          />
          <label>minutes</label>
        </li>
        <li>
          <input
            type='text'
            value={!disabled ? amount / 60 : amount}
            placeholder='값을 입력하세요'
            onChange={handleChange}
            disabled={!disabled}
          />
          <label>hours</label>
        </li>
        <li>
          <button onClick={resetInput}>리셋</button>
          <button onClick={inversion}>반전</button>
        </li>
      </ul>
    </>
  );
}

export default MinutesToHours;
