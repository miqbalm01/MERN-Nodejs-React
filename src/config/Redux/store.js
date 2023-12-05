const { createStore, combineReducers } = require('redux');

// Double Reducer
const initialStateHme = {
    dataBlogs: [],
}

const HomeReducer = (state = initialStateHme, action) => {
    if(action.type === 'UPDATE_DATA_BLOG'){
        return {
            ...state,
            dataBlogs: action.payload
        }
    }
    return state;
}

const initialState = {
    name: 'Iqbal'
}

const GlobalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'Maulana'
        }
    }
    return state;
}

const reducer = combineReducers({HomeReducer, GlobalReducer})

// Single Reducer
// const initialState = {
//     dataBlogs: [],
//     name: 'Iqbal'
// }

// const reducer = (state = initialState, action) => {
//     if(action.type === 'UPDATE_DATA_BLOG'){
//         return {
//             ...state,
//             dataBlogs: action.payload
//         }
//     }
//     if(action.type === 'UPDATE_NAME'){
//         return {
//             ...state,
//             name: 'Maulana'
//         }
//     }
//     return state;
// }

const store = createStore(reducer);
export default store;