import { useState } from 'react'
import { useReducer } from 'react';
import './App.css'
import LoginUser from './LoginPage/Login'
import Dash from './Dashboard/Dash';
import Footer from './components/footer';


import CalendarHeatmap from 'react-calendar-heatmap';
// import Heatmap from './components/heatmap';
import Nav from './components/Top/Navbar';
import Ques_card from './components/Top/q_no_card';




const App=()=> {
  let [View,setview]=useState(0);
  let [UserA,setUserA]=useState([]);
  // Aashishk878 kaushal__07 rybhrdwj
  
  return (
    <>
    <Nav  setview={setview} View={View}/>
    
     {
       (View==0)?<LoginUser  setview={setview} setUserA={setUserA }          />  :<Dash  setview={setview} UserA={UserA }  />
       }
        
        <Footer/>
      
       </>  
      
    )

}

export default App;
