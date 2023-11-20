import axios from "axios";

export const getAllProducts = () => async dispatch => {

    dispatch({type: 'GET_PRODUCTS_REQUEST'});

    try {
        const response = await axios.get('https://bakers-nest.onrender.com/api/products/getallproducts');
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: response.data});
    } catch (error) {
        dispatch({type: 'GET_PRODUCTS_FAILED', payload: error});
    }

}