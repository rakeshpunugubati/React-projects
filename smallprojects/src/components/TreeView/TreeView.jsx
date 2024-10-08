import React from 'react'
import data from './data'
import MenuList from './MenuList'
function TreeView() {
  return (
    <div>
        <MenuList list ={data}/>
    </div>
  )
}

export default TreeView