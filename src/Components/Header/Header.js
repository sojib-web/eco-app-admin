import { Link } from "react-router-dom";
import Logo from "../../assets/image/bacola-logo.png";

import CountryDrop from "../CountryDrop/CountryDrop";

import { Button } from "@mui/material";

import { FaRegCircleUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation/Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";

const Header = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center p-text">
              Lorem ipsum <b>dolor</b> sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex  align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="logo" />{" "}
                </Link>
              </div>
              <div className="col-sm-10 d-flex  align-items-center part2">
                {context.countryList.length !== 0 && <CountryDrop />}

                <SearchBox />

                <div className="part3 d-flex  align-items-center ml-auto">
                  {context.isLogin !== true ? (
                    <Link to="/signIn">
                      <Button className="btn-blue  btn-round mr-3">
                        Sign In
                      </Button>
                    </Link>
                  ) : (
                    <Button className="circle mr-3">
                      <FaRegCircleUser />
                    </Button>
                  )}

                  <div className="ml-auto cartTab d-flex  align-items-center">
                    <span className="price">$0.00</span>
                    <div className="position-relative ml-2">
                      {" "}
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex  align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* nav bar  start  */}

        <Navigation />
        {/* nav bar  ends  */}
      </div>
    </>
  );
};

export default Header;
