import React, { useState } from "react";
import ProductZoom from "../../Components/ProductZoom/ProductZoom";
import Rating from "@mui/material/Rating";
import { FaCartArrowDown } from "react-icons/fa";
import QuantityBox from "../../Components/QuantityBox/QuantityBox";
import Button from "@mui/material/Button";
import { FaHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";
import TabImg from "../../assets/image/author-4.png";
import ProgressBar from "@ramonak/react-progress-bar";
const ProductsDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActivetabs] = useState(0);
  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="productsDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <ProductZoom />
            </div>

            <div className="col-md-7 pl-5 pr-5">
              <h2 className="hd text-capitalize">
                Foster Farms Takeout Crispy Classic Buffalo Wings
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-lig mr-2">Brands:</span>
                    <span>Welesh's</span>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={3.5}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                    <span className="text-lig cursor ml-2">1 Review</span>
                  </div>
                </li>

                {/* <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-lig mr-2">SKU:</span>
                    <span>DTL124</span>
                  </div>
                </li> */}
              </ul>

              <div class="d-flex info mb-3">
                <span class="oldPrice">$99.00</span>
                <span class="newPrice text-danger ml-2">$69.00</span>
              </div>
              <sapn class="badge bg-success">In Stock</sapn>
              <p className="mt-4">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent Vivamus adipiscing nisl ut dolor dignissim semper.
                Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu
                ad litora torquent
              </p>

              <div className="SizeOption d-flex align-items-center ">
                <span>Size / Weight: </span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g{" "}
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      70g{" "}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      50g{" "}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      80g{" "}
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      100g{" "}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-4">
                <QuantityBox />

                <Button className="btn-blue btn-lg btn-big btn-round">
                  <FaCartArrowDown /> &nbsp; Add to cart{" "}
                </Button>
                <Tooltip title="Add to Whishlist" placement="top-start">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-3">
                    <FaHeart />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to Compare" placement="top-start">
                  <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                    <IoGitCompareSharp />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <br />

          <div className="container detailPagetabs pt-3 pb-3">
            <div className="customTabs pt-4">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => setActivetabs(0)}
                  >
                    Description
                  </Button>
                </li>

                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => setActivetabs(1)}
                  >
                    Additional info
                  </Button>
                </li>

                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => setActivetabs(2)}
                  >
                    Reviews (3)
                  </Button>
                </li>
              </ul>
              <br />

              {activeTabs === 0 && (
                <div className="TabContents">
                  <p>
                    {" "}
                    Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                    luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                    litora torquent Vivamus adipiscing nisl ut dolor dignissim{" "}
                  </p>
                </div>
              )}

              {activeTabs === 1 && (
                <div className="TabContenets">
                  <div className="table-responsive">
                    <table class="table table-bordered">
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                    </table>
                    <table class="table table-bordered">
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                    </table>
                    <table class="table table-bordered">
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                    </table>
                    <table class="table table-bordered">
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                    </table>
                    <table class="table table-bordered">
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                    </table>
                    <table class="table table-bordered">
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="TabContenets">
                  <div className="row">
                    <div className="col-md-12">
                      <h3>Customer questions & answers</h3>

                      <div className="card p-4 reviewsCard flex-row ">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src={TabImg} alt="" />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            John Dou
                          </span>
                        </div>

                        <div className="info">
                          <div className="d-flex align-items-center">
                            <h6>01/06/2024</h6>
                            <div className="Rating">
                              <Rating
                                name="read-only"
                                value={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                          <p>
                            Vivamus adipiscing nisl ut dolor dignissim semper.
                            Nulla luctus malesuada tincidunt. Class aptent
                            taciti sociosqu ad litora torquent Vivamus
                            adipiscing nisl ut dolor dignissim{" "}
                          </p>
                        </div>
                      </div>

                      <form className="reviewForm">
                        {/* {console.log(rating)} */}
                        <h4>Add a review</h4>
                        <div className="form-group">
                          <textarea
                            className="form-control from1"
                            placeholder="Write a reviews"
                            name="review"
                          ></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Customer Name:"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="read-only"
                                value={3.5}
                                precision={0.5}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <Button
                            type="submit"
                            className=" btn-border  btn-blue btn-lg btn-big btn-round"
                          >
                            Submit Review
                          </Button>
                        </div>
                      </form>
                    </div>

                    {/* col - md 3 start  */}
                    {/* <div className="col-md-4 CustomerTab">
                      <div className="reviewsText">
                        <h4>Customer reviews </h4>
                        <div className=" reviewRating d-flex align-item-center mt-2">
                          <Rating
                            name="read-only"
                            value={3.5}
                            precision={0.5}
                            readOnly
                          />
                          <strong className="">4.8 out of 5</strong>
                        </div>

                        <br />
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <div className="progressBarSpan">
                          <span className="mr-3">5 Star</span>
                        </div>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progressbar bg-success"
                            style={{ width: "56%", height: "20px" }}
                          >
                            75
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <div className="progressBarSpan">
                          <span className="mr-3">3 Star</span>
                        </div>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progressbar bg-success"
                            style={{ width: "60%", height: "20px" }}
                          >
                            60
                          </div>
                        </div>
                      </div>
                      <div className="progressBarBox d-flex align-items-center">
                        <div className="progressBarSpan">
                          <span className="mr-3">4 Star</span>
                        </div>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progressbar bg-success"
                            style={{ width: "30%", height: "20px" }}
                          >
                            27
                          </div>
                        </div>
                      </div>

                      <div className="progressBarBox d-flex align-items-center">
                        <div className="progressBarSpan">
                          <span className="mr-3">5 Star</span>
                        </div>
                        <div
                          className="progress"
                          style={{ width: "85%", height: "20px" }}
                        >
                          <div
                            className="progressbar bg-success"
                            style={{ width: "75%", height: "20px" }}
                          >
                            75
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsDetails;
