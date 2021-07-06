import React, { useReducer } from 'react';

const AlertContext = React.createContext();

const AlertState = (props) => {
    const initailState = null
    const [state, dispatch] = useReducer(AlertReducer, initailState)


    const setAlert = (type, message) => {
        dispatch({ type: "SET_ALERT", payload: { type, message } })

        setTimeout(() => {
            dispatch({ type: "Remove_ALERT" })
        }, 5000)
    }

    return (
        <AlertContext.Provider value={{ alert: state, setAlert }}>
            {props.children}
        </AlertContext.Provider>
    )


}

const AlertReducer = (state, action) => {
    switch (action.type) {
        case "SET_ALERT":
            return action.payload;
        case "Remove_ALERT":
            return null
        default: return state
    }
}

export { AlertContext, AlertState }

