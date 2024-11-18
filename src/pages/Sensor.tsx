// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { Table } from 'react-bootstrap';
// import { link } from '../context/context';
// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// export function Sensor() {
//     let {state} = useLocation();
//     if(!state) return (<>404 Not found</>)
    
    
//     const [data, setData] = useState([{time: "2024", value: 30}]);

//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: false,  
//             },
//         },
//         scales: {
//             x: {
//                 display: true, 
                
//             },
//             y: {
//                 display: true,
               
//             },
//         },
//     };
//     const getData = () => {
//         let d = new Date();
//         axios.get(link + `/sensors?feedname=${state.info.name}`).then((res) => {
//             console.log(res.data);
//             let o = {time: d.toLocaleString(), value: Math.floor(Math.random()*100)}
//             if(data.length < 7) setData([...data, o])
//             else setData([...data.slice(1), o])
//         })
//     }
//     useEffect(() => {
//         let d = new Date();
//         axios.get(link + `/sensors?feedname=${state.info.name}`).then((res) => {
//             setData([{time: d.toLocaleString(), value: res.data.value}])
//         })
//     }, [])

//     useEffect(() =>{
//         let interval = setInterval(() => getData(), (1000 * 5))
//         //destroy interval on unmount
//         return () => clearInterval(interval)
//     })
//     let datastart = {
//         labels: data.map((e) => e.time),
//         datasets: [
//             {
//                 label: 'Giá trị cảm biến',
//                 data: data.map((e) => e.value),
//                 borderColor: 'black',
//                 backgroundColor: 'red',
//                 fill: false,
//                 // tension: 0.5,
//             },
//         ],
//     };

//     return (
//         <div className='d-flex flex-column justify-content-center' style={{height: '100%', width: '100vw', border: 'solid 1px black'}}>
            
//             <h3 className="text-center text-success mt-4">Cảm biến {state.info.name}</h3>

//             <div className='d-flex justify-content-center my-4'>
//                 <div style={{ height: '40%', width: '50%' }}>
//                     <Line 
//                         data={datastart} 
//                         options={options} 
//                     /> 
//                 </div>           
//             </div>

//             <div className="container" style={{ width: '60%' }}>
//                 <Table bordered responsive striped>
//                     <thead>
//                         <tr>
//                             <th style={{ backgroundColor: '#90ee90', color: 'white' }}>Thời gian</th>
//                             <th style={{ backgroundColor: '#90ee90', color: 'white' }}>Giá trị</th>
//                             <th style={{ backgroundColor: '#90ee90', color: 'white' }}>Đánh giá</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>02:00:00</td>
//                             <td>30</td>
//                             <td>Bình thường</td>
//                         </tr>
//                         {
//                             data.map((element, index) => {
//                                 return(
//                                     <tr>
//                                         <td>{element.time}</td>
//                                         <td>{element.value}</td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </Table>
//             </div>
//             </div>)
// }

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { link } from '../context/context';



export function Sensor(){
    const [data, setData] = useState([{time: "2024", value: 30}]);
    let {state} = useLocation();
    if(!state) return (<>404 Not found</>)
    
    
    const getData = () => {
        let d = new Date();
        axios.get(link + `/sensors?feedname=${state.info.name}`).then((res) => {
            console.log(res.data);
            let o = {time: d.toLocaleString(), value: res.data.value}
            if(data.length < 7) setData([...data, o])
            else setData([...data.slice(1), o])
        })
    }
    // const pushData = () => {
    //     let o = {value: Math.floor(Math.random()*50)}
    //     if(data.length < 7) setData([...data, o])
    //     else setData([...data.slice(1), o])
    // }

    useEffect(() => {
        let d = new Date();
        axios.get(link + `/sensors?feedname=${state.info.name}`).then((res) => {
            setData([{time: d.toLocaleString(), value: res.data.value}])
        })
    }, [])

    useEffect(() =>{
        let interval = setInterval(() => getData(), (1000 * 5))
        //destroy interval on unmount
        return () => clearInterval(interval)
    })
    return (
        <div className="vh-100 vw-100">
            <h5>Cảm biến {state.info.name}</h5>
            <div>
                <LineChart width={1500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                </LineChart>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element, index) => {
                            return(
                                <tr key={index}>
                                    <td>{element.time}</td>
                                    <td>{element.value}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}


