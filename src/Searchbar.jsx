import React from 'react'

const Searchbar = ({setSearchTerm}) => {
const handel=(e)=>{
  e.preventDefault()
  const newsearch=e.target.elements.search.value
  if (!newsearch) return
 setSearchTerm(newsearch)
  
}
  return (
    <section className='search'>
      <h1>Unsplash images</h1>
      <form onSubmit={handel}>
        <input type="text" placeholder='cat' name='search' className='form-input search-input' />
        <button className='btn' type='submit'>submit</button>
      </form>

    </section>
  )
}

export default Searchbar
