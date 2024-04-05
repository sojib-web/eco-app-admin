// Don't forget to import React
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
const CountryDrop = () => {
    return (
        <>
            <Button className='CountryDrop'>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">Dhaka</span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>
        </>
    );
};

export default CountryDrop;
