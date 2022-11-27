// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handlChange(){
       console.log('Entering password...')
    }
    return (
       
            <input type='password' placeholder="Enter Password" onChange={handlChange}></input>
        
    )
}

export default Keypad;