import { Link } from 'react-router-dom';
import Logo from '../../assets/image/bacola-logo.png'

import CountryDrop from '../CountryDrop/CountryDrop';

const Header = () => {
    return (<>

        <div className="headerWrapper">
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className="mb-0 mt-0 text-center p-text">Lorem ipsum <b>dolor</b> sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex  align-items-center col-sm-2">
                            <Link to={"/"}><img src={Logo} alt="logo" /> </Link>
                        </div>
                        <div className="col-sm-10 d-flex  align-items-center part2">
                            <CountryDrop />

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default Header