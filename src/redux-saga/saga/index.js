import { all } from "@redux-saga/core/effects";
import { deleteProductSaga, getProductSaga, postProductSaga, updateProductSaga } from "./root/rootproduct";

export function* rootSaga() {
    yield all([getProductSaga(), postProductSaga(), deleteProductSaga(), updateProductSaga()]);
}