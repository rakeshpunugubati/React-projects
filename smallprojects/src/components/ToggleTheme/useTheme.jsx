import { useEffect, useState } from "react";

function useTheme(key , defaultValue){
    const[value , setValue] = useState(() =>{
        let CurrentValue;
        try{
            CurrentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));

        }
        catch(error){
            console.log(error);
            CurrentValue = defaultValue;
        }

        return CurrentValue;
    });
    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [key , value])

    return [value , setValue];
}

export default useTheme;