import React, { useEffect, useState } from "react";
import Nav from "../components/Top/Navbar";
import axios from 'axios'
import { motion } from 'framer-motion';


const rotatingTexts = [
  'Compete. Improve. Repeat.',
  'Solve daily. Track weekly.',
];

const LoginUser=({setview , setUserA})=>{
  // console.log({setview});
  // console.log(setvie)
    const[input1,setinput1]=useState("");
    const[input2,setinput2]=useState("");
    const [index, setIndex] = useState(0);


async function Submithandler() {
  let check1 = null;
  let check2 = null;

  async function u1() {
    try {
      const res = await fetch('https://leet-board-backend.vercel.app/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: input1 }),
      });
      const data = await res.json();
     

      return data.found;
    } catch (err) {
      // alert(err);
      return null;
    }
  }

  async function u2() {
    try {
      const res = await fetch('https://leet-board-backend.vercel.app/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: input2 }),
      });
      const data = await res.json();
      
      // console.log(data);
      return data.found;
    } catch (err) {
            // console.log(err);

      return null;
    }
  }


  
   check1 = await u1();
  check2 = await u2();
  // console.log(check1,check2);
  
   if(check1==true && check2==true){
   setview(1)
   setUserA([input1,input2]);
  //  console.log('-------------------------------------')
  
  }
else if(check2==false && check1==false){
alert('both not found')
}
else if(check1==false){
  alert(input1+' not found')
}
else if(check2==false){
  alert(input2+' not found')

}
setinput1('');
setinput2('');
}

useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
   

    return(
      <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-4">
          
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-4 tracking-tight">
  LeetCode Insights. Visualized Together.
</h1>
<p className="text-lg sm:text-xl text-gray-300 mb-6 text-center max-w-2xl">
  Analyze and compare contest ratings, problem tags, and daily streaks with your peers.
</p>



      <motion.p
        className="text-blue-400 text-lg sm:text-xl font-semibold mb-10"
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
      >
        {rotatingTexts[index]}
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        
  

                <input 
                value={input1}
                onChange={(e)=>{setinput1(e.target.value); }}
                 placeholder="Enter User A"
                className="  bg-white  px-5 py-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-transform hover:scale-105 "></input>
             

                <input
                value={input2}
                placeholder="Enter User B"
                onChange={(e)=>{setinput2(e.target.value); }}  className="  bg-white px-5 py-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-transform hover:scale-105 "></input>
               
                
            </div>
                <button onClick={Submithandler} className="  mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform hover:scale-105">Compare Now</button>

          

        </div>
    )
}
export default LoginUser;
