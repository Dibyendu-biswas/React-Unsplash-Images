import React, { useState } from 'react'
import {BsFillMoonFill,BsFillSunFill} from "react-icons/bs"
const ToggleTheme = () => {
  const [isDarkTheme,setIsDarkTheme]=useState(false)
const themeChange=()=>{
  const theme= !isDarkTheme
  const body = document.querySelector("body")
  body.classList.toggle("dark-theme",theme)
  console.log(body);
  setIsDarkTheme(theme)
}
  return (
    <section className='dark-theme'>
        <button className='btn' onClick={themeChange}>{
          isDarkTheme ? <BsFillSunFill/>:<BsFillMoonFill/>
          } </button>
    </section>
  )
}

export default ToggleTheme