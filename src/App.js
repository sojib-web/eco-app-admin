import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import "./App.css"; // Importing CSS file at the beginning
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Footer from "./Components/Footer/Footer";
import ProductList from "./Pages/ProductList/ProductList";
import ProductsDetails from "./Pages/ProductsDetails/ProductsDetails";
import Cart from "./Pages/Cart/Cart";
import SignIn from "./Pages/SingIn/SingIn";
import Signup from "./Pages/SingUp/SingUp";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState("");
  const [isHeadeerFooterShow, SetisHeadeerFooterShow] = useState(true);
  const [isLogin, setislogin] = useState(false);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };

  const values = {
    countryList,
    selectedCountry,
    setselectedCountry,
    SetisHeadeerFooterShow,
    isHeadeerFooterShow,
    isLogin,
    setislogin,
  };

  return (
    <div className="App">
      {" "}
      {/* Adding a class name to the root element */}
      <BrowserRouter>
        <MyContext.Provider value={values}>
          {isHeadeerFooterShow === true && <Header />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat/id" element={<ProductList />} />
            <Route
              exact={true}
              path="/product/id"
              element={<ProductsDetails />}
            />
            <Route exact={true} path="/cart" element={<Cart />} />

            <Route exact={true} path="/signIn" element={<SignIn />} />
            <Route exact={true} path="/signUp" element={<Signup />} />
          </Routes>

          {isHeadeerFooterShow === true && <Footer />}
        </MyContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

export { MyContext };
