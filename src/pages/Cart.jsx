import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartItem } from '../components/CartItem'

export const Cart = () => {
  // console.log("This is store",store)
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  // console.log(cart)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  }, [cart])
  return (
    <div>
      {
        cart.length > 0
          ? (<div>
            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total items: {cart.length}</span>
              </p>
            </div>
          </div>)
        : (
            <div>
              <h1>
                No items present</h1>
              <Link to={'/'}>
                <button>
                  Shop Now
                </button>
              </Link>
              <div>
                <p>Total amount: {totalAmount}</p>
                <button>Check out now</button>
              </div>
            </div>
          )
      }
    </div>
  )
}
