import { Link, useLocation, useNavigate } from "react-router-dom";
import authentication from "../assets/others/authentication.png";
import authentication2 from "../assets/others/authentication2.png";
import fb from "../assets/icon/facebook.png";
import gle from "../assets/icon/google.png";
import github from "../assets/icon/github.png";


const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // navigate(from, { replace: true });
  
  return (
    <div
      className="p-20 h-screen w-full"
      style={{ backgroundImage: `url(${authentication})` }}
    >
      <div
        className="flex gap-7 p-4 items-center drop-shadow-xl h-full"
        style={{ backgroundImage: `url(${authentication})` }}
      >
        <div className="w-1/2">
          <img
            src={authentication2}
            className="w-full"
            alt="login page image"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-3 ">Login</h1>
          <form>
            <div className="form-control w-full ">
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">Enter Captcha</label>
              <input
                type="text"
                placeholder="Enter Captcha From Above"
                className="input input-bordered w-full "
              />
            </div>
            <button className="bg-[#D1A054] w-full mt-4 py-2 rounded text-white">
              Log In
            </button>
          </form>
          <div className="text-center my-3">
            <Link to="/register" className="text-[#D1A054]">
              New Here?
              <span className="font-medium">Create a New Account</span>
            </Link>
            <p>Or Sign In with</p>
          </div>
          <div className="flex gap-7 items-center justify-center mb-4">
            <img src={fb} alt="fb" />
            <img src={gle} alt="gle" />
            <img src={github} alt="github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
