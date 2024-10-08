import React from 'react';
import useTheme from './useTheme';

function Theme() {
  const [theme, setTheme] = useTheme('theme', 'dark');
    function handleTheme(){
        console.log(theme);
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
  return (
    <div style={{backgroundColor: theme === 'dark' ? 'black' : 'white',  display:'flex',justifyContent:'center',alignItems:'center', width:'100vw', height:'100vh'}}>
      <button style={{backgroundColor: theme === 'dark' ? 'white' : 'black',color: theme === 'dark' ? 'black' : 'white',}} onClick={() => handleTheme()}>
        Change Theme
      </button>
    </div>
  );
}

export default Theme;
