import React from "react";
import CountUp from "react-countup";


const Rating_card = ({ data }) => {
  return (
    <div
      className="w-full md:w-[282px] p-4 rounded-xl 
                bg-gradient-to-br from-gray-800/40 to-gray-900/30 border border-white/20 shadow-2xl
                 backdrop-blur-md shadow-xl 
                 hover:shadow-purple-500/40 transition-all duration-300 
                 flex flex-col gap-4 text-white"
    >
      {/* Header with name and status dot */}
      {/* <div className="flex items-center justify-start gap-2">
        <div className="h-[10px] w-[10px] rounded-full bg-red-500 animate-pulse"></div>
        <div className="text-lg font-semibold tracking-wide">{}</div>
      </div> */}
      <div>

      <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-orange-900/50  px-4 py-2 rounded-lg border border-purple-500/30 backdrop-blur-sm">
  <div className="font-bold text-white tracking-wide">{data[0]}</div>
  {/* <div className="text-xs text-gray-400 font-mono">#001</div> */}
      </div>
</div>

      {/* Stats Section */}
      <div className="flex flex-col gap-6">
        <StatBlock label="Total Contest" value={data[1]} />
        <StatBlock label="Current Rating" value={data[2]} />
        <StatBlock label="Max Rating" value={data[3]} />
      </div>
    </div>
  );
};
        // <CountUp end={value} duration={1} />

// Reusable stat block
const StatBlock = ({ label, value }) => (
  <div className="text-center">
    <div className="text-sm md:text-lg opacity-80">{label}</div>
    <div className="text-3xl md:text-6xl font-bold tracking-tight mt-1">
     <CountUp end={value} duration={1} separator=""/>
    </div>
  </div>
);

export default Rating_card;
