import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ContestRatingsChart = (d) => {


const data=(d.info[0])
const user=(d.info[1])
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const contestData = data.find(d => d.title === label);
      if (!contestData) return null;
      return (
        <div className="bg-[#1e1e2f] text-white p-3 rounded-lg shadow-lg border border-white/20">
          <p className="font-semibold text-gray-200 mb-2">{contestData.title}</p>
          <p className="text-sm text-gray-200 mb-3">{contestData.date}</p>
          
          <div className="space-y-2">
            <div className="border-b pb-2">
              <p className="font-medium text-[#8F43EE]">{user[0]}</p>
              {contestData.userA_rating ? (
                <>
                  <p className="text-base text-gray-100">Rating: {contestData.userA_rating.toFixed(2)}</p>
                  <p className="text-base  text-gray-100">Rank: {contestData.userA_rank.toLocaleString()}</p>
                </>
              ) : (
                <p className="text-sm text-gray-400">Did not participate</p>
              )}
            </div>
            
            <div>
              <p className="font-medium text-[#FF9F1C]">{user[1]}</p>
              {contestData.userB_rating ? (
                <>
                  <p className="text-base text-gray-100">Rating: {contestData.userB_rating.toFixed(2)}</p>
                  <p className="text-base text-gray-100">Rank: {contestData.userB_rank.toLocaleString()}</p>
                </>
              ) : (
                <p className="text-sm text-gray-400">Did not participate</p>
              )}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
  <div className="w-full max-w-full overflow-x-auto h-[300px] sm:h-[450px]
  ">
    <ResponsiveContainer width="96%" height="96%">
      <LineChart
        data={data}
        margin={{ right: 30 }}

        
      >
        <CartesianGrid stroke="#444" strokeDasharray="3 3" />
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
        {/* <Legend /> */}
        <Line
          type="monotone"
          dataKey="userA_rating"
          stroke="	#FF9F1C"
          strokeWidth={5}
          dot={{ fill: '	#FF9F1C', strokeWidth: 2, r: 5 }}
          name={user[0]}
          connectNulls={true}
        />
        <Line
          type="monotone"
          dataKey="userB_rating"
          stroke="#8F43EE"
          strokeWidth={5}
          dot={{ fill: '#8F43EE', strokeWidth: 2, r: 5 }}
          name={user[1]}
          connectNulls={true}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

};




export default ContestRatingsChart;