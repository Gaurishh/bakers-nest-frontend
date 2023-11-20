import axios from "axios";

export const getUserOrders = (user) => async (dispatch, getState) => {

    dispatch({type: 'GET_USER_ORDERS_REQUEST'});

    try {
        const response = await axios.post('https://bakers-nest.onrender.com/api/orders/getuserorders', {userId: user.email});
        console.log(response);
        dispatch({type: 'GET_USER_ORDERS_SUCCESS', payload: response.data});
    } catch (error) {
        dispatch({type: 'GET_USER_ORDERS_FAILED', payload: error});
    }

};
