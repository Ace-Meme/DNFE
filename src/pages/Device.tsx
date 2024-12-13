import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { link, postfix } from "../context/context";

export function Device(){
    let {state} = useLocation();
    
    const [on, setOn] = useState(0);
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);
    let isAutochannel = false;
    const [auto, setAuto] = useState(false);
    const token = sessionStorage.getItem("token");
    console.log("device token", token)
    if(!state) return (<>404 Not found</>)
    else{
        let name = state.info.name;
        if(name.search(postfix) != -1) isAutochannel = true;
    }
    useEffect(() => {
        setLoading(true);
        if(!isAutochannel){
            axios.post(link + `/devices`, {
                feedname: state.info.name + postfix
            }, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                console.log("state auto channel:",res.data.value)
                if(res.data.value == 1) setAuto(true);
            }) 
        }
        axios.post(link + `/devices`, {
            feedname: state.info.name
        }, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log("state:",res.data.value)
            setOn(Number(res.data.value));
            setLoading(false);
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
    }, [])

    const toggle = () => {
        setLoading(true)
        console.log("toggle zero", on, on + 1)
        let req = (on + 1) % 2;
        console.log("toggle first", req)
        axios.post(link + '/devices/set', {
            name: state.info.name,
            value: req
        }, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log("toggle second", res.data.value)
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
                    {
                        isAutochannel ? (
                            <>
                            <div className="card-title">Điều khiển tự động: {state.info.name}</div>
                            <button onClick={toggle} className={"btn " + (on == 0 ? "btn-outline-danger" : "btn-outline-success")}>{on == 0 ? "Đang tắt tự động" : "Đang bật tự động"}</button>
                            </>
                        ) : (
                            <>
                            <div className="card-title">Thiết bị: {state.info.name}</div>
                            
                            {
                                auto ? (
                                    <>
                                    <div className="card-text">Đang ở chế độ tự động</div>
                                    <button disabled className={"btn " + (on == 0 ? "btn-outline-danger" : "btn-outline-success")}>{on == 0 ? "Đang tắt" : "Đang bật"}</button>
                                    </>
                                ) : (
                                    <>
                                    <button onClick={toggle} className={"btn " + (on == 0 ? "btn-outline-danger" : "btn-outline-success")}>{on == 0 ? "Đang tắt" : "Đang bật"}</button>
                                    </>
                                )
                            }
                            
                            </>
                        )
                    }
                    
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