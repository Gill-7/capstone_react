import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'


function Image({className, img}) {

    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart} = useContext(Context)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (hovered) {
            return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
        }
    }

    const cartIcon = hovered && <i className="ri-add-circle-line cart"
                                    onClick={() => addToCart(img)}
    ></i>

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url}  alt='pics' className="image-grid" />

            {heartIcon()}
            {cartIcon}

        </div>
    )
}

Image.propTypes = {
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    }),
    className: PropTypes.string,
}

export default Image