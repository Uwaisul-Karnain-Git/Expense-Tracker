/* If this is a larger application and if we had multiple resources, we better have separate States for those resources instead of 
having a 'Global State' */

import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: 300},
        {id: 3, text: 'Book', amount: -10},
        {id: 4, text: 'Camera', amount: 150}
    ]
}

// Create our 'Global Context', using the 'createContext'
export const GlobalContext = createContext(initialState);

/* In order for other components to have access to our 'Global State', we need to have a 'Provider'.
What a 'Provider' does is, it provides our 'State', it provides any 'actions' and stuff like that to the components that are 
wrapped around */

// Provider Component
export const GlobalProvider = ({ children }) => {
    // Reducer Function
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions - that are going to make calls to our 'reducer'
    const deleteTransaction = id => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    };

    const addTransaction = transaction => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    };

    return (<GlobalContext.Provider value={
        {
            transactions: state.transactions,
            deleteTransaction, // In order for us to use this action, we have to pass it down in our 'Provider'
            addTransaction
        }
    }>
        {/* This 'children' prop is going to be whatever we wrap inside our 'GlobalProvider' */}
        { children }    
    </GlobalContext.Provider>);
};


