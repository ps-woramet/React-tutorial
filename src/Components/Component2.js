import React from 'react'
import './Component2.css';

function Component2(props) {
  const {myname, mynumber, mymessage} = props;
  console.log("component2");
  return (
    <div className='com2'>
        <div>myname is {myname}</div>
        <div>mynumber is {mynumber}</div>
        <div>mymessage is {mymessage}</div>
        Component2
    </div>
  )
}

export default Component2