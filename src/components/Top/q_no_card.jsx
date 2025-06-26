import React from "react";
import CountUp from "react-countup";


const Ques_card = ({props}) => {
  return (
    <div className='w-full max-w-[288px] p-6 rounded-xl
        bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
        flex flex-col justify-center items-center
        hover:scale-105 hover:brightness-110
    '>
      
   <div className="text-center space-y-1">
  <span className="text-gray-200 font-medium tracking-wide">ayu_264</span>
  <div className="text-xs text-gray-500">
    Joined March 2024
  </div>
</div>



      <div className=" text-xl sm:text-6xl font-bold">
        {/* {props[1]} */}
        <CountUp end={props[1]} duration={1} separator=""/>
        </div>  
      
    </div>
  );
};

export default Ques_card;
