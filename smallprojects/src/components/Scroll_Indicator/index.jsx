import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import './styles.css'
function Scroll({url = 'https://dummyjson.com/products?limit=100 '}) {
  const {data , loading , errorMessage} = useFetch(url);
  const [scrollPercent , setScrollPercent] = useState(0);
  function handleScrollPercentange(){
    const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const percent = (document.documentElement.scrollTop || document.body.scrollTop)/height;
    setScrollPercent(percent*100);
  }
  console.log(scrollPercent);
  useEffect(() =>{
    window.addEventListener('scroll' , handleScrollPercentange);

    return ()=>{
      window.removeEventListener('scroll' , () => {})
    }
  }, [])

  if(errorMessage){
    return <div>errorMessage</div>
  }
  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div style={{height:'100vh'}}> 
      <div className='header'>
        <h2 className='heading'>Custom Scroll Indicator</h2>
        <div className='customScroll'>
          <div style={{width:`${scrollPercent}%`}} className='scrollPercent'></div>
        </div>
      </div>
      <div className='children'>
      {
        data.length> 0 ? 
        data.map( (item) => {
          return(
            <p key={item.id}style={{textAlign:'center', padding:' 20px'}}>{item.title}</p>
          )
        })
        :null
      }
      </div>
      
    </div>
  )
}

export default Scroll