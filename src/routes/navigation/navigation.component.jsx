
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "../navigation/navigation.style.scss";
const Navigation = () => {
    return (
        <Fragment >

            <div className="navigation">
                <Link className="logo-container" to='/crown-clothing'> <div > <CrownLogo className="logo" /></div> </Link>
               
                <div className="nav-links-container">
                    <Link className='nav-link' to='/crown-clothing/signIn'>
                        SIGNIN
                    </Link>
                    <Link className='nav-link' to='/crown-clothing/shop'>
                            SHOP
                    </Link>
                </div>
            </div>

            <Outlet />

        </Fragment>


    )
}

export default Navigation;