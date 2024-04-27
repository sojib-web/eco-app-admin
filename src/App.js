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

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setselectedCountry] = useState("");

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
  };

  return (
    <div className="App">
      {" "}
      {/* Adding a class name to the root element */}
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cat/:id" element={<ProductList />} />
            <Route
              exact={true}
              path="/product/:id"
              element={<ProductsDetails />}
            />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

export { MyContext };
