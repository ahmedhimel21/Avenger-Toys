import Lottie from "lottie-react";
import login from "../../assets/login.json";
import useTitle from "../../hooks/useTitle";
import { FaGoogle } from "react-icons/fa";
import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const { signInWithGoogle, signIn, auth } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((r) => {
        const loggedUser = r.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setError("");
        form.reset();
        setSuccess("Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };
  //social login
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleResetPassword = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      toast("please provide your email address to reset password", {
        autoClose: 500,
      });
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  useTitle("Login");
  return (
    <div className="mx-8 my-8">
      <div className="flex flex-col md:flex-row">
        {/* Left side */}
        <div
          className="bg-blue-500 text-white p-10 flex flex-col justify-center items-center md:w-1/2 rounded-lg"
          // style={{ backgroundImage: 'url("login1.jpg")' }}
        >
          <Lottie
            animationData={login}
            loop={true}
            className="h-[500px]"
          ></Lottie>
        </div>

        {/* Right side */}
        <div className="bg-gray-200 p-10 flex justify-center items-center md:w-1/2 rounded-lg">
          <form onSubmit={handleSignIn} className="w-full max-w-sm">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>
            <p
              className=" mb-3 font-semibold text-md"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <span className="cursor-pointer	">Hide password!</span>
              ) : (
                <span className="cursor-pointer	">Show password!</span>
              )}
            </p>
            <p className="text-red-600">{error}</p>
            <div className="flex items-center justify-between mb-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
              <a
                onClick={handleResetPassword}
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </a>
              <ToastContainer />
            </div>
            <div>
              <p className="text-gray-700 mb-2">Or sign in with:</p>
              <div className="flex gap-2">
                {/* Social media login buttons/icons */}
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                >
                  <FaGoogle className="mr-2"></FaGoogle> Google
                </button>
              </div>
            </div>
            <p>
              <small className="text-lg font-medium">
                New to Avenger Toys?{" "}
                <Link
                  to="/register"
                  className="text-xl font-semibold text-blue-500"
                >
                  Register
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
