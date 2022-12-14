import React from 'react';
// import  './Dashboard.css';
import WelcomeMsg from './components/WelcomeMsg';
import Budget from './components/Budget';
import { useEffect } from "react";
import { useState } from "react";
import { Pie } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"

export default function Dashboard() {

  const [breakdown,setBreakdown] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/expenses/categories/7')
   //fetch('http://localhost:8080/expenses/monthly/7')
   .then(res => res.json())
   .then(data => setBreakdown(data))
   
  },[])
  
  const state = {
    labels: breakdown.map(data => data.type),
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          'mistyrose',
          'green',
          'blue',
          'yellow'
          
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        
        ],
        data: breakdown.map(data => data.total)
      }
    ]
  }

  return (
    <div className='container'>

    <>
      <WelcomeMsg />
      <Budget />

        <h3 style={{textAlign:"left", marginTop:"60px",marginLeft:"150px",fontWeight:"bold"}}>Expenses for July 2022</h3>
      <div className="chart" style={{width:'450px',marginLeft:"150px"}}>
        <Pie data={state} style={{ width: ' ' }} />
      </div>
    </>
    </div>
  )
}