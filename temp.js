
{query:
        `query userProfileUserQuestionProgressV2($userSlug: String!) {
            userProfileUserQuestionProgressV2(userSlug: $userSlug) {
                numAcceptedQuestions {
                    count
                    difficulty
                }
            }
        }`
        }
            numFailedQuestions {
              count
              difficulty
            }
            numUntouchedQuestions {
              count
              difficulty
            }
            userSessionBeatsPercentage {
              difficulty
              percentage
            }
            totalQuestionBeatsPercentage
            
            // ","variables":{"userSlug":"ayu_264"},"operationName":"userProfileUserQuestionProgressV2"}
            




           async function getLeetCodeContestData() {
  try {
    const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
const targetUrl = "https://leetcode.com/graphql";
    const res = await fetch(proxyUrl+targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operationName: "userContestRankingInfo",
        variables: {
          username: input1
        },
        query: `
          query userContestRankingInfo($username: String!) {
            userContestRanking(username: $username) {
              attendedContestsCount
              rating
              globalRanking
              totalParticipants
              topPercentage
              badge {
                name
              }
            }
            userContestRankingHistory(username: $username) {
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
      }),
    });

    const data = await res.json();
    console.log(data);
    alert("data found")

  } catch (err) {
    alert("not found",err)
  }
}

app.post('/app', async (req, res) => {
  try {
    console.log("req.body = ", req.body);
    // const { username } = req.body;
    //  console.log("tryingggggg",username)
    // console.log(username)
    const {username} = req.body; // Hardcoded username for testing
    console.log(username)
    
    const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
    const targetUrl = "https://leetcode.com/graphql";
    
    const response = await fetch( targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operationName: "userProfileUserQuestionProgressV2",
        variables: {
          userSlug: username
        },
        
      }
      
    ),
    });

    const data = await response.json();
    const accp=data.userProfileUserQuestionProgressV2.numAcceptedQuestions
    console.log(` fetched LeetCode data for user: ayu_264`);
    // console.log(data);
    
    // Send the data back to client
    res.json(accp);
  } catch (error) {
    // console.error('Error fetching data from LeetCode:', error);
    res.status(500).json({ 
      error: 'Failed to fetch data from LeetCode',
      message: error.message
    });
  }
});



heatmap
{
    "query": "\n    query userProfileCalendar($username: String!, $year: Int) {\n  matchedUser(username: $username) {\n    userCalendar(year: $year) {\n      activeYears\n      streak\n      totalActiveDays\n      dccBadges {\n        timestamp\n        badge {\n          name\n          icon\n        }\n      }\n      submissionCalendar\n    }\n  }\n}\n    ",
    "variables": {
        "username": "ayu_264"
    },
    "operationName": "userProfileCalendar"
}

{query:
        query recentAcSubmissions($username: String!, $limit: Int!) {
      recentAcSubmissionList(username: $username, limit: $limit) {
        id
        title
        titleSlug
        timestamp
      }
    }
        ","variables":{"username":"ayu_264","limit":15},"operationName":"recentAcSubmissions
        }