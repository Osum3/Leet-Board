

import react, { useEffect } from "react";


const Nav=({setview,View})=>{
    function viewreverse(){
            setview(0);
            //  {console.log(View)}
    }
    
    
//     useEffect(() => {
//     console.log("Current View:", View);
//   }, [View]);

 
    return(
                    <div className="  bg-gray-900 w-full     h-[64px]
                       
                        flex justify-center
                        items-center
                       text-white 
                                         ">
                      {/* Leetboard */}
                      <div className=" flex max-w-[1152px] justify-between w-full  ">
                        
                       <div className="   text-3xl  font-bold">LeetBoard</div>

                     

                       {/* {console.log(View)} */}



                       {(View===0)? null : <button
  onClick={viewreverse} 
  className="relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-orange-900/50  px-4 py-2 rounded-lg border border-purple-500/30 backdrop-blur-sm"
>
  <div className="font-bold text-white tracking-wide">RESET</div>
</button>





}
                      
                      </div>
                    </div>
                )
}

export default Nav; 