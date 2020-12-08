const initState = {
    enhetsregisteret: [],
    searched: [],
}

const dataReducer = (state=initState,action) => {
    switch(action.type){
        case "FETCH_DATA": 
            return {...state, 
                    enhetsregisteret: action.payload.enhetsregisteret
                };
            case "FETCH_SEARCHED": 
                return{
                    ...state,
                    searched: action.payload.searched
                }
        default:
            return {...state}
    }
}

export default dataReducer;