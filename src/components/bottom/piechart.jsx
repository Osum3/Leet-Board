import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ProblemSolvingChart = ({dataa}) => {
  // console.log(dataa)
  // console.log("herehrehrhehr")
  const data = dataa;

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className=" bg-blue-100 w-[580px] ">
      <div className="text-center ">
        <h2 className="text-2xl font-bold text-gray-800">Problems Solved by Topic</h2>       
      </div>
      
      <ResponsiveContainer width={580} height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value, percent }) => `${name}: ${value}  `}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>


    </div>
  );
};

export default ProblemSolvingChart;