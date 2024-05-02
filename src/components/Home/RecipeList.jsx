import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = ({item}) => {
  return (
    <div className='flex flex-col gap-4 w-80 p-5 shadow-xl items-center overflow-hidden'>
            <h1 className=' text-blue-600 uppercase text-center font-bold text-xl h-2/5'>{item.title}</h1>
            <img alt={`${item?.title} image`} className='block overflow-hidden w-full h-60' src={item.image_url}></img>
            <h3 className='font-bold text-xl'>Price-$50</h3>
            <Link className=' text-white p-2 bg-gray-700 cursor-pointer font-semibold text-xl' to={`/item-details/${item?.id}`}>Recipe Details</Link>
    </div>
  )
}

export default RecipeList