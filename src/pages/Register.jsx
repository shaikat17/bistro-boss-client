import { Link, useNavigate } from "react-router-dom";
import authentication from "../assets/others/authentication.png";
import authentication2 from "../assets/others/authentication2.png";
import fb from "../assets/icon/facebook.png";
import gle from "../assets/icon/google.png";
import github from "../assets/icon/github.png";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../contextAPI/AuthContext";

const Register = () => {
  const { createUser, logOut, updateUserProfile } = useGlobalContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const formSubmit = (data) => {
    console.log(data);

    createUser(data.userEmail, data.pass)
    .then(result => {
      const loggedUser = result.user
      console.log(loggedUser)
      // localStorage.setItem('userEmail', email)
      updateUserProfile(loggedUser, data.userName, data.photoURL)
      .then(updateResult => console.log(updateResult))
      .catch(err => console.log(err))
      logOut()
      navigate("/login")
    })
    .catch(err => console.log(err))

    reset();
  };
  return (
    <div
      className="p-10 h-screen w-full"
      style={{ backgroundImage: `url(${authentication})` }}
    >
      <div
        className="flex gap-7 p-4 items-center drop-shadow-xl h-full"
        style={{ backgroundImage: `url(${authentication})` }}
      >
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-3 ">Sign Up</h1>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="form-control w-full ">
              <label className="label">User Name</label>
              <input
                type="text"
                name="userName"
                {...register("userName", { required: true })}
                placeholder="Enter Your User Name"
                className="input input-bordered w-full "
              />
              {errors.userName?.type === "required" && (
                <p className="text-red-500">User Name is Required</p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">Email</label>
              <input
                type="email"
                name="userEmail"
                {...register("userEmail", { required: true })}
                placeholder="Enter Your Email"
                className="input input-bordered w-full "
              />
              {errors.userEmail?.type === "required" && (
                <p className="text-red-500">User Email is Required</p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">Password</label>
              <input
                type="password"
                name="pass"
                {...register("pass", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Enter Your Password"
                className="input input-bordered w-full "
              />
              {errors.pass?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.pass?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.pass?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.pass?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">Photo URL</label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Enter Photo Link"
                className="input input-bordered w-full "
              />
              {errors.photoURL?.type === "required" && (
                <p className="text-red-500">User PhotoURL is Required</p>
              )}
            </div>
            <button className="bg-[#D1A054] w-full mt-4 py-2 rounded text-white">
              Sign Up
            </button>
          </form>
          <div className="text-center my-3">
            <Link to="/login" className="text-[#D1A054]">
              Already Registered?{" "}
              <span className="font-medium">Click Here To Login</span>
            </Link>
            <p>Or Sign In with</p>
          </div>
          <div className="flex gap-7 items-center justify-center mb-4">
            <img src={fb} alt="fb" />
            <img src={gle} alt="gle" />
            <img src={github} alt="github" />
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={authentication2}
            className="w-full"
            alt="login page image"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
