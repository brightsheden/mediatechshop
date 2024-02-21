import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from '../state/Actions/ProductActions'
import { useParams } from 'react-router-dom'

function ProductDetails() {

  const {id} = useParams()
 
  const dispatch = useDispatch()
  const productstate = useSelector(state => state.productDetail)
  const {isRequest,isSuccess,errorMessage, product} = productstate

  useEffect(()=>{
    console.log(id)
    dispatch(getproduct(id))

  },[dispatch])
  return (
    <div>
        {/* v0 by Vercel. https://v0.dev/t/7jvhymXR56X */}
<div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
  <div className="grid gap-4 md:gap-10 items-start">
    <div className="block md:flex items-start">
      <div className="grid gap-4">
        <h1 className="font-bold text-3xl lg:text-4xl">
        {product.name}
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 fill-primary"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 fill-primary"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 fill-primary"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 fill-muted stroke-muted-foreground"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 fill-muted stroke-muted-foreground"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
        </div>
        <div>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="text-4xl font-bold ml-auto">${product.price}</div>
    </div>
    
    <div className="flex items-center">
      <button className="text-white bg-green-500 hover:bg-primary-dark font-semibold py-2 px-4 rounded-md">
        Add to Cart
      </button>
    </div>
  </div>
  <div className=" flex items-center justify-center mt-6">
    <img
      src={product.image}
      alt="CottonSculpt Prism Tee"
      className="object-contain max-w-full max-h-64 rounded-md"
    />
  </div>
</div>

    </div>
  )
}

export default ProductDetails