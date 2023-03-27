import { useState,useEffect } from 'react';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import component3_data from './data/com3data'; // export default data from com3data.js

function App() {
  const textInput = <input type="text" />;
  const okButton = <button>button</button>;
  const element_component3_data = component3_data.map((com3data, com3index) => {
    return <Component3 key = {com3index} mydata = {com3data}/>
  });

  // usestate
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
      setSum(num1 + num2);
    }, [num1, num2]);

  return (
    <div className="App">
      <div className="container">
        <p>helloworld</p>
        <p>{textInput}</p>
        <p>{okButton}</p>
      </div>
      <div className="green">
        <div>color green</div>
      </div>
      <Component1 />
      <Component2 myname = "woramet" mynumber = "1" mymessage = "hello"/>
      {element_component3_data}
      <div className='containernumber'>
        <div className='connum1'>
          <p className="state">{num1}</p>
          <button className="state" onClick={() => setNum1(num1 + 1)}>Add state1</button>
        </div>
        <div className='connum2'>
          <p className="state">{num2}</p>
          <button className="state" onClick={() => setNum2(num2 + 1)}>Add state2</button>
        </div>
        <p>sum is {sum}</p>
      </div>
    </div>
  );
}

export default App;
