import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import RecipeList from '../Home/RecipeList'

const Favorites = () => {
  const {favoritesList} =useContext(GlobalContext)
  
  return (
    <div className='py-8 mx-auto container flex flex-wrap justify-center gap-10'>
   {
    favoritesList && favoritesList.length>0 ?
    favoritesList.map((item)=> <RecipeList key={item.id} item={item} /> ): <div className='font-semibold'>Nothing is added in favorites</div>
   } 
    </div>
  )
}

export default Favorites