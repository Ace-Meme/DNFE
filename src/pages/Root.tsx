import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Sensor } from "./Sensor";
import { History } from "./History";

export function RootPath(){
    return(
        <Routes>
            <Route path="/" element={<RootNavigationBar />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="sensor" element={<Sensor />} />
                <Route path="history" element={<History />} />
            </Route>
        </Routes>
    )
}

export function RootNavigationBar(){
    return(
        <>
        <nav className="">
            <Link to={'/'}><button className="btn btn-outline-primary" style={{borderRadius: 0}}>Home</button></Link>
            <Link to={'/login'}><button className="btn btn-outline-primary" style={{borderRadius: 0}}>Login</button></Link>
            <Link to={'/sensor'}><button className="btn btn-outline-primary" style={{borderRadius: 0}}>Sensor</button></Link>
            <Link to={'/history'}><button className="btn btn-outline-primary" style={{borderRadius: 0}}>History</button></Link>
        </nav>
        <Outlet />
        </>
    )
}