import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collectionItem/collectionItem'
import './preview.scss';

const Preview = ({ title, items, showAll }) => {
    const [list, chuckSize] = [items, 4]
    const updatedItems = new Array(Math.ceil(list.length / chuckSize)).fill().map((_, i) => list.slice(i * chuckSize, i * chuckSize + chuckSize))
    return (
        <div className="collection-preview">
            <h2 className="title"><Link to={title} >{title}</Link></h2>
            <div className="preview">
                {!showAll ? items
                    .filter((item, index) => index < 4)
                    .map((item) => {
                        return <CollectionItem id={item.id} item={item} />
                    })
                    : updatedItems
                        .map((itemArray) => {
                            return <div className="outer-chuck-div">
                                <div className="inner-chuck-div">
                                    {itemArray.map((item) => {
                                        return <CollectionItem id={item.id} item={item} />
                                    })}
                                </div>
                            </div>
                        })
                }
            </div>
        </div>
    );
};

export default Preview;