import { Link } from "react-router-dom";
import Navbar from "../Shared/Nabvar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
      
      const {createUser} = useContext(AuthContext);


      const handleRegister = e =>{
            e.preventDefault();
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);

            const name = form.get('name');
            const photo = form.get('photo');
            const email = form.get('email');
            const password = form.get('password')
            console.log(name,photo,email,password)
            //create user
            createUser(email,password)
            .then(result =>{
                  console.log(result.user)
            })
            .catch(error=>{
                  console.error(error)
            })
          }
      return (
            <div>
                       <div className="">
                 <Navbar></Navbar>
                 </div>
                 

                  <div className="hero bg-base-300 rounded-sm mx-auto min-h-auto max-w-4xl mt-5">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold my-10 text-zinc-700">Register your account</h1>  </div>
    <div className="card bg-base-100 w-full  max-w-full  mb-20 shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body ">
      
      
      <div className="form-control ">
             <label className="label">
            <span className="label my-2 text-[11px] text-zinc-400 font-semibold">Name</span>
          </label><br />
          <input type="text" name="name"
           placeholder="Enter your name" className="input input-bordered mb-2 text-zinc-800 font-semibold w-full p-5" required />
        </div>

        <div className="form-control">
             <label className="label">
            <span className="label my-2 text-[11px] text-zinc-400 font-semibold">Photo URL</span>
          </label>
          <br />
          <input type="text" name="photo"
           placeholder="Enter your password" className="input input-bordered mb-2 text-zinc-800 font-semibold w-full p-5" required />
        </div>

       
        <div className="form-control">
             <label className="label">
            <span className="label my-2 text-[11px] text-zinc-400 font-semibold">Email</span>
          </label>
          <br />
          <input type="email" name="email"
           placeholder="Email" className="input input-bordered mb-2 text-zinc-800 font-semibold w-full p-5" required />
        </div>
       
       
       
        <div className="form-control">
          <label className="label">
            <span className="label-text text-[11px] text-zinc-400 font-semibold">Password</span>
          </label>
          <br />
          <input type="password" name="password" placeholder="Password" className="input input-bordered mt-2 text-zinc-800 font-semibold w-full p-5" required />
         
        </div>
        <div className="form-control mt-3">
          <button className="btn bg-zinc-800 text-white w-full text-[9px] p-5 ">Register</button>
        </div>
      </form>
      <p className="m-5 text-center text-zinc-600 font-semibold ">Already have an account? <Link className="btn-link text-blue-900 font-semibold" to={"/Login"}>Login Now</Link> </p>
    </div>
  </div>
</div> 
            </div>
      );
};

export default Register;