import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleTheme from './ToggleTheme'
import Searchbar from './Searchbar'
import Gellery from './Gellery'

function App() {
  const [searchTerm,setSearchTerm]=useState("cat")

  return (
<main>
  {/* <ToggleTheme/> */}
  <Searchbar setSearchTerm={setSearchTerm}/>
  <Gellery searchTerm={searchTerm}/>
</main>
  )
}

export default App
