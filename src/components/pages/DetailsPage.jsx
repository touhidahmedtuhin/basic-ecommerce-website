import { useLocation } from "react-router-dom"


const DetailsPage = () => {
    const {state} = useLocation()
  return (
    <div className="bg-gray-200 rounded w-70">
        <img src={state.images} alt={state.title} className="h-50"/>
        <h2>{state.title}</h2>
        <p>Category: {state.category}</p>
        <p className="line-through text-red-500">${state.price}</p>
        <p>Price ${state.discountPercentage}</p>
        <p>Description: {state.description}</p>
    </div>
  )
}

export default DetailsPage