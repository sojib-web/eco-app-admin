import React from "react";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import { IoMdCloseCircle } from "react-icons/io";
import Rating from "@mui/material/Rating";
const ProdutsModal = (props) => {
  return (
    <>
      <Dialog
        className="productModal"
        open={true}
        onClose={() => props.closeProductModal()}
      >
        <Button className="close_" onClick={() => props.closeProductModal()}>
          <IoMdCloseCircle />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          Angie’s Boomchickapop Sweet & Salty Kettle Corn
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
            <span className="ml-2 mt-1">
              <Rating
                name="read-only"
                value={5}
                readOnly
                precision={0.5}
                size="small"
              />
            </span>
          </div>
        </div>

        <hr></hr>

        <div className="row mt-2">
          <div className="col-6 col-md-5"></div>

          <div className="col-6 col-md-7"></div>
        </div>
      </Dialog>
    </>
  );
};

export default ProdutsModal;
