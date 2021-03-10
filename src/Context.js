import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [pic, setPic] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const url = "https://raw.githubusercontent.com/Gill-7/capstone_react/main/public/images.json"

    useEffect(() => { 
        fetch(url)
            .then(res => res.json())
            .then(data => setPic(data))
    }, [])

    function toggleFavorite(id) {
        const updatedArr = pic.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })

        setPic(updatedArr)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    console.log(cartItems)

    return (
        <Context.Provider value={{pic, toggleFavorite, addToCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}