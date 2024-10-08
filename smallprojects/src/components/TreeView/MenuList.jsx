import React from 'react'
import ListItem from './ListItem'

function MenuList( {list =[]}) {
  console.log(list);
  return (
    <div>
        {
            list && list.length ?
            list.map((listItem , index) => 
                <ul style={{listStyleType:'circle'}} key={listItem.to}>
                    <ListItem   item={listItem} />
                </ul>
            )
            :null
        }
    </div>
  )
}

export default MenuList