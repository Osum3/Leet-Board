const Rating_card=(prop)=>{
    // console.log(prop.data[0])
    return (
        <div className="w-[282px] border-2 border-black m-5 flex flex-col items-center p-2">
                <div className="flex flex-row-reverse  items-center w-full"> 
                    <div className="text-[18px] font-medium pl-1">{prop.data[0]}</div>
                    <div className=' bg-green-600 h-[10px] w-[10px] rounded-full'></div>
            
                </div>
               <div className="">
                    {/* total attended */}
                    <div className="text-[24px] ">Total Contest</div>
                    <div className=" text-[64px] font-semibold flex justify-center">{prop.data[1]}</div>
                </div>


                <div className="">
                    {/* currnet rating */}
                <div className="flex flex-row-reverse  items-center"> 
                    {/* <div className="text-[16px] ">Ayu_264</div> */}
                    {/* <div className=' bg-green-600 h-[8px] w-[8px] rounded-full'></div> */}
            
                </div>
                    <div className="text-[24px] ">Current Rating</div>
                    <div className="text-[64px] font-semibold flex justify-center">{prop.data[2]}</div>
                </div>

                <div className="">
                    {/* Max rating */}
                <div className="flex flex-row-reverse  items-center"> 
                    {/* <div className="text-[16px] ">Ayu_264</div> */}
                    {/* <div className=' bg-green-600 h-[8px] w-[8px] rounded-full'></div> */}
            
                </div>
                    <div className="text-[24px] ">Max Rating</div>
                    <div className="text-[64px] font-semibold flex justify-center">{prop.data[3]}</div>
                </div>

        </div>
    )
}
export default Rating_card;