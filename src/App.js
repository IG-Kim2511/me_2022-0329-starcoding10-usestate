import { useState } from "react";

function App() {

  // 🍀 js0428. useState
  const [time, setTime] = useState(1);


  // 🍀 js0430. setState. 클릭... 함수실행
  const handleClick =()=>{
    setTime(time +1);
  }

  return (
    <h3>
      <h1>useState</h1>

      {/* js0428 */}
      <div>state : {time}</div>

      {/* js0430 */}
      <button onClick={handleClick}>setState</button>
      
    </h3>
  );
}

export default App;
