import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Nabvar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location in the login pase',location)

  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password)

    signIn(email,password)
    .then(result =>{
      console.log(result.user)
      //navigate after login
      navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
      console.error(error)
    })

  }
      return (
            <div>
                 <div className="">
                 <Navbar></Navbar>
                 </div>
                 

                  <div className="hero bg-base-300 rounded-sm mx-auto min-h-auto max-w-4xl mt-10">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold my-10 text-zinc-700">Login your account</h1>
     
    </div>
    <div className="card bg-base-100 w-full  max-w-sm mb-20 shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label my-2 text-[11px] text-zinc-400 font-semibold">Email</span>
          </label>
          <input type="email" name="email"
           placeholder="Email" className="input input-bordered mb-2 text-zinc-800 font-semibold" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[11px] text-zinc-400 font-semibold">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered mt-2 text-zinc-800 font-semibold" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover mt-2 text-zinc-600 font-semibold ">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-4">
          <button className="btn bg-zinc-800 text-white w-full text-[9px] p-5 ">Login</button>
        </div>
      </form>
      <p className="m-5 text-center text-zinc-600 font-semibold ">Do not have an account <Link className="btn-link text-blue-900 font-semibold" to={"/Register"}>Register Now</Link> </p>
    </div>
  </div>
</div>
            </div>
      );
};

export default Login;