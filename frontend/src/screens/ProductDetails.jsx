import React from 'react'

function ProductDetails() {
  return (
    <div>
        {/* v0 by Vercel. https://v0.dev/t/7jvhymXR56X */}
<div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
  <div className="grid gap-4 md:gap-10 items-start">
    <div className="hidden md:flex items-start">
      <div className="grid gap-4">
        <h1 className="font-bold text-3xl lg:text-4xl">
          CottonSculpt Prism Tee: The Cozy Chromatic Blend
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
          <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
        </div>
      </div>
      <div className="text-4xl font-bold ml-auto">$99</div>
    </div>
    <form className="grid gap-4 md:gap-10">
      <div className="grid gap-4 md:gap-10">
        <label className="text-sm font-semibold text-muted-foreground" htmlFor="size">
          Size
        </label>
        <select
          id="size"
          name="size"
          className="block w-full p-2 text-base border border-muted-foreground rounded-md"
        >
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>
      <div className="grid gap-4 md:gap-10">
        <label className="text-sm font-semibold text-muted-foreground" htmlFor="color">
          Color
        </label>
        <select
          id="color"
          name="color"
          className="block w-full p-2 text-base border border-muted-foreground rounded-md"
        >
          <option value="prism">Prism</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
        </select>
      </div>
    </form>
    <div className="flex items-center">
      <button className="text-white bg-green-500 hover:bg-primary-dark font-semibold py-2 px-4 rounded-md">
        Add to Cart
      </button>
    </div>
  </div>
  <div className=" flex items-center justify-center mt-6">
    <img
      src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437141.jpg?w=740&t=st=1707786072~exp=1707786672~hmac=a79d45f71a1866c18509a0fc719aed9214b3322fa2b1f33c23224e805b6d8acc"
      alt="CottonSculpt Prism Tee"
      className="object-contain max-w-full max-h-64 rounded-md"
    />
  </div>
</div>

    </div>
  )
}

export default ProductDetails