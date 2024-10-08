import React, { useState } from 'react';
import MenuList from './MenuList';

function ListItem({ item }) {
    const [displayChild, setDisplayChild] = useState(false); // Corrected typo here

    console.log(item);

    return (
        <li style={{ marginLeft: '-20px' }}>
            <div style={{ display: 'flex', gap: '20px', height:'40px' }}>
                <p>{item.label}</p>
                {
                    item.children ?
                    <span onClick={() => setDisplayChild(!displayChild)}>
                    {(displayChild === false && item.children) ? '+' : '-'}
                    </span>
                    :null
                }
                
            </div>
            {
                displayChild && item.children ? ( // Conditional rendering based on displayChild
                    <MenuList list={item.children} />
                ) : null
            }
        </li>
    );
}

export default ListItem;
