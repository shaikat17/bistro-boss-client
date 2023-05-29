import { Link, useLocation, useNavigate } from "react-router-dom";
import authentication from "../assets/others/authentication.png";
import authentication2 from "../assets/others/authentication2.png";
import fb from "../assets/icon/facebook.png";
import gle from "../assets/icon/google.png";
import github from "../assets/icon/github.png";
import { LoadCanvasTemplate, loadCaptchaEnginge } from "react-simple-captcha";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { validateCaptcha } from "react-simple-captcha"
import { useGlobalContext } from "../contextAPI/AuthContext";

const Login = () => {
  const [btnDisable, setBtnDisable] = useState(true);
  const [captchaChng, setCaptchaChng] = useState(false)
  let navigate = useNavigate();
  let location = useLocation();

  const {signin, setLoading} = useGlobalContext()

  const { register, reset, handleSubmit, formState: { errors }, } = useForm();

  let from = location.state?.from?.pathname || "/";

  // navigate(from, { replace: true });
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const formSubmit = (data) => {
    console.log(data);
    signin(data.email, data.pass)
      .then((result) => {
        const loggedUser = result.user;
        // localStorage.setItem('userEmail', data.email)
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setBtnDisable(false)
      console.log("validate captcha")
    } else {
      setBtnDisable(true);
      console.log("captcha not validate");
    }
  };

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
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="form-control w-full ">
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email"
                className="input input-bordered w-full"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">User Email is Required</p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">Password</label>
              <input
                type="password"
                {...register("pass", { required: true })}
                placeholder="Enter Your Password"
                className="input input-bordered w-full "
              />
              {errors.pass?.type === "required" && (
                <p className="text-red-500">User Password is Required</p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">Enter Captcha</label>
              <LoadCanvasTemplate />
              <input
                type="text"
                placeholder="Enter Captcha From Above"
                className="input input-bordered w-full "
                onBlur={handleCaptcha}
              />
            </div>
            <button
              disabled={btnDisable}
              className="bg-[#D1A054] w-full mt-4 py-2 rounded text-white"
            >
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
