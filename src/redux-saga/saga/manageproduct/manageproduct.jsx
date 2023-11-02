import { call, put } from "redux-saga/effects";
import { deleteProduct, getProduct, postProduct, updateProduct } from "../../product/api/api";
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_SUCCESS } from "../../product/action/action";

export function* handleGetProduct(action){

    console.log(action,"manage from action");
    try{
        const res=yield call(getProduct,action)
        const data=res.data
        const status=res.status

        if(status===200|| status===201){
            yield put({type:GET_PRODUCT_SUCCESS,data})
        }else{
            yield put({type:GET_PRODUCT_ERROR,data})
        }
    }catch(err){
        yield put({type:GET_PRODUCT_ERROR,err})
        
    }
}

export function* handlePostProduct(action){
    try{
        const res=yield call(postProduct,action)
        const data=res.data
        const status=res.status

        if(status===200|| status===201){
            yield put({type:POST_PRODUCT_SUCCESS,data})
        }else{
            yield put({type:POST_PRODUCT_ERROR,data})
        }
    }catch (error){
        yield put({type:POST_PRODUCT_ERROR,error})
    }
}

export function* handleDeleteProduct(action) {
    try {
        const res = yield call(deleteProduct, action)
        const status = res.status
        const data = res.data
        console.log(res.data, "managagagagagag");

        if (status === 201 || status === 200) {
            yield put({ type: DELETE_PRODUCT_SUCCESS, data })
        } else {
            yield put({ type: DELETE_PRODUCT_ERROR, data })
        }
    } catch (err) {
        yield put({ type: DELETE_PRODUCT_ERROR, err })

    }
}
export function* handleUpdateProduct(action) {
    try {
        const res = yield call(updateProduct, action)
        const status = res.status
        const data = res.data
        console.log(res.data,action, "managagagagagag");

        if (status === 201 || status === 200) {
            yield put({ type: UPDATE_PRODUCT_SUCCESS, data })
        } else {
            yield put({ type:UPDATE_PRODUCT_ERROR, data })
        }
    } catch (err) {
        yield put({ type: UPDATE_PRODUCT_ERROR, err })

    }
}
