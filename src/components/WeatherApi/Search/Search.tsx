import { useAppDispatch } from 'src/hooks/hooks'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { setCityWeatherApi } from 'src/store/features/weatherApiSlice'

import s from './search.module.scss'

const Search = () => {

  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const handleChange = (event: any) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    if(value){
      dispatch(setCityWeatherApi(value))
      setValue('')
    }    
  }

  const handleSubmit = (event: any) => {
    if(!value) return;
    if(event.key === 'Enter'){
        dispatch(setCityWeatherApi(value))
        setValue('')           
    }
  }

  return (
   <>
     <div className={s.search}>
        <input 
          type="text" 
          placeholder='Search...'
          value={value} 
          onChange={handleChange} 
          onKeyPress={handleSubmit}
        />
        <FiSearch onClick={handleClick}/>   
     </div>    
   </>
  )
}

export default Search