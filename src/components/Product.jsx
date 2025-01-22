import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {remove,add} from '../redux/Slices/cartSlice'
import { toast } from 'react-hot-toast';
export const Product = ({post}) => {
   const dispatch=useDispatch();
   function addToCart(){
    dispatch(add(post));
    toast.success("Item added to cart")
   }
   function removeFromCart(){
    dispatch(remove(post.id));
    toast.error("Item removed from cart")
   }
    const { cart } = useSelector((state) => state);
    
  return (
    <div className='group flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-xl border border-gray-700'>
        <div>
            <p className='text-grey-700 font-semibold text-lg text-left truncate w-40 mt-1'>
               {post.title}
            </p>
        </div>
        <div>
            <p className='w-40 text-grey-400 font-normal text-[10px] text-left'>
               {post.description.split(" ").slice(0,10).join(" ")+"..."}
            </p>
        </div>
        <div className='h-[180px]'>
           <img className='h-full w-full' src={`${post.image}`}/>
        </div>
        <div className='flex justify-between gap-12 items-center w-full mt-5'>
        <div>
         <p className='text-green-600 font-semibold items-center w-full '>${post.price}</p>
        </div>
        <div>
          {
            cart.some((p)=>p.id===post.id) ?<button className='text-gray-700 p-1 px-3 uppercase border-2 border-gray-700 text-[12px] font-semibold rounded-full transition duration-200 ease-in  group-hover:text-white  group-hover:bg-gray-700' onClick={removeFromCart}>Remove Item</button>  : <button className='text-gray-700 p-1 px-3 uppercase border-2 border-gray-700 text-[12px] font-semibold rounded-full transition duration-200 ease-in  group-hover:text-white  group-hover:bg-gray-700' onClick={addToCart}>Add to cart</button> 
           }
        </div>
        </div>
        
          
    </div>
  )
}
