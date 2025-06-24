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
  <div className="w-full max-w-full overflow-x-auto h-[300px] sm:h-[450px]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ right: 30 }}
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
  </div>
);

};




export default ContestRatingsChart;