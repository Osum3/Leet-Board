const Active_days=({props})=>{
   return (
    <div className='w-[282px] h-[148px] border-2 border-black
    flex
    flex-col
    justify-center
    items-center
    '>
      
      <div className="text-2xl font-medium">Total Active Days</div>  
      <div className="text-6xl font-medium">{props}</div>  
      
    </div>
  );
}
export default Active_days;