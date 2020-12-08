import { combineReducers } from 'redux'; 
import  dataReducer  from './dataReducer'; 

const rootReducer = combineReducers({
    enhetsreg: dataReducer,
})

export default rootReducer;