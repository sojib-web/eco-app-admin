import imgCart from "../../assets/image/1.jpg";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import QuantityBox from "../../Components/QuantityBox/QuantityBox";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { CgShoppingCart } from "react-icons/cg";
const Cart = () => {
  return (
    <>
      <section className="section cartpage">
        <div className="container">
          <h2 className="hd mb-0">Your Cart</h2>
          <p>
            There are <b className="text-red">4</b> products in you cart
          </p>
          <div className="row mt-5">
            <div className="col-md-9 pr-4">
              <div className="table-responsive borderRa">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th width="35%">Products</th>
                      <th width="20%">Unit Price</th>

                      <th width="25%">Quantity</th>
                      <th width="15%">Subtotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center CartItemImgWrapper">
                            <div className="ImgWrapper">
                              <img className="w-100" src={imgCart} alt="" />
                            </div>

                            <div className="info px-3">
                              <h6>Foster Farms Takeout Crispy Classic </h6>
                              <Rating
                                size="small"
                                precision={0.5}
                                name="read-only"
                                value={3.7}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.7</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%"> $7.74</td>
                      <td width="10%">
                        <span className="remove">
                          {" "}
                          <IoCloseCircleSharp />
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center CartItemImgWrapper">
                            <div className="ImgWrapper">
                              <img className="w-100" src={imgCart} alt="" />
                            </div>

                            <div className="info px-3">
                              <h6>Foster Farms Takeout Crispy Classic </h6>
                              <Rating
                                size="small"
                                precision={0.5}
                                name="read-only"
                                value={3.7}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.7</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%"> $7.74</td>
                      <td width="10%">
                        <span className="remove">
                          {" "}
                          <IoCloseCircleSharp />
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center CartItemImgWrapper">
                            <div className="ImgWrapper">
                              <img className="w-100" src={imgCart} alt="" />
                            </div>

                            <div className="info px-3">
                              <h6>Foster Farms Takeout Crispy Classic </h6>
                              <Rating
                                size="small"
                                precision={0.5}
                                name="read-only"
                                value={3.7}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.7</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%"> $7.74</td>
                      <td width="10%">
                        <span className="remove">
                          {" "}
                          <IoCloseCircleSharp />
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td width="35%">
                        <Link to="/product/1">
                          <div className="d-flex align-items-center CartItemImgWrapper">
                            <div className="ImgWrapper">
                              <img className="w-100" src={imgCart} alt="" />
                            </div>

                            <div className="info px-3">
                              <h6>Foster Farms Takeout Crispy Classic </h6>
                              <Rating
                                size="small"
                                precision={0.5}
                                name="read-only"
                                value={3.7}
                                readOnly
                              />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td width="15%">$7.7</td>
                      <td width="25%">
                        <QuantityBox />
                      </td>
                      <td width="15%"> $7.74</td>
                      <td width="10%">
                        <span className="remove">
                          {" "}
                          <IoCloseCircleSharp />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border p-3 cartDetails">
                <h4> Cart Totals</h4>
                <div className="d-flex align-items-center mb-3">
                  <span className="Span">Subtotal</span>
                  <span className="ml-auto text-red font-weight-bold">
                    $12.311
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span className="Span">Shipping</span>
                  <span className="ml-auto  ">
                    <b>Free</b>
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span className="Span">Estimate for</span>
                  <span className="ml-auto ">
                    <b>Bangladesh</b>
                  </span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <span className="Span">Total</span>
                  <span className="ml-auto text-red font-weight-bold ">
                    $12.31
                  </span>
                </div>

                <Button className=" mt-3 btn-blue btn-lg btn-big btn-round ">
                  <CgShoppingCart /> &nbsp; add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
