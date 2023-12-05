const initialStateHme = {
    dataBlog: [],
}

const homeReducer = (state = initialStateHme, action) => {
    if(action.type === 'UPDATE_DATA_BLOG'){
        return {
            ...state,
            dataBlog: action.payload
        }
    }
    return state;
}

export default homeReducer;