import { useEffect, useState } from "react";

export default function useFetch(url){
    const[data , setData] = useState([]);
    const[loading , setLoading] = useState(true);
    const[errorMessage , setErrorMessage] = useState(null);

    useEffect(() =>{
        async function fetchData() {
            try{
                const response = await fetch(url);
                const data = await response.json();
                if(data && data.products && data.products.length > 0){
                    setData(data.products);
                }
                setLoading(false);
            }
            catch(error){
                setErrorMessage(error.Mmssage);
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return {data, loading , errorMessage};
}