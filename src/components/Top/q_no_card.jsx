import React from "react";
import CountUp from "react-countup";


const Ques_card = ({props}) => {
  return (
    <div className='w-full max-w-[288px] p-6 rounded-xl
        bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
        flex flex-col 
        hover:scale-105 hover:brightness-110
    '>
      <div className="  relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-orange-900/50  px-4 py-2 rounded-lg border border-purple-500/30 backdrop-blur-sm">
  <div className="font-bold text-white tracking-wide font-center">{props[0]}</div>
      </div>
  
        <div className="flex flex-col justify-center items-center flex-1">

        <div className=" text-[10px] sm:text-lg opacity-80 "> Questions Solved  </div>  

        
      <div className=" text-xl sm:text-6xl font-bold">
        {/* {props[1]} */}
        <CountUp end={props[1]} duration={1} separator=""/>
        </div>  
        </div>
      
    </div>
  );
};

export default Ques_card;
