import { Link } from "react-router-dom";
import BackgroundImageReg from "../../../public/pexels-pixabay-326055.jpg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  //context api
  const { createUser } = useContext(AuthContext);
  //handle register
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        alert("User created successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Error creating user");
      });
  };

  return (
    <div
      style={{ backgroundImage: `url(${BackgroundImageReg})` }}
      className="min-h-svh bg-center bg-cover bg-no-repeat pb-5 "
    >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto    ">
        <form onSubmit={handleRegister} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>

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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="ml-4 my-4 text-lg text-gray-500">
          All ready have a accout?
          <Link
            to={"/login"}
            className="link link-hover text-lg text-[#5757da] font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
