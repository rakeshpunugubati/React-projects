import React, { useState } from 'react'
import QRCode from 'react-qr-code';
function QRGenereator() {
    const[input , setInput] = useState('');
    const[qr, setQr] = useState('')
    function handleOnClick(){
        setInput('');
        setQr(input);
    }
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'20px', height:'100vh'}}>
        <h1>QR Code Generator</h1>
        <div > 
            <input type="text" placeholder='Enter value here' value={input} 
                    onChange={(e) => setInput(e.target.value)}/>
            <button style={{marginLeft:'10px'}} disabled = {input.trim() === ''} onClick={() => handleOnClick()}>Generate</button>
        </div>

        <div >
            <QRCode id='qr-code-value' value={qr}  size={250} />
        </div>
        
        
    </div>
  )
}

export default QRGenereator