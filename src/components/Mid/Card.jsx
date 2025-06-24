const Rating_card = (prop) => {
    return (
        <div className="w-full md:w-[282px] border-2 border-black flex flex-col items-center p-2 ">
           
            {/* Header with name and status dot */}
            <div className="flex flex-row-reverse items-center w-full "> 
                <div className="text-[18px] font-medium pl-1">{prop.data[0]}</div>
                <div className='bg-green-600 h-[10px] w-[10px] rounded-full'></div>
            </div>
            
           
            <div className="flex flex-row md:flex-col w-full justify-between md:justify-center  ">
                
                <div className="flex-1 md:flex-none text-center">
                    <div className="text-[16px] md:text-[24px]">Total Contest</div>
                    <div className="text-[32px] md:text-[64px] font-semibold">{prop.data[1]}</div>
                </div> 

                <div className="flex-1 md:flex-none text-center">
                    <div className="text-[16px] md:text-[24px]">Current Rating</div>
                    <div className="text-[32px] md:text-[64px] font-semibold">{prop.data[2]}</div>
                </div>

                <div className="flex-1 md:flex-none text-center">
                    <div className="text-[16px] md:text-[24px]">Max Rating</div>
                    <div className="text-[32px] md:text-[64px] font-semibold">{prop.data[3]}</div>
                </div>
                
            </div>

        </div>
    )
}

export default Rating_card;

// const Rating_card = (prop) => {
//     return (
//         <div className="w-full md:w-[282px] border-2 border-black m-5 flex flex-row items-center p-2">
//             <div className="flex flex-col md:flex-col items-center w-full">
                
//                 {/* Header with name and status dot */}
//                 <div className="flex flex-row-reverse items-center w-full mb-2 md:mb-4"> 
//                     <div className="text-[18px] font-medium pl-1">{prop.data[0]}</div>
//                     <div className='bg-green-600 h-[10px] w-[10px] rounded-full'></div>
//                 </div>
               
//                 {/* Stats container - horizontal on mobile, vertical on desktop */}
//                 <div className="flex flex-row md:flex-col w-full justify-between md:justify-center gap-2 md:gap-4">
//                     {/* Total Contest */}
//                     <div className="flex-1 md:flex-none text-center">
//                         <div className="text-[16px] md:text-[24px]">Total Contest</div>
//                         <div className="text-[32px] md:text-[64px] font-semibold">{prop.data[1]}</div>
//                     </div> 

//                     {/* Current Rating */}
//                     <div className="flex-1 md:flex-none text-center">
//                         <div className="text-[16px] md:text-[24px]">Current Rating</div>
//                         <div className="text-[32px] md:text-[64px] font-semibold">{prop.data[2]}</div>
//                     </div>
                    
//                     {/* Max Rating */}
//                     <div className="flex-1 md:flex-none text-center">
//                         <div className="text-[16px] md:text-[24px]">Max Rating</div>
//                         <div className="text-[32px] md:text-[64px] font-semibold">{prop.data[3]}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Rating_card;