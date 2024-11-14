import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { link } from "../context/context";

export function Device(){
    let {state} = useLocation();
    if(!state) return (<>404 Not found</>)
    
    const [on, setOn] = useState(0);
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        axios.get(link + `/devices?feedname=${state.info.name}`).then((res) => {
            setOn(res.data.value);
        })
    }, [])

    const toggle = () => {
        setLoading(true)
        let req = (on + 1) % 2
        axios.post(link + '/devices/set', {
            name: state.info.name,
            value: req
        }).then((res) => {
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
                <div className="card-title">{state.info.name}</div>
                <button onClick={toggle} className={"btn " + (on == 0 ? "btn-outline-danger" : "btn-outline-success")}>{on == 0 ? "Đang tắt" : "Đang bật"}</button>
           </div>
        </div>
    )
}