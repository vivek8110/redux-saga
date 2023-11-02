import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PROGRESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PROGRESS, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_PROGRESS, UPDATE_PRODUCT_SUCCESS } from "../action/action";



const initialstate={
    product:[],

    loaded:false,
    progress:false,
    error:null,
    duplicate:null
}

const productReducer =(state=initialstate,action)=>{

    console.log(action);

    switch (action.type) {
        case GET_PRODUCT_PROGRESS:{
            return{
                ...state,
                progress:true,
                loaded:false,
                error:null,

            }
        }
        case GET_PRODUCT_SUCCESS:{
            return{
                ...state,
                product:action.data,
                progress:false,
                loaded:true,
            }
        }
        case GET_PRODUCT_ERROR:{
            return{
                ...state,
                error:action.data,
                progress:false,
                loaded:false,

            }
        }

        case POST_PRODUCT_PROGRESS:{
            return{
                ...state,
                error:null,
                progress:true,
                loaded:false
            }
        }
        case POST_PRODUCT_SUCCESS:{
            return{
                ...state,
                error:null,
                product:state.product.concat(action.data),
                progress:false,
                loaded:true
            }
        }
        case POST_PRODUCT_ERROR:{
            return{
                ...state,
                error:action.data,
                progress:false,
                loaded:false
            }
        }
            case DELETE_PRODUCT_PROGRESS:{
                return{
                    ...state,
                    progress:true
                }
            }
            case DELETE_PRODUCT_ERROR:{
                return{
                    ...state,
                    error:action.data
                }
            }
            case DELETE_PRODUCT_SUCCESS:{
            return{
                ...state,
                product:state.product.filter(item => item.id !== action.data),
                loaded:true
            }
            }

            case UPDATE_PRODUCT_PROGRESS:{
                return{
                    ...state,
                    progress:true
                }
            }
            case UPDATE_PRODUCT_SUCCESS:{
                return{
                    ...state,
                    product:state.product.map((item)=>{
                        if(item.id===action.data.id){
                            return {...item,...action.data}
                        }else{
                            return item
                        }
                    }),
                    loaded:true
                }
            }
            case UPDATE_PRODUCT_ERROR:{
                return{
                    ...state,
                    error:action.data

                }
            }
        default:return state
    }

}

export default productReducer