import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Componenet = ({d} ) => {
  // console.log(d)
  let User=d[0];
  let data=d[1];
  // console.log(User,data)

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
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} >
        <XAxis dataKey="difficulty" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={User[0]} fill="#8884d8" />
        <Bar dataKey={User[1]} fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Componenet;
