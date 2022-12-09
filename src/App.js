import './App.css';
import React,{useState} from 'react';


function App() {

  //*********** */ useState for InputField  /******* */

  var [Input, SetInput] = useState("");

    //*********** */ Onchange function  /******* */


  function OnChange(e){
      SetInput((e.target.value))
  }

    //*********** */ BackSpace function  /******* */


  function backSpace(){
    Input = Input.substring(0, Input.length-1);
    SetInput(Input);
  }

    //*********** */ Button Clicked Function /******* */

  function btnClicked(e){
    SetInput(Input + e.target.innerHTML);
  }

    //*********** */ All Clear FUnction  /******* */

  function clear(){
    SetInput("");
  }

    //*********** */ Equals to Button Function  /******* */
  
  function result(){
    var result = eval(Input);
    SetInput(result);
  }


  return (
    <div>
      <h1>React Calculator</h1>
    <div className="container">
    
                          {/* InputField */}
    <input type="text" className='input' value={Input} onChange={OnChange}></input>

                          {/* First Row */}
    <div className='first-row'>
    <button className="btn c" type="button" name="c" onClick={clear} >c</button>
    <button className="btn &larr;" type="button" onClick={backSpace}>&larr;</button>
    <button className="btn %" type="button" name="%" onClick={btnClicked}>%</button>
    <button className="btn /" type="button" name="/" onClick={btnClicked}>/</button>
    </div>
                          {/* Second Row */}
    <div className='second-row'>
    <button className="btn" type="button" name="7" onClick={btnClicked}>7</button>
    <button className="btn" type="button" name="8" onClick={btnClicked}>8</button>
    <button className="btn" type="button" name="9" onClick={btnClicked}>9</button>
    <button className="btn" type="button" name="*" onClick={btnClicked}>*</button>
    </div>
                           {/* Third Row */}
    <div className='third-row'>
    <button className="btn" type="button" name="4" onClick={btnClicked}>4</button>
    <button className="btn" type="button" name="5" onClick={btnClicked}>5</button>
    <button className="btn" type="button" name="6" onClick={btnClicked}>6</button>
    <button className="btn" type="button" name="-" onClick={btnClicked}>-</button>
    </div>
                            {/* Fourth Row */}
    <div className='fourth-row'>
    <button className="btn" type="button"  name="1" onClick={btnClicked}>1</button>
    <button className="btn" type="button"  name="2" onClick={btnClicked}>2</button>
    <button className="btn" type="button"  name="3" onClick={btnClicked}>3</button>
    <button className="btn" type="button"  name="+" onClick={btnClicked}>+</button>
    </div>
                              {/* FifthRow */}
    <div className='fifth-row'>
    <button className="btn" id="zero" type="button" name="0" onClick={btnClicked}>0</button>
    <button className="btn" type="button" name="." onClick={btnClicked}>.</button>
    <button className="btn" type="button" name="=" onClick={result}>=</button>
    </div>
 
  
    </div>
    </div>
  );
}

export default App;

