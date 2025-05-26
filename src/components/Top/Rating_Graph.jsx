import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ContestRatingsChart = (d) => {
  // const data = [
  //   {
  //     "title": "Weekly Contest 414",
  //     "date": "8 September 2024",
  //     "userA_rating": 1438.685,
  //     "userA_rank": 21924,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Biweekly Contest 139",
  //     "date": "14 September 2024",
  //     "userA_rating": null,
  //     "userA_rank": null,
  //     "userB_rating": 1448.936,
  //     "userB_rank": 21501
  //   },
  //   {
  //     "title": "Weekly Contest 415",
  //     "date": "15 September 2024",
  //     "userA_rating": 1408.222,
  //     "userA_rank": 20914,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 416",
  //     "date": "22 September 2024",
  //     "userA_rating": 1416.753,
  //     "userA_rank": 15521,
  //     "userB_rating": 1415.04,
  //     "userB_rank": 21465
  //   },
  //   {
  //     "title": "Biweekly Contest 140",
  //     "date": "28 September 2024",
  //     "userA_rating": null,
  //     "userA_rank": null,
  //     "userB_rating": 1392.663,
  //     "userB_rank": 22052
  //   },
  //   {
  //     "title": "Biweekly Contest 141",
  //     "date": "12 October 2024",
  //     "userA_rating": 1419.96,
  //     "userA_rank": 12500,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 421",
  //     "date": "27 October 2024",
  //     "userA_rating": 1377.246,
  //     "userA_rank": 20474,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 424",
  //     "date": "17 November 2024",
  //     "userA_rating": 1381.685,
  //     "userA_rank": 11717,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 425",
  //     "date": "24 November 2024",
  //     "userA_rating": 1366.164,
  //     "userA_rank": 13536,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 426",
  //     "date": "1 December 2024",
  //     "userA_rating": 1386.069,
  //     "userA_rank": 8715,
  //     "userB_rating": 1374.657,
  //     "userB_rank": 13195
  //   },
  //   {
  //     "title": "Biweekly Contest 145",
  //     "date": "7 December 2024",
  //     "userA_rating": null,
  //     "userA_rank": null,
  //     "userB_rating": 1334.186,
  //     "userB_rank": 22358
  //   },
  //   {
  //     "title": "Weekly Contest 427",
  //     "date": "8 December 2024",
  //     "userA_rating": 1372.207,
  //     "userA_rank": 13112,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 429",
  //     "date": "22 December 2024",
  //     "userA_rating": 1355.004,
  //     "userA_rank": 14048,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 431",
  //     "date": "5 January 2025",
  //     "userA_rating": 1377.102,
  //     "userA_rank": 8620,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 432",
  //     "date": "12 January 2025",
  //     "userA_rating": 1393.264,
  //     "userA_rank": 10381,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Biweekly Contest 148",
  //     "date": "18 January 2025",
  //     "userA_rating": null,
  //     "userA_rank": null,
  //     "userB_rating": 1357.899,
  //     "userB_rank": 12993
  //   },
  //   {
  //     "title": "Weekly Contest 433",
  //     "date": "19 January 2025",
  //     "userA_rating": null,
  //     "userA_rank": null,
  //     "userB_rating": 1355.279,
  //     "userB_rank": 13809
  //   },
  //   {
  //     "title": "Weekly Contest 434",
  //     "date": "26 January 2025",
  //     "userA_rating": 1419.808,
  //     "userA_rank": 8827,
  //     "userB_rating": 1355.94,
  //     "userB_rank": 14495
  //   },
  //   {
  //     "title": "Biweekly Contest 149",
  //     "date": "1 February 2025",
  //     "userA_rating": 1470.518,
  //     "userA_rank": 5511,
  //     "userB_rating": 1410.018,
  //     "userB_rank": 6786
  //   },
  //   {
  //     "title": "Weekly Contest 435",
  //     "date": "2 February 2025",
  //     "userA_rating": 1477.131,
  //     "userA_rank": 10732,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 436",
  //     "date": "9 February 2025",
  //     "userA_rating": 1484.925,
  //     "userA_rank": 10497,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Biweekly Contest 150",
  //     "date": "15 February 2025",
  //     "userA_rating": null,
  //     "userA_rank": null,
  //     "userB_rating": 1421.745,
  //     "userB_rank": 14125
  //   },
  //   {
  //     "title": "Weekly Contest 437",
  //     "date": "16 February 2025",
  //     "userA_rating": null,
  //     "userA_rank": null,
  //     "userB_rating": 1458.828,
  //     "userB_rank": 7146
  //   },
  //   {
  //     "title": "Weekly Contest 438",
  //     "date": "23 February 2025",
  //     "userA_rating": 1502.884,
  //     "userA_rank": 9063,
  //     "userB_rating": 1454.81,
  //     "userB_rank": 14755
  //   },
  //   {
  //     "title": "Biweekly Contest 151",
  //     "date": "1 March 2025",
  //     "userA_rating": 1505.233,
  //     "userA_rank": 12194,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 439",
  //     "date": "2 March 2025",
  //     "userA_rating": 1519.211,
  //     "userA_rank": 8671,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 440",
  //     "date": "9 March 2025",
  //     "userA_rating": 1536.193,
  //     "userA_rank": 8157,
  //     "userB_rating": 1434.353,
  //     "userB_rank": 18507
  //   },
  //   {
  //     "title": "Biweekly Contest 152",

  //     "date": "15 March 2025",
  //     "userA_rating": null,
  //     "userA_rank": null,
  //     "userB_rating": 1459.912,
  //     "userB_rank": 8271
  //   },
  //   {
  //     "title": "Weekly Contest 441",
  //     "date": "16 March 2025",
  //     "userA_rating": 1536.91,
  //     "userA_rank": 10775,
  //     "userB_rating": 1505.196,
  //     "userB_rank": 4918
  //   },
  //   {
  //     "title": "Weekly Contest 442",
  //     "date": "23 March 2025",
  //     "userA_rating": 1523.38,
  //     "userA_rank": 15289,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Biweekly Contest 154",
  //     "date": "12 April 2025",
  //     "userA_rating": 1536.737,
  //     "userA_rank": 8125,
  //     "userB_rating": 1505.163,
  //     "userB_rank": 11178
  //   },
  //   {
  //     "title": "Weekly Contest 445",
  //     "date": "13 April 2025",
  //     "userA_rating": 1529.213,
  //     "userA_rank": 10939,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 446",
  //     "date": "20 April 2025",
  //     "userA_rating": 1530.62,
  //     "userA_rank": 9985,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Biweekly Contest 155",
  //     "date": "26 April 2025",
  //     "userA_rating": 1526.497,
  //     "userA_rank": 9480,
  //     "userB_rating": 1480.411,
  //     "userB_rank": 13747
  //   },
  //   {
  //     "title": "Weekly Contest 448",
  //     "date": "4 May 2025",
  //     "userA_rating": 1510.979,
  //     "userA_rank": 10432,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Biweekly Contest 156",
  //     "date": "10 May 2025",
  //     "userA_rating": 1536.786,
  //     "userA_rank": 4954,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   },
  //   {
  //     "title": "Weekly Contest 450",
  //     "date": "18 May 2025",
  //     "userA_rating": 1526.142,
  //     "userA_rank": 11831,
  //     "userB_rating": null,
  //     "userB_rank": null
  //   }
  // ];
// const data=constdata;

const data=(d.info[0])
const user=(d.info[1])
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const contestData = data.find(d => d.title === label);
      if (!contestData) return null;
      return (
        <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800 mb-2">{contestData.title}</p>
          <p className="text-sm text-gray-600 mb-3">{contestData.date}</p>
          
          <div className="space-y-2">
            <div className="border-b pb-2">
              <p className="font-medium text-blue-600">{user[0]}</p>
              {contestData.userA_rating ? (
                <>
                  <p className="text-sm">Rating: {contestData.userA_rating.toFixed(2)}</p>
                  <p className="text-sm">Rank: {contestData.userA_rank.toLocaleString()}</p>
                </>
              ) : (
                <p className="text-sm text-gray-500">Did not participate</p>
              )}
            </div>
            
            <div>
              <p className="font-medium text-red-600">{user[1]}</p>
              {contestData.userB_rating ? (
                <>
                  <p className="text-sm">Rating: {contestData.userB_rating.toFixed(2)}</p>
                  <p className="text-sm">Rank: {contestData.userB_rank.toLocaleString()}</p>
                </>
              ) : (
                <p className="text-sm text-gray-500">Did not participate</p>
              )}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full  ">
      {/* <div className="bg-white rounded-lg shadow-lg p-6 h-full"> */}
       
        
        <ResponsiveContainer  >
          <LineChart
            data={data}
            margin={{
              // top: 20,
              right: 30,
              // left: 20,
              // bottom: ,
            }}
          >
           
            <XAxis 
              dataKey="title"
              angle={-45}
              textAnchor="end"
              height={100}
              fontSize={12}
              stroke="#666"
            />
            <YAxis 
              domain={['dataMin - 50', 'dataMax + 50']}
              fontSize={12}
              stroke="#666"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="userA_rating"
              stroke="#2563eb"
              strokeWidth={5}
              dot={{ fill: '#2563eb', strokeWidth: 2, r: 5 }}
              name={user[0]}
              connectNulls={true}
            />
            <Line
              type="monotone"
              dataKey="userB_rating"
              stroke="#dc2626"
              strokeWidth={5}
              dot={{ fill: '#dc2626', strokeWidth: 2, r: 5 }}
              name={user[1]}
              connectNulls={true}
            />
          </LineChart>
        </ResponsiveContainer>
      {/* </div> */}
    </div>
  );
};




export default ContestRatingsChart;