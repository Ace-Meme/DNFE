import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Table } from 'react-bootstrap';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export function Sensor() {
    
    const data = {
        labels: ['02:05:00', '02:10:00', '02:15:00', '02:20:00', '02:25:00', '02:05:00', '02:10:00', '02:15:00', '02:20:00', '02:25:00'],
        datasets: [
            {
                label: 'Giá trị cảm biến',
                data: [28, 32, 27, 35, 30, 28, 32, 27, 35, 30],
                borderColor: 'black',
                backgroundColor: 'red',
                fill: false,
                // tension: 0.5,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,  
            },
        },
        scales: {
            x: {
                display: true, 
                
            },
            y: {
                display: true,
               
            },
        },
    };

    return (
        <div className='d-flex flex-column justify-content-center' style={{height: '100%', width: '100vw', border: 'solid 1px black'}}>
            
            <h3 className="text-center text-success mt-4">Cảm biến EEEEE1</h3>

            <div className='d-flex justify-content-center my-4'>
                <div style={{ height: '40%', width: '50%' }}>
                    <Line 
                        data={data} 
                        options={options} 
                    /> 
                </div>           
            </div>

            <div className="container" style={{ width: '60%' }}>
                <Table bordered responsive striped>
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: '#90ee90', color: 'white' }}>Thời gian</th>
                            <th style={{ backgroundColor: '#90ee90', color: 'white' }}>Giá trị</th>
                            <th style={{ backgroundColor: '#90ee90', color: 'white' }}>Đánh giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>02:00:00</td>
                            <td>30</td>
                            <td>Bình thường</td>
                        </tr>
                        <tr>
                            <td>02:00:00</td>
                            <td>30</td>
                            <td>Bình thường</td>
                        </tr>
                        <tr>
                            <td>02:00:00</td>
                            <td>30</td>
                            <td>Bình thường</td>
                        </tr>
                        <tr>
                            <td>02:00:00</td>
                            <td>30</td>
                            <td>Bình thường</td>
                        </tr>
                        <tr>
                            <td>02:00:00</td>
                            <td>30</td>
                            <td>Bình thường</td>
                        </tr>
                        <tr>
                            <td>02:00:00</td>
                            <td>30</td>
                            <td>Bình thường</td>
                        </tr>
                        <tr>
                            <td>02:00:00</td>
                            <td>30</td>
                            <td>Bình thường</td>
                        </tr>
                        <tr>
                            <td>02:00:00</td>
                            <td>30</td>
                            <td>Bình thường</td>
                        </tr>
                        <tr>
                            <td>02:00:00</td>
                            <td>30</td>
                            <td>Bình thường</td>
                        </tr>
                        <tr>
                            <td>02:00:00</td>
                            <td>30</td>
                            <td>Bình thường</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
}


