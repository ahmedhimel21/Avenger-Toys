import Lottie from "lottie-react";
import rocket from "../../assets/roctet.json";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProviders";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const { createUser, signInWithGoogle, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.userPassword.value;
    const confirm = form.confirmPassword.value;
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add a special characters");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 8 Characters");
      return;
    } else if (password !== confirm) {
      alert("Please make sure your password are same!");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setSuccess("User has been created successfully");
        // handleEmailVerification(result.user);
        updateUserData(result.user, name, photoUrl);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been created successfully");
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess("");
      });
  };
  const updateUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setSuccess("user profile updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useTitle("Register");
  return (
    <div className="mx-8 my-3">
      <div className="flex flex-col md:flex-row rounded-lg">
        {/* Left side*/}
        <div className="bg-gray-200 p-10 flex justify-center items-center md:w-1/2 rounded-lg">
          <form onSubmit={handleCreateUser} className="w-full max-w-sm">
            <h2 className="text-3xl font-bold mb-6">Register</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
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
                name="userPassword"
                required
              />
              <p onClick={() => setShow(!show)} className="my-3 text-md font-bold">
                  {show ? (
                    <span className="cursor-pointer	">Hide password!</span>
                  ) : (
                    <span className="cursor-pointer	">Show password!</span>
                  )}
                </p>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Confirm password"
                type={show ? "text" : "password"}
                placeholder="Confirm password"
                name="confirmPassword"
                required
              />
              <p onClick={() => setShow(!show)} className="my-3 text-md font-bold">
                  {show ? (
                    <span className="cursor-pointer	">Hide password!</span>
                  ) : (
                    <span className="cursor-pointer	">Show password!</span>
                  )}
                </p>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Photo
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="text"
                placeholder="Photo URL"
                name="photo"
              />
            </div>
            <p className="text-red-600 mb-2">{error}</p>
            <p className="text-green-600 mb-2">{success}</p>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-2">Or register with:</p>
              <div className="flex items-center justify-center">
                {/* Social media login buttons */}
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center mb-3"
                >
                  <FaGoogle className="mr-2"></FaGoogle> Google
                </button>
              </div>
            </div>
            <p>
              <small className="text-lg font-medium text-center">
                Already Have an account?{" "}
                <Link
                  to="/login"
                  className="text-xl font-semibold text-blue-500"
                >
                  Login
                </Link>
              </small>
            </p>
           
          </form>
        </div>

        {/* Right side */}
        <div
          className="bg-cover bg-center md:w-1/2"
        >
          <Lottie
            animationData={rocket}
            loop={true}
            className="h-[562px] w-full"
          ></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
