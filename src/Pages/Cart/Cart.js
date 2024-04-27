
import imgCart from "../../assets/image/1.jpg"
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import QuantityBox from "../../Components/QuantityBox/QuantityBox";
const Cart = () => {
    return (
        <>
            <section className="section cartpage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="hd mb-0">Your Cart</h2>
                            <p>There are <b>4</b> products in you cart</p>

                            <div className="table-responsive borderRa">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="50%">
                                                Products
                                            </th>
                                            <th>
                                                Unit Price

                                            </th>

                                            <th>
                                                Quantity

                                            </th>
                                            <th>
                                                Subtotal

                                            </th>
                                            <th>
                                                Remove

                                            </th>


                                        </tr>
                                    </thead>
                                </table>
                                <tbody>
                                    <tr>
                                        <td width="45%">
                                            <Link to="/product/1">
                                                <div className="d-flex align-items-center CartItemImgWrapper">
                                                    <div className="ImgWrapper">
                                                        <img className="w-100" src={imgCart} alt="" />
                                                    </div>

                                                    <div className="info px-3">
                                                        <h6>

                                                            Foster Farms Takeout Crispy Classic </h6>
                                                        <Rating size="small" precision={0.5} name="read-only" value={3.7} readOnly />
                                                    </div>
                                                </div>
                                            </Link>


                                        </td>
                                        <td>$7.7</td>
                                        <td>
                                            <QuantityBox />
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
