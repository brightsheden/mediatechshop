/**
 * v0 by Vercel.
 * https://v0.dev/t/jsandbCFukF
 */
import React from 'react';

const CartScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 px-6 border-b lg:h-20 gap-4 dark:border-gray-800">
        <a className="flex items-center gap-2 font-semibold" href="#">
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
            className="h-6 w-6"
          >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
            <path d="M12 3v6"></path>
          </svg>
          <span className="">Acme Inc</span>
        </a>
        <a className="flex items-center ml-auto underline hover:no-underline" href="#">
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
            className="h-4 w-4"
          >
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>
          <span className="sr-only">Cart</span>
          <div className="whitespace-nowrap border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 translate-y-1 shrink-0 h-6 w-6 rounded-full flex items-center justify-center">
            3
          </div>
          <span className="ml-1.5">Cart</span>
        </a>
      </header>
      <main className="flex-1 grid grid-rows-[auto_auto_1fr_auto] gap-4 p-4 md:gap-8 md:p-6">
        <div className="mx-auto max-w-5xl grid gap-4">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          {/* ... rest of your HTML content ... */}
          <div className="border rounded-lg shadow-sm">
          <div className="grid grid-cols-[1fr_100px_100px_100px_100px_100px] items-start p-4 gap-4">
    <div className="flex items-start gap-4">
      <img src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437141.jpg?w=740&t=st=1707786072~exp=1707786672~hmac=a79d45f71a1866c18509a0fc719aed9214b3322fa2b1f33c23224e805b6d8acc"width="150" height="150" alt="Product image" className="aspect-square rounded-md object-cover" />
      <div className="grid gap-1.5">
        <h2 className="font-semibold text-base md:text-xl">Glimmer Lamps</h2>
        <div className="text-sm md:text-base">SKU: 348-293</div>
      </div>
    </div>
    <div className="flex flex-col items-end justify-between gap-2">
      <div className="font-semibold text-lg">$60.00</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-0.5">
          <label htmlFor="quantity-1" className="sr-only">Quantity</label>
          <select name="quantity-1" id="quantity-1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
          <span className="sr-only">Delete</span>
        </button>
      </div>
    </div>
  </div>
  <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-100 h-[1px] w-full"></div>
  <div className="grid grid-cols-[1fr_100px_100px_100px_100px_100px] items-start p-4 gap-4">
    <div className="flex items-start gap-4">
      <img src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437141.jpg?w=740&t=st=1707786072~exp=1707786672~hmac=a79d45f71a1866c18509a0fc719aed9214b3322fa2b1f33c23224e805b6d8acc"width="150" height="150" alt="Product image" className="aspect-square rounded-md object-cover" />
      <div className="grid gap-1.5">
        <h2 className="font-semibold text-base md:text-xl">Glimmer Lamps</h2>
        <div className="text-sm md:text-base">SKU: 348-293</div>
      </div>
    </div>
    <div className="flex flex-col items-end justify-between gap-2">
      <div className="font-semibold text-lg">$60.00</div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-0.5">
          <label htmlFor="quantity-1" className="sr-only">Quantity</label>
          <select name="quantity-1" id="quantity-1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
          <span className="sr-only">Delete</span>
        </button>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-2 items-start p-4 gap-4">
    <div className="text-sm md:text-base">Subtotal</div>
    <div className="ml-auto font-semibold">$109.00</div>
  </div>
  <div className="flex items-start p-4 gap-4">
    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto bg-black text-white">
      Proceed to Checkout
    </button>
  </div>
</div>
        </div>
      </main>
    </div>
  );
};

export default CartScreen;



