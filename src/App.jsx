import { useState } from 'react'
import { useReducer } from 'react';
import './App.css'
import LoginUser from './LoginPage/Login'
import Dash from './Dashboard/Dash';


import CalendarHeatmap from 'react-calendar-heatmap';
// import Heatmap from './components/heatmap';
// import Nav from './components/ui/Navbar';
import Ques_card from './components/Top/q_no_card';
// import 'react-calendar-heatmap/dist/styles.css';



const App=()=> {
  let [View,setview]=useState();
  let [UserA,setUserA]=useState(["sarthakkjha","ayu_264"]);
  // Aashishk878 kaushal__07 rybhrdwj
  
  return (
    <>
       {/* <Nav/>  */}
    
    
     {
      //  (View==0)?<LoginUser  setview={setview} setUserA={setUserA }          />  :<Dash UserA={UserA }  />
       }
        <Dash UserA={UserA}/> 
        {/* <Component/>   */}
      
      
       
         {/* <Heatmap/>  */}
      
       </>  
      
    )

}

export default App;
