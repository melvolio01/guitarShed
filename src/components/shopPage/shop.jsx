import React, { Component } from 'react';
import Preview from '../../components/preview/preview'
import SHOP_DATA from './shopData';

class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { guitarType } = this.props;
        const { collections } = this.state;
        return (<div className="shop-page">
            {collections.map(({ id, ...otherCollectionProps }) => {
                if (guitarType) {
                    if (guitarType === otherCollectionProps.routeName) {
                        { return <Preview key={id} showAll={true} {...otherCollectionProps} /> }
                    }
                } else {
                    return <Preview key={`a${id}`} {...otherCollectionProps} />
                }
            })
            }
        </div>
        );
    }
}

export default Shop;