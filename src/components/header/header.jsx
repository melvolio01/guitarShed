import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { toggleTrolleyHidden } from '../../redux/trolley/trolley.action'
import TrolleyDropdown from '../trolleyDropdown/trolleyDropdown'

import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = ({ currentUser, toggleTrolleyHidden, trolleyHidden }) => {
    return (
        <div className="header">
            <div className="icon-container">
                <Link to="/" ><FontAwesomeIcon icon={faHome} className="icon" /></Link>
            </div>
            <div className="options">
                <div className="shop-menu">
                    <Link className="option" to="/shop">Shop</Link>
                    <div className="shop-dropdown">
                        <Link className="shop-links" to="/fender">Fender</Link>
                        <Link className="shop-links" to="/gibson">Gibson</Link>
                        <Link className="shop-links" to="/other">Other Guitars</Link>
                        <Link className="shop-links" to="/acoustic">Acoustic</Link>
                        <Link className="shop-links" to="/electric">Electric</Link>
                    </div>
                </div>
                {/* // If user logged in, show userName, signOut link and trolleyToggle icon, else show sign-in */}
                {currentUser ?
                    <div className="logged-in">
                        <div className="option" onClick={() => auth.signOut()}>
                            <p><span className="current-user">{currentUser.displayName} </span>
                                <br></br> SignOut</p>
                        </div>
                        <div className="icon-container">
                            {/* If trolley is not hidden no need to hide as onBlur from dropdown will handle this */}
                            <div onMouseDown={trolleyHidden ? toggleTrolleyHidden : undefined}><FontAwesomeIcon icon={faShoppingCart} className="icon-small" /></div>
                        </div>
                    </div>
                    : <Link className="option" to="/signIn">Sign In</Link>}
            </div>
            {(!trolleyHidden && currentUser) && <TrolleyDropdown />}
        </div >
    );
};

const mapStateToProps = ({ user: { currentUser }, trolley: { trolleyHidden } }) => ({
    currentUser,
    trolleyHidden
})

const mapDispatchToProps = dispatch => ({
    toggleTrolleyHidden: () => dispatch(toggleTrolleyHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);