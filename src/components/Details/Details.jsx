import React,{useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState';

const Details = () => {
  const {id} =useParams();
  // console.log(params)

  const {recipeDetails,setRecipeDetails,handleFavorites,favoritesList}= useContext(GlobalContext)

  useEffect(()=>{
    async function getRecipeDetails(){
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data= await response.json()
      if(data?.data){
        setRecipeDetails(data?.data?.recipe)
      }
      console.log(recipeDetails)
    }

    getRecipeDetails()
  },[id])
  return (
    <div className='flex flex-col gap-6'>
    <div className='container mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-2'>
      <div className='w-100 h-84 p-4 overflow-auto'>
        <img className='w-full h-full object-cover block group-hover:scale-105 duration-300' src={recipeDetails?.image_url}></img> 
      </div>
      <div className='p-4'>
      <div className='flex gap-3 p-4 mx-auto items-center'>
        <span>
          {recipeDetails?.publisher}
        </span>
        <h1 className='row-start-1 text-blue-600 uppercase font-bold text-xl'> {recipeDetails?.title}</h1>
       
      </div>
        <span className='font-semibold text-black'>Ingredients:</span>
        <ul className='flex flex-col gap-3'>
          {
            recipeDetails?.ingredients.map((item)=>
          <li>
          <span className='font-semibold text-black'>{item.quantity} {item.unit}</span>
          <span className='font-semibold text-black'>{item.description}</span>
          </li>
        )
          }
        </ul>
      </div>
        <div className='mx-auto'>
          <button onClick={()=>handleFavorites(recipeDetails)} className='p-3 bg-green-500 text-white font-semibold rounded-full tracking-wider'>
            {
             favoritesList.findIndex(item=> item.id === recipeDetails.id) !==-1 ? 'Save as Favorites' : 'Remove from Favorites'
            }
          </button>
        </div>
      </div>
     
      
    </div>
  )
}

export default Details