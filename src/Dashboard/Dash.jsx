import { useEffect, useState } from 'react'
// import Componenet from '../components/chart-bar-multiple'
import Ques_card from '../components/Top/q_no_card';
import Active_days from '../components/Top/Activedays';
import ContestRatingsChart from '../components/Top/Rating_Graph';
import Rating_card from '../components/Mid/Card';
import Heatmap from './heatmap';
import Navbar from '../components/Top/Navbar'
import Componenet from '../components/chart-bar-multiple';
import ProblemSolvingChart from '../components/bottom/piechart';
function convert(d){
const timestamp = d;
const date = new Date(timestamp * 1000); // Convert to milliseconds

const day = date.getDate();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();

return( `${day} ${month} ${year}`);
}




const Dash=({UserA})=>{
  const [active,setactive]=useState([]);
  const [constdata,setconstdata]=useState([]);
    const[cnt,setCounts]=useState(null);
    const[diff,setDiff]=useState([]);
    const[ranking,setranking]=useState([]);
    const[const_att,setconst_att]=useState([]); //userA :count //userB:count
    const[max_rating,setmax_rating]=useState([]);// UserA:maxrating // UserB:maxrating
    const[curr_rating,setcurr_rating]=useState([]);// UserA:maxrating // UserB:maxrating
    const [map1,setmap1]=useState([]);
    const [map2,setmap2]=useState([]);
    const [a_sub,seta_sub]=useState(0)
    const [b_sub,setb_sub]=useState(0)
    const[question,setquestion]=useState();
    const[a_topic_wise,a_updatetopic_wise]=useState([]);
    const[b_topic_wise,b_updatetopic_wise]=useState([]);
    const[heatmap_info,setheatmap_info]=useState([['-','-','-'],['-','-','-']]);


    useEffect( ()=>{
      let checkmap1=1;
      let checkmap2=2;
      let t=[];
        async function fetchCounts() {
      const results = await Promise.all(
        UserA.map(async (username) => {
          try {
            const res = await fetch('http://localhost:5000/qcount', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username }),
            });
            const data = await res.json();
            const questionStats = data.data.userProfileUserQuestionProgressV2.numAcceptedQuestions;
            let temp=[];
            for(let i=0;i<3;i++){
              temp.push(questionStats[i].count);
            }
            t.push(temp);
            const total = questionStats.reduce((acc, cur) => acc + cur.count, 0);
            return [username,total,temp];
          } catch (err) {
            console.error(err);
            // return 0; 
          }
        })
      );
      setCounts(results);
    }
    fetchCounts();
    // setDiff(t)


      async function calendar() {
      const result = await Promise.all(
        UserA.map(async (username,idx) => {
          try {
            const res = await fetch('http://localhost:5000/usercalender', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username }),
            });
            const data = await res.json();
            const info=JSON.parse(data.data.matchedUser.userCalendar.submissionCalendar)
            const d = Object.entries(info).map(([timestamp, count]) => ({    // smjh nhi aaya
  date: new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0],
  count: count
}));
// console.log(username)
const totalSubmissions = d.reduce((acc, day) => acc + day.count, 0);
if (idx === 0) {
          // console.log(totalSubmissions);
          
          setmap1(d);
          seta_sub(totalSubmissions);
          setheatmap_info(prev => {
    const newState = [...prev]; // Create copy
    newState[0] = [totalSubmissions, newState[0][1], newState[0][2]]; // Keep other values
    return newState;
  })
        } else if (idx === 1) {
          setmap2(d);
          setb_sub(totalSubmissions);
          setheatmap_info(prev => {
    const newState = [...prev]; // Create copy
    newState[1] = [totalSubmissions, newState[1][1], newState[1][2]]; // Keep other values
    return newState;
  })
        }
            
            return (data.data.matchedUser.userCalendar.totalActiveDays);
           
            
          } catch (err) {
            // console.log(err);
            return 0; 
          }
        })
      );

      setactive(result);
      // setCounts(result);
    }
    calendar();

    async function contestrating(){
      const result=await Promise.all(
        UserA.map(async(username)=>{

          try{
            const data=await fetch('http://localhost:5000/qrating',{
            method:'POST',
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({ username })
            });
            const d= await data.json();
            // console.log(d)
            return d;
          }
          catch(err){
            return 0;
          }
        })
      
      )
    const userA=result[0];
    const userB=result[1];
    const temp2count=[result[0].length,result[1].length];

      setconst_att(temp2count);
 
      
      let ans=[];
for(let i=0;i<userA.length;i++){
    let n=convert(userA[i][0]);
    let rating=null;
    let rank=null;
    let inn=0;
    for(let j=0;j<userB.length;j++){
        if(n==convert(userB[j][0])){
            rating=userB[j][2]
            rank=userB[j][3]
            userB[j].unshift('not')
            inn=1;
            break;
        }
    }
    if(inn){
        ans.push([n,[userA[i][1],Math.ceil(userA[i][2]),userA[i][3],Math.ceil(rating),rank]]);
    }
    else{
         ans.push([n,[userA[i][1],Math.ceil(userA[i][2]),userA[i][3],rating,rank]]);
    }
}

for(let i=0;i<userB.length;i++){
    if(userB[i][0]!='not'){
        ans.push([convert(userB[i][0]),[userB[i][1],null,null,Math.ceil(userB[i][2]),userB[i][3]]])
    }
}
ans.sort((a, b) => new Date(a[0]) - new Date(b[0]));

// ans.sort()
    const arr=[...ans];
    
    // console.log(ans);
// 'userA':{rating: ans[i][1][1],rank:ans[i][1][2]},
//         'userB':{rating: ans[i][1][3],rank:ans[i][1][4]}
let ua_max=0;
let ub_max=0;
let curr_a=0;
let curr_b=0;
    const contestData=[];
    for(let i=0;i<ans.length;i++){
      if(ans[i][1][1]!=null){
        curr_a=ans[i][1][1];
      }
      if(ans[i][1][3]!=null){
        curr_b=ans[i][1][3];
      }

      if(ans[i][1][1]>ua_max){
        ua_max=ans[i][1][1];
      }
      if(ans[i][1][3]>ub_max){
        ub_max=ans[i][1][3];
      }
      let obj={
        'title':ans[i][1][0],
        'date':ans[i][0],
         "userA_rating":ans[i][1][1],
        'userA_rank':ans[i][1][2],
        'userB_rating': ans[i][1][3],
        'userB_rank':ans[i][1][4],
        
      }
      contestData.push(obj);
    }
    setmax_rating([ua_max,ub_max]);
    setcurr_rating([curr_a,curr_b]);
    // console.log(contestData)
    setconstdata(contestData)
    // console.log("-----------------------------");
    // console.log(result[0],result[1]);
    
  }
  
  contestrating();




     async function topic_wise() {
      const results = await Promise.all(
        UserA.map(async (username) => {
          try {
            const res = await fetch('http://localhost:5000/Topic-Wise-Difficulty', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username }),
            });
            const data = await res.json();
            const raw=data.data.matchedUser.tagProblemCounts;
            // console.log(data)
            const allTags = [...raw.advanced, ...raw.intermediate, ...raw.fundamental];
            const topTags = allTags
  .sort((a, b) => b.problemsSolved - a.problemsSolved)
  .slice(0, 10);

// Step 3: Define some colors (extend if needed)
const colors = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8',
  '#82CA9D', '#FFC658', '#FF7C7C', '#A28CF2', '#FF69B4',
  '#A9A9A9', '#FFA07A', '#20B2AA', '#FFD700', '#6B8E23'
];
const topic = topTags.map((tag, i) => ({
  name: tag.tagName,
  value: tag.problemsSolved,
  color: colors[i % colors.length]
}));
if (username === UserA[0] && a_topic_wise.length === 0) {
  a_updatetopic_wise(topic);
    console.log(topic);
    console.log(UserA[0]);;

} else if (username === UserA[1] && b_topic_wise.length === 0) {
  b_updatetopic_wise(topic);
    console.log(UserA[1]);;

  console.log(topic);

}
          } catch (err) {
            console.error(err);
            // return 0; 
          }
        })
      );
    }
    topic_wise()




  async function getLeetCodeStats() {
    const results=await Promise.all(UserA.map(async (username)=>{

      try {
        const response = await fetch('http://localhost:5000/leetcode-stats', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ username })
   });

   const data = await response.json();
   if(username==UserA[0]){
    // setb_sub(totalSubmissions);
    //       let temp=heatmap_info[0];
    //       // console.log(heatmap_info);
    //       temp[1]=data.acceptanceRate;
    //       temp[2]=data.maxStreak;
    //       setheatmap_info(temp);
     setheatmap_info(prev => {
    const newState = [...prev];
    newState[0] = [newState[0][0], data.acceptanceRate, data.maxStreak];
    return newState;
  })
          
        }
        if(username==UserA[1]){
           setheatmap_info(prev => {
    const newState = [...prev];
    newState[1] = [newState[1][0], data.acceptanceRate, data.maxStreak];
    return newState;
  })
   }
  //  console.log(data.totalSubmissions,data.acceptanceRate,data.maxStreak)
 } catch (error) {
   console.error('Error fetching LeetCode stats:', error);
  
  }
}))  
}
getLeetCodeStats();

}


     ,[])

     
     return (
       <div className='bg-[#050010] text-white pt-4  h-full'>
         
         {/* // top */}
         <div
           id="top"
           className="  ml-4 mr-4 flex flex-col justify-center md:flex-row justify-center md:ml-[120px] md:mr-[120px] md:gap-4 "
         >
           <div className=" w-full md:w-1/2 max-w-[576px] ">
             <div className=" flex md:gap-4 ">
               {cnt != null ? <Ques_card props={cnt[0]} /> : ""}
               {cnt != null ? <Ques_card props={cnt[1]} /> : ""}
             </div>
             <div className="  flex md:gap-4 ">
               <Active_days props={active[0]} />
               <Active_days props={active[1]} />
             </div>
           </div>
           <div className=" w-full md:max-w-[576px] p-4 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300">
             {cnt != null ? (
               <Componenet
                 d={[
                   [cnt[0][0], cnt[1][0]],
                   [cnt[0][2], cnt[1][2]],
                 ]}
               />
             ) : (
               ""
             )}
           </div>
         </div>

         <div
           id="middle"
           className=" flex flex-col sm:flex-row md:w-full justify-center gap-4 mt-4"
         >
           <div className="w-full md:w-[580px] rounded-xl 
              bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300
         hover:brightness-110">
             {constdata.length === 0 ? null : (
               <ContestRatingsChart info={[constdata, UserA]} />
             )}
           </div>

           <div className=" flex gap-4 sm:flex-row">
             <Rating_card
               data={[UserA[0], const_att[0], curr_rating[0], max_rating[0]]}
             />
             <Rating_card
               data={[UserA[1], const_att[1], curr_rating[1], max_rating[1]]}
             />
           </div>
         </div>
        

         
         <div  id="bottom" className="   mt-4 md:flex md:justify-center md:ml-[120px] md:mr-[120px]  md:gap-4 ">
                            <div className="  md:w-[580px]    
                                bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300
         hover:brightness-110 p-4
         ">
                                <div className='w-full 
                             
                                '>

                                   <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-orange-900/50  px-4 py-2 rounded-lg border border-purple-500/30 backdrop-blur-sm">
  <span className="font-bold text-white tracking-wide">{UserA[0]}</span>
  {/* <div className="text-xs text-gray-400 font-mono">#001</div> */}
</div>

                                    {map1.length > 0 && a_sub != 0 ? <Heatmap inf={map1} /> : ""}

                                </div>
                              {a_sub != 0 ? (<div className="flex   justify-evenly text-[24px] ">
                                   
                                    <div className='text-center'>
                                        {/* {console.log(heatmap_info[0])} */}

                                          <div className='text-xl opacity-80 '>Total Submission </div>
                                          <div className='text-3xl font-semibold'>{heatmap_info[0][0]}</div> 
                                      </div>
                                    
                                    <div className='text-center   '>
                                        <div className='text-xl opacity-80 '>Acceptance Rate </div>
                                       <div className='text-3xl font-semibold'>{heatmap_info[0][1]}</div> 
                                    </div>

                                    <div className='text-center   '>
                                        <div className='text-xl opacity-80 '>Max Streak </div>
                                        <div className='text-3xl font-semibold'>{heatmap_info[0][2]}</div> 
                                    </div>
                                  
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                              <div className="  md:w-[580px]  
                                  bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300
         hover:brightness-110  p-4
          ">
                                <div className='w-full '>

                                <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-orange-900/50 px-4 py-2 rounded-lg border border-purple-500/30 backdrop-blur-sm">
  <span className="font-bold text-white tracking-wide">{UserA[1]}</span>
  {/* <div className="text-xs text-gray-400 font-mono">#001</div> */}
</div>
                              {map2.length > 0 && b_sub != 0 ? <Heatmap inf={map2} /> : ""}
                                </div>
                              {b_sub != 0  ? (
                                <div className="flex  justify-evenly text-[24px] ">
         
                                   
                                    <div className='text-center  '>
                                        <div    className='text-xl opacity-80 '   >Total Submission </div>
                                      <div    className='text-3xl font-semibold'    >{heatmap_info[1][0]}</div> 
                                      </div>
                                    
                                    <div className='text-center '>
                                        <div   className='text-xl opacity-80 '   >Acceptance Rate </div>
                                      <div className='text-3xl font-semibold' >{heatmap_info[1][1]}</div> 
                                      </div>

                                      <div className='text-center '>
                                        <div className='text-xl opacity-80 '  >Max Streak </div>
                                      <div  className='text-3xl font-semibold'>{heatmap_info[1][2]}</div> 
                                      </div>
                                  
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                    
         </div>





          <div className="flex-row justify-center  md:flex mt-4 mb-4">
            <div 
            // className='md:w-[580px] '
            >

           <ProblemSolvingChart dataa={a_topic_wise} />
            </div>
            <div 
            // className='md:w-[580px]
            //  '
             >

           <ProblemSolvingChart dataa={b_topic_wise}/>
            </div>
         </div> 
         {/* <div className='bg-black'>
          footer
         </div> */}
       </div>
     );
     
    
    
}
export default Dash;