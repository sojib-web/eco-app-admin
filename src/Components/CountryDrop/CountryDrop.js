// Don't forget to import React
import React from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDrop = () => {

    const [isOpenModal, setisopenModal] = useState(false)
    return (
        <>
            <Button className='CountryDrop' onClick={() => setisopenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">Dhaka</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            <Dialog TransitionComponent={Transition} open={isOpenModal} onClose={() => setisopenModal(false)} className="locationModal">
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={() => setisopenModal(false)} ><IoMdCloseCircle /></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search Your Area..." />
                    <Button>
                        <IoSearchOutline />
                    </Button>
                </div>
                <ul className="countryList mt-3">
                    <li><Button onClick={() => setisopenModal(false)}>Dhaka</Button></li>
                    <li><Button onClick={() => setisopenModal(false)}>Rampura</Button></li>
                    <li><Button onClick={() => setisopenModal(false)}>Khilkhet</Button></li>
                    <li><Button onClick={() => setisopenModal(false)}>Dhaka</Button></li>
                    <li><Button onClick={() => setisopenModal(false)} >Rampura</Button></li>
                    <li><Button onClick={() => setisopenModal(false)}>Khilkhet</Button></li>
                    <li><Button onClick={() => setisopenModal(false)}>Dhaka</Button></li>
                    <li><Button onClick={() => setisopenModal(false)}>Rampura</Button></li>
                    <li><Button onClick={() => setisopenModal(false)}>Khilkhet</Button></li>
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDrop;
