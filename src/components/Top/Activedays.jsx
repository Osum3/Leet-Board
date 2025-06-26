
import CountUp from "react-countup";

const Active_days=({props})=>{
   return (
    <div className='w-full  md:max-w-[288px] md:mt-4 p-6 border-2 border-black   flex    flex-col    justify-center
    items-center rounded-xl
     bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
        hover:scale-105 hover:brightness-110
 '>
      
      <div className=" text-[10px] sm:text-lg opacity-80 ">Total Active Days</div>  
      <div className="text-xl sm:text-6xl font-bold">
        {/* {props} */}
        <CountUp end={props} duration={1} separator=""/>
        </div>  
      
    </div>
  );
}
export default Active_days;