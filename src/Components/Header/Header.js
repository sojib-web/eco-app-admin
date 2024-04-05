import { Link } from 'react-router-dom';
import Logo from '../../assets/image/bacola-logo.png'

import CountryDrop from '../CountryDrop/CountryDrop';
import { IoSearchOutline } from "react-icons/io5";
import { Button } from '@mui/material';
const Header = () => {
    return (<>

        <div className="headerWrapper">
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className="mb-0 mt-0 text-center p-text">Lorem ipsum <b>dolor</b> sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex  align-items-center col-sm-2">
                            <Link to={"/"}><img src={Logo} alt="logo" /> </Link>
                        </div>
                        <div className="col-sm-10 d-flex  align-items-center part2">
                            <CountryDrop />
                            {/* Header Start  Heare  */}

                            <div className='headerSearch ml-3 mr-3'>
                                <input type='text' placeholder='Search for products...' />
                                <Button><IoSearchOutline /></Button>
                            </div>
                            {/* Header Ends  Heare  */}
                        </div>

                    </div>
                </div>
            </header>

        </div>
    </>);
}

export default Header