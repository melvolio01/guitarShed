import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTrolleyHidden } from '../../redux/trolley/trolley.action';
import Button from '../button/button';
import TrolleyItem from '../trolleyItem/trolleyItem'
import './trolleyDropdown.scss';

const TrolleyDropdown = ({ trolleyItems, history, toggleTrolleyHidden }) => {
    // ref/hook to focus automatically on dropdown for dismissal onBlur
    const toggleRef = useRef(null);

    useEffect(() => {
        toggleRef.current.focus();
    }, []);

    return (
        <div autoFocus className="trolley-dropdown" tabIndex="1" ref={toggleRef} onBlur={toggleTrolleyHidden}>
            <div className="trolley-items">
                <div className="trolley-header">Trolley Items</div>
                {trolleyItems.length > 0 ?
                    trolleyItems.map(item => item.quantity > 0 && <TrolleyItem item={item.newItem} quantity={item.quantity} />) :
                    <div className="trolley-sub-header">No items in your trolley</div>
                }
            </div>
            <Button onMouseDown={() => {
                history.push('/checkout')
            }} style={{ textDecoration: 'none' }}>Go to checkout</Button>
        </div>
    );
};

const mapStateToProps = ({ trolley }) => {
    return {
        trolleyItems: trolley.trolleyItems,
        trolleyTotal: trolley.trolleyTotal
    }
}

const mapDispatchToProps = dispatch => ({
    toggleTrolleyHidden: () => dispatch(toggleTrolleyHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrolleyDropdown));