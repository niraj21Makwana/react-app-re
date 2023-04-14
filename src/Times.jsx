import React from "react";
import './index.css';
import {add,sub,mul,div} from './Calculate';

function Times(){
    let currentDate = new Date();
    currentDate = currentDate.getHours();
    let greeting ='';
    const cssStyle = { };
    
    if(currentDate >= 1 && currentDate < 12){
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    }else if(currentDate>=12 && currentDate < 19){
        greeting = 'Good afternoon';
        cssStyle.color = 'Orange';
    }else{
        greeting = 'Good Night';
        cssStyle.color = 'blue';
    }
    
    return(<>
        <div className='mainGreeting'>
            <div className='greetingStyle'>
                <h1>Hello sir,<span  style={cssStyle}> {greeting}</span></h1>
            </div>
        </div>
    <ul>
      <li>add of two Numbers are {add(10,20)}</li>
      <li>Sub of two Numbers are {sub(10,20)}</li>
      <li>multi of two Numbers are {mul(10,20)}</li>
      <li>divd of two Numbers are {div(10,20)}</li>
    </ul>
    </>);
}

export default Times;