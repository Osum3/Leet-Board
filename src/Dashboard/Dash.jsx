import { useEffect, useState } from 'react'
// import Componenet from '../components/chart-bar-multiple'
import Ques_card from '../components/Top/q_no_card';
import Active_days from '../components/Top/Activedays';
import ContestRatingsChart from '../components/Top/Rating_Graph';
import Rating_card from '../components/Mid/Card';
import Heatmap from './heatmap';
import Navbar from '../components/Top/Navbar'
import Componenet from '../components/chart-bar-multiple';
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
          setmap1(d);
          seta_sub(totalSubmissions);
        } else if (idx === 1) {
          setmap2(d);
          setb_sub(totalSubmissions);
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
  // console.log(UserA,diff)
  // const parsedInf = JSON.parse(map1);
 
// setmap1(data)
}


     ,[])

     
     return (
      <div>
        <Navbar/>
{/* // top */}
        <div id='top' className='ml-[120px] m-[120px]  mt-10 flex flex-row justify-center'>
            <div>
                <div className='flex flex-row '>
                      {(cnt!=null)?<Ques_card props={cnt[0]}/> : ''}
                      {(cnt!=null)?<Ques_card props={cnt[1]}/> : ''}
                  </div>
                  <div  className='  flex flex-row mt-[21px]'>
                        <Active_days props={active[0]}/>
                        <Active_days props={active[1]}/>
                  </div>
            </div>
                  <div className='  w-[588px] h-[319px] border-2 border-black
                  
                  '>        
                            {

                            (cnt!=null)?<Componenet d={[[cnt[0][0],cnt[1][0]],[cnt[0][2],cnt[1][2]]]}/>:''
                            } 
                  </div>    
          </div>
    
    
                    <div id='middle' className=' mt-[24px] ml-[120px] mr-[120px] flex  flex-row justify-center'>
                  <div  className='w-[580px]   '>
                {constdata.length === 0 ? null : <ContestRatingsChart info={[constdata,UserA]} />}
          
                   </div>
                   
               <Rating_card data={[UserA[0],const_att[0],curr_rating[0],max_rating[0]]}/>
               <Rating_card data={[UserA[1],const_att[1],curr_rating[1],max_rating[1]]}/>
                </div>
          
            {/* bottom */}
           <div className='mt-[120px] ml-[120px] mr-[120px] flex flex-col  pl-40 pr-40'>
           
           <div className='w-full  flex flex-col justify-between mb-24 '>
            {(a_sub!=0)? <div className='flex justify-between'>

            <div className=' text-[32px] weight-semibold'>
              {UserA[0]}
            </div>
            <div className='  text-[32px] weight-semibold'>
              Total Submission : {a_sub}
            </div> 
            </div>: ''}
            
            
             {(map1.length>0 &&  a_sub!=0)? <Heatmap inf={map1} />:''}
           </div>

                             <div className='w-full  flex flex-col justify-between '>

                              {(b_sub!=0)? 
            <div className='flex justify-between'>

            <div className=' text-[32px] weight-semibold'>
              {UserA[1]}
            </div>
            <div className='  text-[32px] weight-semibold'>
              Total Submission : {b_sub}
            </div> 
            </div>
              : ''}
            
             {(map2.length>0 && b_sub!=0)? <Heatmap inf={map2} />:''}
           </div>


          
           
          </div>
      </div>
    
    

  

   
    )
     
    
    
}
export default Dash;