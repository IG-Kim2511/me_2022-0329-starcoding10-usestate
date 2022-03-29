import { useState } from "react";

function App() {

  // 🍀 js0428. useState
  const [time, setTime] = useState(1);


  // 🍀 js0430. setState. 클릭... 함수실행
  // 11번째 클릭에서 1로 초기화 

  const handleClick =()=>{
    // setTime(time +1);

    let newTime;   //🦄

    if (time >= 10) {

      newTime = 1;
      
    } else {
      
      newTime = time + 1; 
    }

    setTime(newTime);    //🦄
  }

  return (
    <h3>
      <h1>useState</h1>
      <h2>basic state & useState</h2>

      {/* js0428 */}
      <span>state : {time}</span>

      {/* js0430 */}
      <button onClick={handleClick}>setState</button>
      

      <App2></App2>
    </h3>
  );
}



const App2 = () => {

  // 🍀 js0442. input에 입력한 정보,  list에 rendering
  const [name, setName] = useState(["Jaff","Finch"])

  return (
    <h3>
      <h2>  input에 입력한 정보,  list에 추가하기 </h2>

      <input type="text" />

      <button>upload</button>

      <p>list: </p>

      {/* js0442 */}
      {
        name.map((p_name, index)=>{
         return  <p key={index}>{p_name}</p>
        })
      }
    
    
    </h3>
  )
}



export default App;
