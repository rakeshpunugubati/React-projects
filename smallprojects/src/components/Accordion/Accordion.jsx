import React ,{useState} from 'react'
import data from './data'
import './acoordion.css';
function Accordion() {
    const[openIndex , setOpenIndex] = useState(new Array(data.length).fill(0));
    function handleOnclick(ind){
        const newArr = [...openIndex];
        newArr[ind] = newArr[ind] === 0 ? 1 : 0;
        setOpenIndex(newArr);
    }
  return (
    <div className='accordion'>
        <div className='container'>
            {
                data.length > 0 ? (
                data.map( (obj , index) =>
                        <div className='items' >
                            <div className='item'>
                                <div className='symbol' onClick={() => handleOnclick(index)}><p>+</p></div>
                                <div key={index} className='question'>{obj.question}</div>
                            </div>
                            
                            {
                            openIndex[index] === 1 && (<div className='answer'>{obj.answer}</div>)
                            }
                        </div>       
                ))
                : (<p>No Data Found</p>)
            }
        </div>
        
    </div>
  )
}

export default Accordion