import { ListGroup, Navbar ,Button} from 'flowbite-react'
import React, { useEffect } from 'react'
import Jumbotron from './components/Jumbotron'
import Products from './components/Products'
import { useDispatch, useSelector } from 'react-redux'
import { products } from './state/Actions/ProductActions'



function App() {
  const dispatch = useDispatch()
  const productstate = useSelector(state=> state.product)
  const {isRequest,isSuccess, errorMessage, products:productsData} = productstate

  useEffect(()=>{
    dispatch(products())
   

  },[])

  return (
    <div>

<div className="">
<Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
       
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    <Jumbotron/>

    <div className='container mx-auto mt-4'>
      <h2 className='font-bold text-4xl'>Latest Products</h2>
    </div>


    {isRequest && <div className="alert">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>loading</span>
    </div>}

    {isSuccess &&  (<Products products={productsData}/>)}

    
     
    </div>

    
    </div>
  )
}

export default App





