import React from 'react';
import './checkout.scss';
import CheckoutItem from '../checkoutItem/checkoutItem';
import ToggleUpDown from '../toggleUpDown/toggleUpDown';
import Button from '../button/button';
import {
    addItemToTrolley, removeSingleItemFromTrolley,
    removeAllItemInstancesFromTrolley, updateTrolleyTotal
} from '../../redux/trolley/trolley.action';
import { showModal, hideModal } from '../../redux/modal/modal.action';
import { connect } from 'react-redux';

const Checkout = ({ trolleyItems,
    trolleyTotal,
    modalVisible,
    showModal,
    hideModal,
    addItemToTrolley,
    removeSingleItemFromTrolley,
    removeAllItemInstancesFromTrolley,
    updateTrolleyTotal }) => {
    console.log(trolleyTotal)
    updateTrolleyTotal(calculateTotalCost(trolleyItems))
    return (
        < div >
            <h2>Checkout</h2>
            <div>
                <div className={modalVisible ? "show-modal" : "hide-modal"}>
                    <div onClick={hideModal}><p id="dismiss">x</p><div id="coming-soon">More stock soon...</div></div>
                </div>
                {trolleyItems.map(item => {
                    const { newItem, quantity } = item;
                    return quantity > 0 &&
                        <div className="checkout-items">
                            <CheckoutItem item={newItem} />
                            <div className="quantity-controls">
                                <div className="toggle-controls">
                                    <ToggleUpDown
                                        onClick={() => quantity > 1 ? removeSingleItemFromTrolley(item) :
                                            removeAllItemInstancesFromTrolley(item)} >-</ToggleUpDown>
                                    {quantity}
                                    <ToggleUpDown
                                        onClick={() => addItemToTrolley(newItem)} >+</ToggleUpDown>
                                </div>
                                <ToggleUpDown
                                    onClick={() => removeAllItemInstancesFromTrolley(item)} >x</ToggleUpDown>
                            </div>
                            <p id="subtotal">{`Subtotal: £${newItem.price * quantity}`}</p>
                        </div>
                })}
            </div>
            <div className="trolley-total">
                <div>
                    {trolleyTotal > 0 && <div className="pay">
                        <p>Total: £{trolleyTotal}</p>
                        <Button id="pay-now" onClick={showModal}> Pay Now</Button>
                    </div>}
                </div>

            </div>
        </div >
    );
};

const calculateTotalCost = trolleyItems => {
    return Object.values(trolleyItems).reduce((total,
        { quantity, newItem }) => total + (quantity * newItem.price), 0)
}

const mapStateToProps = ({ trolley: { trolleyItems, trolleyTotal }, modal: { modalVisible } }) => ({
    trolleyItems,
    trolleyTotal,
    modalVisible
})

const mapDispatchToProps = dispatch => ({
    addItemToTrolley: item => dispatch(addItemToTrolley(item)),
    removeSingleItemFromTrolley: item => dispatch(removeSingleItemFromTrolley(item)),
    removeAllItemInstancesFromTrolley: item => dispatch(removeAllItemInstancesFromTrolley(item)),
    updateTrolleyTotal: total => dispatch(updateTrolleyTotal(total)),
    showModal: () => dispatch(showModal()),
    hideModal: () => dispatch(hideModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

