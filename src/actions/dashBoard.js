import ActionTypes from '../constants/ActionTypes';
import axios from 'axios';

export function fetchProducts() {
    let url = './products.json';
    return function (dispatch) {
        axios.get(url)
            .then(json => {
                dispatch(dispatchProducts(json.data.products));
            })
            .catch(error => {
                throw (error);
            })
    }
}

function dispatchProducts(products) {
    return {
        type: ActionTypes.LOAD_PRODUCTS,
        products
    }
}

export function updateProduct(item) {
    return function (dispatch, getState) {
        let products = getState().products.productList;
        let selectedProduct = products.map(function (product, i, all) {
            if (product.productId == item.productId) {
                all[i] = item;
            }
        })
        dispatch(updateProducts(products));
    }
}

function updateProducts(products) {
    return {
        type: ActionTypes.UPDATE_PRODUCTS,
        products
    }
}

export function addProduct(item) {
    return function (dispatch, getState) {
        let products = getState().products.productList;
        products.push(item);
        dispatch(dispatchProducts(products));
    }
}

export function reloadDashboard() {
    return {
        type: ActionTypes.RELOAD_DASHBOARD,
        reload: true
    }
}