import React, { useState,createContext } from 'react'

export const GlobalContext=createContext(null)

const GlobalState = ({children}) => {
    const [searchParams,setSearchParams] = useState('')
    const [loading,setLoading]=useState(false)
    const [recipeList,setRecipeList]= useState([])
    const [recipeDetails,setRecipeDetails]=useState(null)
    const [favoritesList,setFavoritesList] =useState([])

    function handleFavorites(currentItem){
      let copyfavs = [...favoritesList]
      const index= copyfavs.findIndex(item=>item.id === currentItem.id)
      if(index === -1){
        copyfavs.push(currentItem)
      }
      else{
        copyfavs.splice(index)
      }
      setFavoritesList(copyfavs)
     }
    console.log(favoritesList,'favorites')

    async function handleSubmit(event){
        event.preventDefault()
        try{
        setLoading(true)
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`)
        const data = await response.json()
        if(data?.data?.recipes){
            setRecipeList(data?.data?.recipes)
            setLoading(false)
            setSearchParams('')
        }
        }
        catch(e){
            console.log(e)
            setLoading(false)
        }
    } 
  return (
   <GlobalContext.Provider value={{searchParams,setSearchParams,recipeList,loading,handleFavorites,handleSubmit,recipeDetails,setRecipeDetails,favoritesList}}>{children}</GlobalContext.Provider>
  )
}

export default GlobalState