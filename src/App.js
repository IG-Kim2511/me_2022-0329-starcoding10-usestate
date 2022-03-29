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
    <div>
      <h1>useState</h1>
      <h2>basic state & useState</h2>

      {/* js0428 */}
      <span>state : {time}</span>

      {/* js0430 */}
      <button onClick={handleClick}>setState</button>
      

      <App2/>
    </div>
  );
}



 // js0519
//  🦄 return 넣어야 함
const heavyWork =()=>{

  return ["Jeff","Finch"];

  console.log('밖으로 빼낸 변수')
}


function App2() {

  // 🍀 js0442. input에 입력한 정보,  list에 rendering
  // const [name, setName] = useState(["Jeff","Finch"])
  
  // 🍀 js0519. const...밖으로 빼서 사용하기 +  렌더링할때 한번만 실행되게 하기

  // 🍉 js0519-2. 파라미터에 함수 그대로 넣은 때 :  (글자 타이핑할때, 버튼클릭할때...등등  )모든작업에 계속해서 함수를 호출하고있음 👉 시스템에 안좋음
  // const [name, setName] = useState(heavyWork);
 
  // 🍉 js0519-3. 콜백함수로 넣어주면, 처음에 렌더링 될때 한번만 함수호출함. (더 좋음)
  const [name, setName] = useState(()=>{
    return heavyWork();
  });


  // 🍀 js0456. input value...inputState에 넣기 + console.log
  
  const [inputState, setInputState] = useState("")

   // js0456.
  const handleInput =(e)=>{
    setInputState (e.target.value);
  }
  // console.log("inputState :" + inputState )


  // 🍀 js0504. 
  /* 🦄setState((~a~~)=>{~})
    ~a~ 안에는 업로드하기 전 state의 값이 들어가 있음    
  */

  const handleUpload =()=>{

     setName((prevState)=>{
      console.log("이전 state: ", prevState);

      return [inputState, ...prevState];      //🦄 return 넣어야 함

    });
  }

  return (
    <div>
      <h2>  input에 입력한 정보,  list에 추가하기 </h2>

      {/* js0456 */}
      {/* 
        파라미터에 함수 그대로 넣은 때 :  (글자 타이핑할때, 버튼클릭할때...등등  )모든작업에 계속해서 함수를 호출하고있음 👉 시스템에 안좋음
        콜백함수로 넣어주면, 처음에 렌더링 될때 한번만 함수호출함. (더 좋음)
      */}

      <input type="text"  value={inputState} onChange={handleInput}/>
      
      
      {/* js0504 */}
      <button onClick={handleUpload}> upload</button>

      <p>list: </p>



      {/* js0442 */}
      {
        name.map((p_name, index)=>{
         return  <p key={index}>{p_name}</p>
        })
      }
    
    
    </div>
  )
}



export default App;
