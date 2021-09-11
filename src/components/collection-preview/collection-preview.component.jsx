import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.style.scss';

const CollectionPreview = ({title, items}) => {
    return (
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {items.filter((item, idx) => idx < 4).map(({id, ...itemProps}) => (
                <CollectionItem key={id} {...itemProps}></CollectionItem>
            ))
            }
        </div>
    </div>)
}

export default CollectionPreview;