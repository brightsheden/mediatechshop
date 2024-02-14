import { ListGroup, Navbar ,Button} from 'flowbite-react'
import React from 'react'
import Jumbotron from './components/Jumbotron'
import Products from './components/Products'

function App() {
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

    <Products/>
     
    </div>

    
    </div>
  )
}

export default App





