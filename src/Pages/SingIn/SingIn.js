import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/image/bacola-logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";
const SignIn = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.SetisHeadeerFooterShow(false);
  }, []);
  return (
    <div className="section signInPage">
      <div className="shape-bottom">
        {" "}
        <svg
          fill="#fff"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1921 819.8"
          style={{ enableBackground: "new 0 0 1921 819.8" }}
        >
          {" "}
          <path
            className="st0"
            d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
          ></path>{" "}
        </svg>{" "}
      </div>
      <div className="container">
        <div className=" box card p-3 shadow border-0">
          <div className="text-center">
            <img src={Logo} alt="" className="widths" />
          </div>

          <form cls>
            <h2 className="mb-4">Sign In</h2>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email "
                variant="standard"
                required
                type="email"
                className="w-100"
              />
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Password "
                variant="standard"
                required
                type="Password"
                className="w-100"
              />
            </div>
            <h6 className="border-effect cursor">Forgot Password?</h6>
            <div className="d-flex align-items-center mt-3 mb-3">
              <Button className="btn-blue col btn-lg btn-big">Sign In</Button>

              <Link to="/">
                <Button
                  className="col btn-lg btn-big ml-3"
                  variant="outlined"
                  onClick={() => context.SetisHeadeerFooterShow(true)}
                >
                  Cancel
                </Button>
              </Link>
            </div>
            <p className="font-weight-bold text-center">
              Not Registered ? &nbsp;
              <Link className="border-effect" to="/signUp">
                Sign Up
              </Link>
            </p>
            <h6 className="mt-4 text-center font-weight-bold">
              Or continue with social account
            </h6>

            <ul className="list list-inline mt-4 mb-1 socials text-center ">
              <li className="list-inline-item">
                <Link to="">
                  {" "}
                  <FaFacebookF />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="">
                  {" "}
                  <FaTwitterSquare />
                </Link>
              </li>

              <li className="list-inline-item">
                <Link to="">
                  {" "}
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
