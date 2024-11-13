import { Link } from "react-router-dom";
import BackgroundImage from "../../../public/nathan-anderson-_tBeFVZPlPY-unsplash.jpg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Login = () => {
  const { singInUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // singIn with firebase
    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImage})` }}
      className="min-h-svh bg-center bg-cover bg-no-repeat pb-5 "
    >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto    ">
        <form onSubmit={handleSubmit} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="ml-4 my-4 text-lg text-gray-500">
          Account not registered?{" "}
          <Link
            to={"/register"}
            className="link link-hover text-lg text-[#5757da] font-bold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
