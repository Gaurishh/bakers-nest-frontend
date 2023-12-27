export const getAllProductsReducer = (state={products : []}, action) => {

    switch(action.type){
        case 'GET_PRODUCTS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_PRODUCTS_SUCCESS': return {
            loading: false,
            products: action.payload
        }
        case 'GET_PRODUCTS_FAILED': return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const getProductByIdReducer = (state={products : []}, action) => {
    switch(action.type){
        case 'GET_PRODUCTBYID_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_PRODUCTBYID_SUCCESS': return {
            loading: false,
            product: action.payload
        }
        case 'GET_PRODUCTBYID_FAILED': return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const addProductReducer = (state={}, action) => {

    switch(action.type){
        case 'ADD_PRODUCT_REQUEST': return {
            loading: true,
            ...state
        }
        case 'ADD_PRODUCT_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'ADD_PRODUCT_FAILED': return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const editProductReducer = (state={}, action) => {

    switch(action.type){
        case 'EDIT_PRODUCT_REQUEST': return {
            editLoading: true,
            ...state
        }
        case 'EDIT_PRODUCT_SUCCESS': return {
            editLoading: false,
            editSuccess: true
        }
        case 'EDIT_PRODUCT_FAILED': return {
            editLoading: false,
            editError: action.payload
        }
        default: return state
    }
}