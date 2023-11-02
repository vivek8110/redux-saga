import axios from "axios";
import { BASE_URL, DELETE_API_URL, GET_API_URL, POST_API_URL, UPDARE_API_URL } from "../../constant";


export function getProduct(){
    const gproduct=axios.get(BASE_URL+GET_API_URL).then((res)=>{
        console.log(res,"get api res");

        const data=res.data
        const status=res.status

        return{
            data,status
        }
    }).catch((err)=>{
        console.log(err,"get api error");
    })

    return gproduct
}

export function postProduct(action){
    const pproduct=axios.post(BASE_URL+POST_API_URL,action.payload).then((res)=>{
        const data=res.data
        const status=res.status
        return{
            data,status
        }
    }).catch((err)=>{
        console.log(err,"post api error");
    })

    return pproduct
}

// export function deleteProduct(action){

//     console.log(action,"api action");
//     const dproduct=axios.delete(BASE_URL+DELETE_API_URL,action.payload).then((res)=>{

//             const data=action.payload
//             const status=res.status
//             console.log(res.data,"api data");
//             return{
//                 data,status
//             }
//     }).catch((err)=>{
//         console.log(err,"err from delete product api");
//     })
//     return dproduct
// }


export function deleteProduct(action) {

    // console.log(action, "delete product")

    const deletedata = axios.delete(BASE_URL + DELETE_API_URL + action.payload).then((res) => {

        const data = action.payload
        const status = res.status

        console.log(res, "rerererere");

        return {
            data, status
        }
    }).catch((err) => {
        console.log(err, "apideleteerr");
    })
    return deletedata
}
export function updateProduct(action) {

    console.log(action, "update product")
    const id=action.payload.id
    const updatedata = axios.put(`${BASE_URL}${UPDARE_API_URL}${id}`,action.payload).then((res) => {

        const data = res.data
        const status = res.status

        console.log(data, "rerererere");

        return {
            data, status
        }
    }).catch((err) => {
        console.log(err, "apideleteerr");
    })
    return updatedata
}