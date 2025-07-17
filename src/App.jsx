import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const[bookmarks, setbookmarks] = useState([]);
  const handleBookmar = blog =>{
    const newBookmarks =[...bookmarks, blog]
    setbookmarks(newBookmarks)
  }

  

  return (
    <>

    <Header></Header>

   <div className=' w-4/5 mx-auto'>
     <Blogs handleBookmar = {handleBookmar}></Blogs>
     <Bookmarks bookmarks ={bookmarks}></Bookmarks>
   </div>
    
      
      
    </>
  )
}

export default App
