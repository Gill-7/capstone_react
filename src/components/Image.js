import React from 'react'
//import Photos from '../Pages/Photos'

function Image({className, img}) {
    return (
        <div className={`${className} image-container`}>
            <img src={img.url}  alt='pics' className="image-grid" />
        </div>
    )
}

export default Image