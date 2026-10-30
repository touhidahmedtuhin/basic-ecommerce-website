import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const Products = () => {
    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data.products)
        })
        .catch((error)=>{
            console.log(error); 
        })
    },[])
    const handleProductDetails = (id,product)=>{
        navigate(`/products/${id}`,{state:product})
        console.log(product);
        
    }
  return (
    <div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-2">
            {product.map((item)=>(
            <div key={item.id} className="bg-gray-300" >
                <img src={item.images} alt={item.title} className="h-50"/>
                <h3 className="text-center">{item.title}</h3>
                <p>Category :{item.category}</p>
                <p className="line-through text-red-500">${item.price}</p>
                <p >Price: ${item.discountPercentage}</p>
                <p>Description:{item.description.substring(0,100)}...</p>
                <button onClick={()=>handleProductDetails(item.id,item)} className="bg-green-500 px-3 rounded text-white cursor-pointer">Show details</button>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Products