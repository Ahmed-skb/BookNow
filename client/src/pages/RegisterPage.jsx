import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto border ">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already Have an account ?
            <Link className="underline text-primary px-2" to={"/Login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
