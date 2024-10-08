import React, { useState } from 'react';
import './HexaColor.css';

export default function HexaColor() {
    const [colorMethod, setColorMethod] = useState('Hex');
    const [color, setColor] = useState('#000000');

    function handleOnClick(colorsystem) {
        if (colorsystem === 'Hex') {
            const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            let hex = '#';
            for (let i = 0; i < 6; i++) {
                hex += arr[Math.floor(Math.random() * 16)];
            }
            setColor(hex);
        } else {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            setColor(`rgb(${r}, ${g}, ${b})`);
        }
    }

    return (
        <div style={{ backgroundColor: color }} className='background'>
            <div className='header'>
                <button className='button' onClick={() => setColorMethod('Hex')}>Hex Color</button>
                <button className='button' onClick={() => setColorMethod('RGB')}>RGB Color</button>
                <button className='button' onClick={() => handleOnClick(colorMethod)}>Get Random Color</button>
            </div>
            <div style={{width:'100vw',display:'flex', justifyContent:'center', color:'white'}}><h1>{color}</h1></div>
            <div className='content'>
                {`${colorMethod} Color System`}
            </div>
        </div>
    );
}
