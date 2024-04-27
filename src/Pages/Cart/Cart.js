import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
                                            <th>
                                                <FormControlLabel
                                                    className="w-100"
                                                    control={<Checkbox />}
                                                    label="Products"
                                                />
                                            </th>
                                            <th>
                                                <FormControlLabel
                                                    className="w-100"
                                                    control={<Checkbox />}
                                                    label="Unit Price"
                                                />

                                            </th>

                                            <th>
                                                <FormControlLabel
                                                    className="w-100"
                                                    control={<Checkbox />}
                                                    label="Quantity"
                                                />

                                            </th>
                                            <th>
                                                <FormControlLabel
                                                    className="w-100"
                                                    control={<Checkbox />}
                                                    label=" Subtotal"
                                                />

                                            </th>
                                            <th>
                                                <FormControlLabel
                                                    className="w-100"
                                                    control={<Checkbox />}
                                                    label="    Remove"
                                                />

                                            </th>


                                        </tr>
                                    </thead>
                                </table>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
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
