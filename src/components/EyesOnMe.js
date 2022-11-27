// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function handlFoucs(){
        console.log('Good!')
    }
    function handlBlur(){
        console.log('Hey! Eyes on me!')
    }
    return <button onFocus={handlFoucs} onBlur={handlBlur}> Eyes on me</button>
        
   
}
export default EyesOnMe