import React from "react";

const Ques_card = ({props}) => {
  return (
    <div className='w-[282px] h-[148px] border-2 border-black
    flex
    flex-col
    justify-center
    items-center
    '>
      
      <div className="text-2xl font-medium">{props[0]}</div>  
      <div className="text-6xl font-medium">{props[1]}</div>  
      
    </div>
  );
};

export default Ques_card;
