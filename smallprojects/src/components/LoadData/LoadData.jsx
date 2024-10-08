
import React, { useEffect, useState } from 'react'
import './loadData.css'
export default function LoadData() {
    const[loading , setLoading] = useState(true);
    const[products , setProducts] = useState([]);
    const[count , setCount] = useState(0);
    const[disableButton , setDisableButton] = useState(false)
    useEffect( () =>{
        async function fectchData(){
            try{
                const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count*20}`);
                const data = await response.json();
                
                const product = data.products;
                console.log(product);
                setProducts([...products, ...product]);
                setLoading(false);
            }
            catch(e){
                console.log(e.message);
            }
        }
        fectchData()
        if(products.length === 100){
            setDisableButton(true);
            console.log(products.length)
        }
    }, [count])
    
    if(loading){
        return <div>Loading...</div>
    }
  return (
    <div>
        <div className='product-container'>
        {
            products && products.length > 0 ? (
                products.map((item, index) => {
                    return (
                        <div key={item.id || index} className='product'>
                            <img src={item.thumbnail} alt={item.title} className='img' />
                            <p className='title'>{item.title}</p>
                        </div>
                    );
                })
            ) : (
                <div>hello</div>
            )
        }       
        </div>
        <div className='button-container'>
            <button className='button' disabled = {disableButton === true} onClick={() => setCount(count+1)}>Load More</button>
        </div>
    </div>
  )
}
