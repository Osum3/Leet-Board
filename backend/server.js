import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import axios from "axios";

dotenv.config();

const app = express();
const PORT=process.env.PORT || 5000;


// app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(cors());
app.use(express.json());

//// to verify that a user exist or not





const targetUrl=process.env.TARGET_URL ;

app.get("/", (req,res)=> {
  req.status(200).send("hello its working");
})

app.post("/verify", async (req, res) => {
  try {
    // console.log("req.body = ", req.body);

    const { username } = req.body;

   

    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operationName: "matchedUser",
        variables: {
          usernam: username,
        },
        query: `
        query matchedUser($usernam: String!) {
          matchedUser(username: $usernam) {
            username
          }
        }
      `,
      }),
    });
    const data = await response.json();
    console.log(` fetched LeetCode data for user: `);
    // console.log(data);

    if (data.data.matchedUser) {
      res.json({ found: true });
    } else {
      res.json({ found: false });
    }
  } catch (error) {
    res.json({ found: 1 });
  }
});

app.post("/usercalender", async (req, res) => {
  const { username } = req.body;
  console.log(username)
  try {
    const data = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        operationName: "userProfileCalendar",
        variables: {
          usernam: username,
          
        },
        query: `
    query userProfileCalendar($usernam: String!, $year: Int) {
  matchedUser(username: $usernam) {
    userCalendar(year: $year) {
      activeYears
      streak
      totalActiveDays
      submissionCalendar
    }
  }
}
    `,
      }),
    });
    const val=await data.json()
    // console.log(val);
     res.json(val); 
    // res(d); 
  }
   catch (err) {
    // console.log(err)
    res.json(err)
  }
});


// question count;
app.post("/qcount", async (req, res) => {
  const { username } = req.body;
  // console.log(req.body);
  try {
    const data = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        operationName: "userProfileUserQuestionProgressV2",
        variables: {
          user: username,
        },
        query: `
        query userProfileUserQuestionProgressV2($user: String!) {
            userProfileUserQuestionProgressV2(userSlug: $user) {
                numAcceptedQuestions {
                    count
                    difficulty
                }
            }
        }`,
      })
    });
  const val=await data.json();
  res.json(val); 
  

  } 
  catch (err) {
    res.json(err);
  }
});


// last 10 submitted questions
// app.post('/app',async(req,res)=>{
//   const {username}=req.body
//   try{
//     const data=await fetch('https://leetcode.com/graphql',{
//       method:'POST',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         operationName:'recentAcSubmissions',
//         variables:{
//           user:username,
//           limit:30
//         },
//         query:
//         `query recentAcSubmissions($user: String!, $limit: Int!) {
//       recentAcSubmissionList(username: $user, limit: $limit) {
//         title
//         }
//     }`
//       })



//     })
//     const d=await data.json();
//     // console.log("herrrr")
//     res.json(d)
//   }
//   catch(err){
//     res.json(err);
//   }
// })


// constest rating

function convert(d){
const timestamp = d;
const date = new Date(timestamp * 1000); // Convert to milliseconds

const day = date.getDate();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();

return( `${day} ${month} ${year}`);
}


app.post('/qrating',async(req,res)=>{
  const {username}=req.body;
  try{
      const data=await fetch( targetUrl, {
        method:'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          operationName:'userContestRankingInfo',
          variables:{
            user:username
          },
          query :
          `
query userContestRankingInfo($user: String!) {
  userContestRanking(username: $user) {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
    badge {
      name
    }
  }
  userContestRankingHistory(username: $user) {
    attended
    trendDirection
    problemsSolved
    totalProblems
    finishTimeInSeconds
    rating
    ranking
    contest {
      title
      startTime
    }
  }
}
    `
          
        })
      })
      const d=await data.json();
      // console.log(d.data.userContestRanking);
                let vec=(d.data.userContestRankingHistory);
                let count=0;
                let contest=[];
                vec.map((e)=>{
                    if(e.attended==true){
                      let a=[e.contest.startTime,e.contest.title,e.rating,e.ranking]
                        contest.push(a);
                    }
                })
                // console.log("helllll")
                // console.log(contest)
      res.json(contest)
  }
  catch(err){
    console.log(err);
    res.json(err)

  }
})


// topic wise difficult

app.post("/Topic-Wise-Difficulty", async (req, res) => {
  try {
    // console.log("req.body = ", req.body);

    const { username } = req.body;

   
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operationName: "skillStats",
        variables: {
          usernam: username,
        },
        query: `
        query skillStats($usernam: String!) {
            matchedUser(username: $usernam) {
              tagProblemCounts {
                advanced {
                  tagName
                  tagSlug
                  problemsSolved
                }
                intermediate {
                  tagName
                  tagSlug
                  problemsSolved
                }
                fundamental {
                  tagName
                  tagSlug
                  problemsSolved
                }
              }
            }
          }

    
      `,
      }),
    });
    const data = await response.json();
    // console.log(` fetched LeetCode data for user: `);
    // console.log(data);

      res.json(data);
  } catch (error) {
    res.json(error);
  }
});


app.post("/leetcode-stats", async (req, res) => {
 const { username } = req.body;
 
 try {
   const response = await fetch(targetUrl, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       query: `
         query getUserStats($username: String!) {
           matchedUser(username: $username) {
             submitStats {
               acSubmissionNum {
                 submissions
               }
               totalSubmissionNum {
                 submissions
               }
             }
             userCalendar {
               streak
             }
           }
         }
       `,
       variables: { username }
     })
   });

   const data = await response.json();
   
   if (!data.data?.matchedUser) {
     return res.json({
       totalSubmissions: "-",
       acceptanceRate: "-", 
       maxStreak: "-"
     });
   }

   const user = data.data.matchedUser;
   console.log(user.submitStats)
   // Calculate totals
   const totalSubmissions = user.submitStats?.totalSubmissionNum
     ?.reduce((sum, item) => sum + (item.submissions || 0), 0) || "-";
   
   const totalAccepted = user.submitStats?.acSubmissionNum
     ?.reduce((sum, item) => sum + (item.submissions || 0), 0) || 0;
   
   const acceptanceRate = totalSubmissions !== "-" && totalSubmissions > 0 
     ? ((totalAccepted / totalSubmissions) * 100).toFixed(2) + "%" 
     : "-";
   
   const maxStreak = user.userCalendar?.streak || "-";

   res.json({
     totalSubmissions,
     acceptanceRate,
     maxStreak
   });

 } catch (err) {
   res.json({
     totalSubmissions: "-",
     acceptanceRate: "-",
     maxStreak: "-"
   });
 }
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test endpoint available at: http://localhost:${PORT}/app`);
});

