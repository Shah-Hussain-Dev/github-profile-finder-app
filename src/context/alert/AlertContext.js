import {createContext,useReducer} from 'react';
import alertReducer from '../alert/AlertReducer'

const AlertContext = createContext()

export  const  AlertProvider = ({children})=>{
    const initialState = null;
    const [state,dispatch] = useReducer(alertReducer, initialState);
//set alert 
const setAlert = (type,msg)=>{
    dispatch({
        type: "SET_ALERT",
        payload : {type,msg}

})
setTimeout(()=>{dispatch({type: "REMOVE_ALERT"})},3000)
}
    return (
        <AlertContext.Provider value={{alert:state,setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext