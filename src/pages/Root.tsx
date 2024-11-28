import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Sensor } from "./Sensor";
import { History } from "./History";
import { Device } from "./Device";

export function RootPath(){
    return(
        <Routes>
            <Route path="/" element={<RootNavigationBar />}>
                <Route index element={<Login />} />
                <Route  path="home" element={<Home />} />
                <Route path="sensor" element={<Sensor />} />
                <Route path="device" element={<Device />} />
                <Route path="history" element={<History />} />
            </Route>
        </Routes>
    )
}

export function RootNavigationBar(){
    const navigate = useNavigate();
    const signout = () => {
        sessionStorage.removeItem("token");
        navigate('/');
    }
    return(
        <>
        <nav className="">
            <Link to={'/home'}><button className="btn btn-outline-primary" style={{borderRadius: 0}}>Home</button></Link>
            <Link to={'/'}><button className="btn btn-outline-primary" style={{borderRadius: 0}}>Login</button></Link>
            <Link to={'/sensor'}><button className="btn btn-outline-primary" style={{borderRadius: 0}}>Sensor</button></Link>
            <Link to={'/device'}><button className="btn btn-outline-primary" style={{borderRadius: 0}}>Device</button></Link>
            <Link to={'/history'}><button className="btn btn-outline-primary" style={{borderRadius: 0}}>History</button></Link>
            <button className="btn btn-outline-primary" onClick={signout} style={{borderRadius: 0}}>Sign out</button>
        </nav>
        <Outlet />
        </>
    )
}