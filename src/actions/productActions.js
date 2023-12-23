import axios from "axios";

export const filterProducts=(searchkey , category)=>async dispatch=>{
  
    dispatch({type:'GET_PRODUCTS_REQUEST'})

    try {
        var filteredProducts = '';
        const response = await axios.get('https://bakers-nest.onrender.com/api/products/getallproducts')
        var lowerSearchKey = searchkey.toLowerCase()
        filteredProducts = response.data.filter(product=>product.name.toLowerCase().includes(lowerSearchKey))

        if(category!='All'){
            filteredProducts = filteredProducts.filter(product=>product.category==category)            
        }
        dispatch({type:'GET_PRODUCTS_SUCCESS' , payload : filteredProducts})
    } catch (error) {
        console.log(error)
        dispatch({type:'GET_PRODUCTS_FAILED' , payload : error})
    }

}

export const getAllProducts = () => async dispatch => {

    dispatch({type: 'GET_PRODUCTS_REQUEST'});

    try {
        const response = await axios.get('https://bakers-nest.onrender.com/api/products/getallproducts');
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: response.data});
    } catch (error) {
        dispatch({type: 'GET_PRODUCTS_FAILED', payload: error});
    }

}