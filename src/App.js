import { useState } from "react";

function App() {

  // π js0428. useState
  const [time, setTime] = useState(1);


  // π js0430. setState. ν΄λ¦­... ν¨μμ€ν
  // 11λ²μ§Έ ν΄λ¦­μμ 1λ‘ μ΄κΈ°ν 

  const handleClick =()=>{
    // setTime(time +1);

    let newTime;   //π¦

    if (time >= 10) {

      newTime = 1;
      
    } else {
      
      newTime = time + 1; 
    }

    setTime(newTime);    //π¦
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
//  π¦ return λ£μ΄μΌ ν¨
const heavyWork =()=>{

  return ["Jeff","Finch"];

  console.log('λ°μΌλ‘ λΉΌλΈ λ³μ')
}


function App2() {

  // π js0442. inputμ μλ ₯ν μ λ³΄,  listμ rendering
  // const [name, setName] = useState(["Jeff","Finch"])
  
  // π js0519. const...λ°μΌλ‘ λΉΌμ μ¬μ©νκΈ° +  λ λλ§ν λ νλ²λ§ μ€νλκ² νκΈ°

  // π js0519-2. νλΌλ―Έν°μ ν¨μ κ·Έλλ‘ λ£μ λ :  (κΈμ νμ΄νν λ, λ²νΌν΄λ¦­ν λ...λ±λ±  )λͺ¨λ μμμ κ³μν΄μ ν¨μλ₯Ό νΈμΆνκ³ μμ π μμ€νμ μμ’μ
  // const [name, setName] = useState(heavyWork);
 
  // π js0519-3. μ½λ°±ν¨μλ‘ λ£μ΄μ£Όλ©΄, μ²μμ λ λλ§ λ λ νλ²λ§ ν¨μνΈμΆν¨. (λ μ’μ)
  const [name, setName] = useState(()=>{
    return heavyWork();
  });


  // π js0456. input value...inputStateμ λ£κΈ° + console.log
  
  const [inputState, setInputState] = useState("")

   // js0456.
  const handleInput =(e)=>{
    setInputState (e.target.value);
  }
  // console.log("inputState :" + inputState )


  // π js0504. 
  /* π¦setState((~a~~)=>{~})
    ~a~ μμλ μλ‘λνκΈ° μ  stateμ κ°μ΄ λ€μ΄κ° μμ    
  */

  const handleUpload =()=>{

     setName((prevState)=>{
      console.log("μ΄μ  state: ", prevState);

      return [inputState, ...prevState];      //π¦ return λ£μ΄μΌ ν¨

    });
  }

  return (
    <div>
      <h2>  inputμ μλ ₯ν μ λ³΄,  listμ μΆκ°νκΈ° </h2>

      {/* js0456 */}
      {/* 
        νλΌλ―Έν°μ ν¨μ κ·Έλλ‘ λ£μ λ :  (κΈμ νμ΄νν λ, λ²νΌν΄λ¦­ν λ...λ±λ±  )λͺ¨λ μμμ κ³μν΄μ ν¨μλ₯Ό νΈμΆνκ³ μμ π μμ€νμ μμ’μ
        μ½λ°±ν¨μλ‘ λ£μ΄μ£Όλ©΄, μ²μμ λ λλ§ λ λ νλ²λ§ ν¨μνΈμΆν¨. (λ μ’μ)
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
