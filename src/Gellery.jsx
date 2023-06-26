import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const url =`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`
console.log(import.meta.env.VITE_API_KEY);

const Gellery = ({searchTerm}) => {
  
const  response=useQuery({
  queryKey:["images" ],
  queryFn:async ()=>{
    const result =  await axios.get(`${url}&query=${searchTerm}`)
    return result.data;
  }
});
if (response.isLoading){
  return <section className='loading'><h4>Loading...</h4></section>
}
if (response.isError){
  return <section className='error'><h4>there was an error...</h4></section>
}

const results = response.data.results
if(results.length < 1){
  return <section>
    <h4 className='error'>No results found....</h4>
  </section>

}
  return (
    <section className='gellery'>
      {
        results.map((item)=>{
            const url = item?.urls?.regular
          return(
            <img src={url} alt={item.alt_description} key={item.id} />
          )
        })
      }
    </section>
  )
}

export default Gellery