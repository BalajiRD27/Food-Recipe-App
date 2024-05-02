import React ,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import RecipeList from './RecipeList'

const Home = () => {
  const {recipeList,loading} =useContext(GlobalContext)

  if(loading) return <div className='font-semibold'>Loading...Please Wait</div> 
  return (
    <div className='py-8 mx-auto container flex flex-wrap justify-center gap-10'>
   {
    recipeList && recipeList.length>0 ?
    recipeList.map((item)=> <RecipeList key={item.id} item={item} /> ): <div className='font-semibold'>Nothing to Show ..Search Something</div>
   } 
    </div>
  )
}

export default Home