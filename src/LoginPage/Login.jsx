import React, { useEffect, useState } from "react";
import axios from 'axios'

const LoginUser=({setview , setUserA})=>{
  // console.log({setview});
  // console.log(setvie)
    const[input1,setinput1]=useState("Aashishk878");
    const[input2,setinput2]=useState("ayu_264");


async function Submithandler() {
  let check1 = null;
  let check2 = null;

  async function u1() {
    try {
      const res = await fetch('http://localhost:5000/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: input1 }),
      });
      const data = await res.json();
      cout<<data;

      return data.found;
    } catch (err) {
      // alert(err);
      return null;
    }
  }

  async function u2() {
    try {
      const res = await fetch('http://localhost:5000/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: input2 }),
      });
      const data = await res.json();
      // cout<<data;
      console.log(data);
      return data.found;
    } catch (err) {
            console.log(err);

      return null;
    }
  }

  
  check1 = await u1();
  check2 = await u2();
if(check2==false && check1==false){
alert('both not found')
}
else if(check1==false){
  alert(input1+' not found')
}
else if(check2==false){
  alert(input2+' not found')

}
else{
  setview(1)
  setUserA([input1,input2]);
  
  // console.log(setview)
  // console.log(';hererrrr')
  // alert('both user found')
}
setinput1('');
setinput2('');
}


   

    return(
        <div className="flex flex-col justify-center h-screen ">
          

            <div className=" flex items-center justify-center  gap-x-4">
                <div>

                <input 
                value={input1}
                onChange={(e)=>{setinput1(e.target.value); }}
                className="bg-grey-200 rounded-xs "></input>
                </div>
                <div>

                <input
                value={input2}
                onChange={(e)=>{setinput2(e.target.value); }} className="bg-white rounded-xs"></input>
                </div>
                
            </div>

            <div className=" flex items-center justify-center mt-5 ">
                <button onClick={Submithandler} className="bg-blue-600 px-4 py-1 rounded-xl">Submit</button>
            </div>

        </div>
    )
}
export default LoginUser;