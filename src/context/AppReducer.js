export default (state, action) => {
    /* 'Reducer' is a way to change our state and send it down to the components. We can't just change it, and we have to create a 
    'new state' and send it down */
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions] 
                // Here we need to return the 'Transactions' that are already there in addition to the new one which is in the 'payload'
            }
        default:
            return state;
    }
};