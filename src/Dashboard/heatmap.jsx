import { iframe } from 'framer-motion/client';
import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
// import 'react-calendar-heatmap/dist/styles.css';

const Heatmap = ({inf}) => {
  
//  console.log(inf)
  const safeValues = Array.isArray(inf) ? inf : [];
//  console.log(safeValues.slice(50,100))



  // console.log(inf)

  return (
    <div className='p-4 font-white'>
      <CalendarHeatmap className="font-white"
        startDate={new Date('2025-01-01')}
        endDate={new Date('2025-06-30')}
        values={safeValues}
        gutterSize={3}
        
        horizontal={true}
        titleForValue={value =>
    value && value.date
      ? `${value.date}: ${value.count} submission${value.count > 1 ? 's' : ''}`
      : 'No activity'
  }
          classForValue={value => {
     if (!value || value.count === 0) return 'color-github-0';
  else if (value.count <= 1) return 'color-github-1';
  else if (value.count <= 2) return 'color-github-2';
  else if (value.count <= 4) return 'color-github-3';
  else if (value.count <= 6) return 'color-github-4';
  else if (value.count <= 8) return 'color-github-5';
  else return 'color-github-6'; // 9+
  }

  

}
      
      />
    </div>
  );
};

export default Heatmap;
