import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Componenet = ({d} ) => {
  // console.log(d)
  let User=d[0];
  let data=d[1];
  // console.log(d)

  const chartData = [
    {
      difficulty: 'Easy',
      [User[0]]: data[0][0],
      [User[1]]: data[1][0],
    },
    {
      difficulty: 'Medium',
      [User[0]]: data[0][1],
      [User[1]]: data[1][1],
    },
    {
      difficulty: 'Hard',
      [User[0]]: data[0][2],
      [User[1]]: data[1][2],
    }
  ];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length >= 2) {
    return (
      <div className="bg-[#1e1e2f] text-white p-3 rounded-lg shadow-lg border border-white/20">
        <p className="text-xl font-bold mb-2">{label}</p>

        <div className="text-lg font-semibold text-white" >
          {payload[0].name} : {payload[0].value}
        </div>

        <div className="text-lg font-semibold text-white" >
          {payload[1].name} : {payload[1].value}
        </div>
      </div>
    );
  }
  return null;
};


  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} >
        <XAxis dataKey="difficulty" />
        <YAxis />
         <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey={User[0]} fill="	#8F43EE" />
        <Bar dataKey={User[1]} fill="	#FF9F1C" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Componenet;
