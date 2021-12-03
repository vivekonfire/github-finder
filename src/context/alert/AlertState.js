import React, {useReducer} from 'react';
import AlertContext from './alertcontext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT, REMOVE_ALERT
} from '../types';

const AlertState = props =>
{
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (msg, type) => {
        if(msg === ''){
            dispatch({
                type:REMOVE_ALERT,
            })
        }
        else{
            dispatch({
                type: SET_ALERT,
                payload: {msg, type}
            })
        }
      }

    return <AlertContext.Provider
        value={{
            alert: state,
            setAlert,
        }}
    >
        {props.children}
    </AlertContext.Provider>
}

export default AlertState; 