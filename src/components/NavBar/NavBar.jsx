import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'

const NavBar = () => {
    const {searchParams,setSearchParams,handleSubmit} = useContext(GlobalContext)
    console.log(searchParams)
  return (
    <div className='flex justify-between items-center container min-w-full mx-auto p-4 px-6 bg-yellow-300'>
        <h2 className='text-2xl font-semibold'>
        <NavLink to={'/'} className='text-black hover:text-gray-500' >FOOD RECIPE</NavLink>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='search'
            value={searchParams}
            onChange={(event)=>setSearchParams(event.target.value)}
            placeholder='Enter the item...'
            className='outline-none p-3 px-8 rounded-full shadow-lg shadow-red-100 focus:shadow-red-400  lg:w-96'
            >
            </input>
        </form>
        <ul className='flex gap-5'>
            <li>
                <NavLink to={'/'} className='text-black font-semibold hover:text-blue-800 duration-300' >Home</NavLink>   </li>
                <li> <NavLink to={'/favorites'} className='text-black font-semibold hover:text-gray-500' >Favorites</NavLink>  </li>
        </ul>
    </div>
  )
}

export default NavBar