import axios from "axios"
import { useEffect, useState } from "react"

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
    return (
        <div style={{height: '100vh', width: '100vw', display: 'flex', border: 'solid 1px black'}}>
            <div className="" style={{width: '250px', display: 'flex', flexDirection: 'column', border: 'solid 1px black'}}>
                <button className="btn btn-secondary" style={{borderRadius: 0}}>Khu vực 1</button>
                <button className="btn btn-secondary" style={{borderRadius: 0}}>Khu vực 1</button>
                <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#area"> + Thêm khu vực </button>
            </div>
            <div className="flex-fill">
                <div style={{margin: '5px', padding: '5px', display: 'flex', justifyContent: 'space-around', border: 'solid 1px black'}}>
                    <div>Máy bơm</div>
                    <button className="btn btn-danger">Tình trạng: Bật</button>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                    </div>
                </div>
                <div className="text-center" style={{border: 'solid 1px black', margin: '5px'}} data-bs-toggle="modal" data-bs-target="#device"> + Thêm thiết bị </div>
                <div style={{ margin: '5px', padding: '5px', display: 'flex', gap: '10px'}}>
                    <div className="card">
                        <div className="card-title">Cảm biến ánh sáng</div>
                        <div>Ảnh</div>
                    </div>
                    <div className="card">
                        <div>Cảm biến ánh sáng</div>
                        <div>Ảnh</div>
                    </div>
                    <div className="card" data-bs-toggle="modal" data-bs-target="#device">
                        <div>+ Thêm thiết bị</div>
                    </div>
                </div>
            </div>
            

            <div className="modal fade" id="area" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">New area</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            <div className="modal fade" id="device" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">New device</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            <div className="modal fade" id="sensor" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">New sensor</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}