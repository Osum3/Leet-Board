const Active_days=({props})=>{
   return (
    <div className='w-full  md:max-w-[288px] md:mt-4 p-6 border-2 border-black   flex    flex-col    justify-center
    items-center
    '>
      
      <div className=" text-[10px] sm:text-2xl font-medium">Total Active Days</div>  
      <div className="text-xl sm:text-6xl font-medium">{props}</div>  
      
    </div>
  );
}
export default Active_days;