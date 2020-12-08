import axios from 'axios'; 
import { appex_url, searchBedriftURL } from '../api'

//Action Creator

export const loadData = () => async (dispatch) =>{
    //FETCH AXIOS
    const appex_data = await axios.get(appex_url()); 
    dispatch({
        type: "FETCH_DATA", 
        payload: {
            enhetsregisteret: appex_data.data,
        },
    });
};

export const fetchSearch = (org_nr) => async(dispatch) => {
    const searchedBedrift = await axios.get(searchBedriftURL(org_nr));
    dispatch({
        type: "FETCH_SEARCHED", 
        payload:{
            searched: searchedBedrift.data,
        }
    })
}