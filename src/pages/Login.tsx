import axios from "axios"
import { link } from "../context/context"
import { useNavigate } from "react-router-dom"

export function Login(){
  const navigate = useNavigate();
  const signin = () => {
    axios.post(link + "/users/login", {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }).then((res) => {
      console.log(res.data)
      if(res.data.auth != undefined){
        sessionStorage.setItem('token', res.data.auth.slice(6))
        navigate('/home');
      }
      else console.log('No')
    })
  }
  const signup = () => {
    console.log("signup!")
  }

    return (
        <div className="vh-100 vw-100 d-flex justify-content-center align-items-center">
            {/* <div className="w-50">
                <img src="https://preview.redd.it/top-20-strongest-bleach-characters-v0-kicjw8dnh56a1.jpg?width=640&crop=smart&auto=webp&s=d1b431b19e65d9434beda32e956c3343ce142d7b" alt="Not found"/>
            </div> */}
            <div>
                <div className="border border-black shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                    <input type="email" className="form-control" id="username" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                    <input className="form-control" type="password" id="password" />
                  </div>
                    <button className="btn btn-success" onClick={signin}>Log in</button>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signup">
                    Sign up
                    </button>
                </div>
            </div>
            

<div className="modal fade" id="signup" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
                    <input className="form-control" type="password" id="exampleFormControlTextarea1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Confirm Password</label>
                    <input className="form-control" type="password" id="exampleFormControlTextarea1" />
                </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={signup}>Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}