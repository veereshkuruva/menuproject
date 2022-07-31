import React from 'react'
import Menu from './components/Menu'
import items from "./components/Data"
import { useState } from 'react'
import Categories from './components/Categories'


const allCatogiries= ["all",...new Set(items.map((item)=>item.category))]  //new Set[] gives unique items in array
console.log(allCatogiries)
const App = () => {
  
  const [menuItems,setMenuItems] =useState(items)
  const [categoryies,setCategoryies] =useState(allCatogiries)

  const filterItems=(category)=>{
    if(category==="all"){
      setMenuItems(items)
      return;
    }
    const newItems=items.filter((item)=>item.category===category)
    setMenuItems(newItems)
  }
  return (
       <main>
        <section className='men section'>
          <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'></div>
          </div>
          <Categories filterItems={filterItems} categoryies={categoryies}/>
        <Menu items={menuItems}/>
        </section>
       </main>
  )
}

export default App