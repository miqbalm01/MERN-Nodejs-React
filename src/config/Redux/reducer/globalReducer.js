const initialState = {
    name: 'Iqbal'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'Maulana'
        }
    }
    return state;
}

export default globalReducer;