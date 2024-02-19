import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import Card from 'react-bootstrap/Card';

export default function PieChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current){
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type:"pie",
            data:{
                labels:["Label 1","Label 2","Label 3","Label 4"],
                datasets :[
                    {
                        data: [70, 70, 6, 200],
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(201, 203, 207)'
                        ],
                    }
                ]
            }
        })
        return () => {
            if (chartInstance.current){
                chartInstance.current.destroy()
            }
        }
    }, []);

  return (
    <div className="d-flex">
      <div className="flex-grow-1"></div>
      <Card className="h-100" style={{ maxWidth: "300px" }}>
        <Card.Header className="bg-primary text-white">
            SMK Bina Nusantara
        </Card.Header>
        <Card.Body className="d-flex align-items-center justify-content-center">
          <div style={{ width: "250px", height: "250px" }}>
            <canvas ref={chartRef} style={{ width: "100%", height: "100%" }} />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}