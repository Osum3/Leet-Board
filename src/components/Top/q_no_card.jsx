import React from "react";

const Ques_card = ({props}) => {
  return (
    <div className=' w-full p-4 md: max-w-[288px] md:p-6 border-2 border-black   flex    flex-col    justify-center
    items-center
    '>
      
      <div className=" text-xs sm:text-2xl font-medium">{props[0]}</div>  
      <div className=" text-xl sm:text-6xl font-medium">{props[1]}</div>  
      
    </div>
  );
};

export default Ques_card;
