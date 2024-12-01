import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { link } from "../context/context";

export function Device(){
    let {state} = useLocation();
    
    const [on, setOn] = useState(0);
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);
    const token = sessionStorage.getItem("token");
    console.log("device token", token)
    if(!state) return (<>404 Not found</>)
    useEffect(() => {
        axios.post(link + `/devices`, {
            feedname: state.info.name
        }, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setOn(res.data.value);
        })
        axios.post(link + `/devices/logs`, {
            feedname: state.info.name
        }, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setHistory(res.data.response)
        })
        // axios.get(link + `/devices`, {
        //     headers:{
        //         Authorization: `Bearer ${token}`
        //     }
        // }).then((res) => {
        //     console.log(res.data.value);
        // })
            
    }, [])

    const toggle = () => {
        setLoading(true)
        let req = (on + 1) % 2
        axios.post(link + '/devices/set', {
            name: state.info.name,
            value: req
        }, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data)
            setOn(res.data.value)
            setLoading(false)
        })
    }
    if(loading) return(
        <div className="vh-100 vw-100">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
    return (
        <div className="vh-100 vw-100">
           <div className="card">
                <div className="card-body">
                    <div className="card-title">{state.info.name}</div>
                    <button onClick={toggle} className={"btn " + (on == 0 ? "btn-outline-danger" : "btn-outline-success")}>{on == 0 ? "Đang tắt" : "Đang bật"}</button>
                </div>
           </div>
           <table className="table">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map((value, index) => {
                            return(
                                <tr>
                                    <td>{value.timestamp}</td>
                                    <td>{value.username}</td>
                                    <td>{value.value == 0 ? "Tắt" : "Bật"}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
           </table>
        </div>
    )
}