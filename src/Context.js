import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [pic, setPic] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => { 
        fetch(url)
            .then(res => res.json())
            .then(data => setPic(data))
    }, [])

    return (
        <Context.Provider value={{pic}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}