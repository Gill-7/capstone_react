import React, {useContext} from "react"
import {Context} from '../Context'
import Image from '../components/Image'
import {getClass} from '../utils'

function Photos() {

    const {pic} = useContext(Context)

    const images = pic.map((img, i) => (
        <Image 
            key={img.id} 
            img={img} 
            className={getClass(i)} 
        /> 
    ))

    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos