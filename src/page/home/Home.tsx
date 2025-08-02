import { useState } from "react"
import Card from "../../component/Card"

const Home = () => {
  const  [product,setProduct] =useState([1,2,3,4,5])

  const setProducts = () => {
    setProduct([1,2,3])
  }
  return (
    <div className="flex flex-col justify-center items-center">
      {
        product.map((item)=>(
                <Card key={item}/>
        ))
      }
      <button onClick={setProducts}>set pro</button>
    </div>
  )
}

export default Home