import { Link, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
    const location = useLocation();
    const navigate = useNavigate();
    const signout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        navigate('/');
    }
    return(
        <>
        {
            location.pathname != "/" && (
                <nav className="">
                    <button className="btn btn-outline-success" disabled style={{borderRadius: 0}}>{sessionStorage.getItem("username")}</button>
                    <Link to={'/home'}><button className="btn btn-outline-primary" style={{borderRadius: 0}}>Trang chủ</button></Link>
                    <button className="btn btn-outline-primary" onClick={signout} style={{borderRadius: 0}}>Đăng xuất</button>
                </nav>
            )
        }
        <Outlet />
        </>
    )
}