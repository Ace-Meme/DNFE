import axios from "axios"
import { useEffect, useState } from "react"
import { link, postfix } from "../context/context";
import { useNavigate } from "react-router-dom";

export function Home(){
    // const [data, setData] = useState([10]);
    // const getdata = () => {
    //     axios.get('http://127.0.0.1:5000').then((value) => {
    //         console.log(value.data);
    //         setData([value.data, ...data])
    //     })
    // }
    // useEffect(() =>{
    //     let interval = setInterval(() => getdata(), (1000 * 10))
    //     //destroy interval on unmount
    //     return () => clearInterval(interval)
    // })

    const [sensors, setSensors] = useState([]);
    const [devices, setDevices] = useState([]);
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token")
    console.log(token)
    useEffect(() => {
        axios.get(link + '/sensors', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data);
            setSensors(res.data.sensor);
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    useEffect(() => {
        axios.get(link + '/devices',  {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setDevices(res.data.device);
        }).catch(console.error)
    }, [])
    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', border: 'solid 1px black'}}>
            {/* <div className="" style={{width: '250px', display: 'flex', flexDirection: 'column', border: 'solid 1px black'}}>
                <button className="btn btn-secondary" style={{borderRadius: 0}}>Khu vực 1</button>
                <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#area"> + Thêm khu vực </button>
            </div> */}
            <div className="flex-fill">
                <h5 className="p-2">Thiết bị</h5>
                <div style={{ margin: '5px', padding: '5px', display: 'flex', gap: '10px'}}>
                    {
                        devices && devices.map((value, index) => {
                            let name = value.name;
                            if(name.search(postfix) != -1) name = "Điều khiển tự động: " + value.name;
                            return (
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">{name}</div>
                                        <button className="btn btn-secondary" onClick={() => {navigate('/device', {state: {info: value}})}}>Xem thông số</button> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
                <h5 className="p-2">Cảm biến</h5>
                <div style={{ margin: '5px', padding: '5px', display: 'flex', gap: '10px'}}>
                    {
                        sensors && sensors.map((value, index) => {
                            return(
                                <div className="card" key={index}>
                                    <div className="card-body">
                                        <div className="card-title">{value.name}</div>
                                        <button className="btn btn-secondary" onClick={() => {navigate('/sensor', {state: {info: value}})}}>Xem thông số</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
            
        </div>
    )
}