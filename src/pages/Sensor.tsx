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
            <div>
                <LineChart width={1000} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                </LineChart>
            </div>
            <table className='table'>
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
    )
}