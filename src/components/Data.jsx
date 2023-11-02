import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, UPDATE_PRODUCT_PROGRESS } from '../redux-saga/product/action/action'


function Data() {

    const [newdata,setNewData]=useState({})

    const dispatch=useDispatch()
    const data=useSelector(state=>state.productReducer)


    useEffect(()=>{
        dispatch({type:GET_PRODUCT_PROGRESS})
    },[])

    const onchange=(e)=>{

        setNewData({
            ...newdata,[e.target.name]:e.target.value
        })
        console.log(newdata);
    }
    const submithandler=()=>{
        dispatch({type:POST_PRODUCT_PROGRESS,payload:newdata})
    }
    
    const deletehandler=(id)=>{
        dispatch({type:DELETE_PRODUCT_PROGRESS,payload:id})
        console.log(id,"delete product from data.jsx");
    }
    
    const updatehandler=(p)=>{
        setNewData(p)
    }
    const edithandler=()=>{

        const id=newdata.id
        dispatch({type:UPDATE_PRODUCT_PROGRESS,payload:newdata})

        console.log(newdata,id,"data jsx updated newdata");
    }
  return (
        <div>
            <div className="w-1/4 p-5 mx-auto">
                <div className="mb-4">
                    <label htmlFor="author" className="text-lg mb-5 font-medium text-gray-700 block">Author:</label>
                    <input type="text" value={newdata.author} onChange={onchange} id="author" name="author" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter the author's name" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="text-lg mb-5 font-medium text-gray-700 block">Title:</label>
                    <input type="text" value={newdata.title} onChange={onchange} id="title" name="title" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter the book title" required />
                </div>
                <div className="text-center">
                    <button type="submit"  onClick={submithandler}  className=" mx-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                    <button type="submit" onClick={edithandler} className=" mx-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
                </div>
            </div>


            <div className="flex grid gap-5 grid-cols-5 px-5">
        {
            data.product.map((p)=>{
                return(
                    <>
                        <div className="w-1/10 border-2 px-5 py-10 text-center">
                                <h1><span className='font-semibold text-lg'>author :</span> {p.author}</h1>
                                <h1><span className='font-semibold text-lg'>title :</span> {p.title}</h1>
                                <div className="flex justify-center">
                                <button onClick={()=>deletehandler(p.id)} className='mt-5 mx-3 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded' >Delete</button>
                                <button onClick={()=>updatehandler(p)} className='mt-5 mx-3 p-2 bg-green-500 hover:bg-lime-600 text-white rounded' >Update</button>
                                </div>
                        </div>
                    </>
                )
            })
        
        }
            </div>
        
        
        </div>
  )
}

export default Data