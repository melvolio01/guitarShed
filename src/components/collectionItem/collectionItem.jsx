import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Button from '../button/button';
import { addItemToTrolley } from '../../redux/trolley/trolley.action'
import './collectionItem.scss'

const CollectionItem = ({ item, addItemToTrolley }) => {
    const { id, name, price, imageUrl } = item;
    const localUrl = `/assets/images/${imageUrl}.jpg`;
    return (
        <Fragment>
            <div key={id} className="collection-item">
                <p>{name}</p>
                <div className="item-image" style={{ backgroundImage: `url(${localUrl})` }}></div>
                <p>£{price}</p>
                <Button inverted onClick={() => addItemToTrolley(item)}>Add to trolley</Button>
            </div>
        </Fragment>
    );
};

const mapDispatchToProps = dispatch => ({
    addItemToTrolley: item => dispatch(addItemToTrolley(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);