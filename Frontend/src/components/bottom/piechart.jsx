import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ProblemSolvingChart = ({dataa,user}) => {
  // console.log(dataa)
  // console.log("herehrehrhehr")
  const data = dataa;

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className=" max-w-3xl mx-auto ">
      <div className=" ">
        <h2 className="relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-orange-900/50 px-4 py-2 rounded-lg border border-purple-500/30 backdrop-blur-sm font-bold text-white tracking-wide">{user}</h2>       
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center ">

      <ResponsiveContainer width={300} height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${value}`}
           outerRadius={100}
              innerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
              <div>
                {dataa.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className=" w-4 h-4 rounded-full mt-2"
                style={{ backgroundColor: entry.color }}
                ></div>
              <div className="text-sm md:text-sm opacity-80">
                {entry.name} ({entry.value})
              </div>
            </div>
          ))}
              </div>
                </div>

    </div>
  );
};

export default ProblemSolvingChart;