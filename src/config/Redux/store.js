import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer/reducer';
import { thunk } from 'redux-thunk';

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
const store = createStore(reducer, applyMiddleware(thunk));
export default store;