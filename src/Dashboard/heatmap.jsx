import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
// import 'react-calendar-heatmap/dist/styles.css';

const Heatmap = ({inf}) => {
  
//  console.log(inf)
  const safeValues = Array.isArray(inf) ? inf : [];
  console.log("--------------------")
//  console.log(safeValues.slice(50,100))



  // console.log(inf)

  return (
    <div className='w-1/2 border-2 border-black p-4'>
      <CalendarHeatmap
        startDate={new Date('2024-07-01')}
        endDate={new Date('2025-06-30')}
        values={safeValues}
        
        horizontal={true}
        
  //         classForValue={value => {
  //   if (!value || value.count === 0) {
  //     return 'color-github-0';
  //   }
  //   if (value.count >= 4) return 'color-github-4';
  //   if (value.count >= 3) return 'color-github-3';
  //   if (value.count >= 2) return 'color-github-2';
  //   if (value.count >= 1) return 'color-github-1';
  //   return 'color-github-0';
  // }}
      
      />
    </div>
  );
};

export default Heatmap;
