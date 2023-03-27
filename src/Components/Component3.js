import React from 'react'
import './Component3.css';

function Component3(props) {
    const value3 =  props;
    console.log(value3)
    console.log(value3.mydata)
    return (
        <div className='com3'>
            <div className={value3.mydata.mycolor}>Component3 {value3.mydata.mycolor}</div>
        </div>
    
    )
}

export default Component3