import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  

  return (
    <>

    <Header></Header>

   <div className='flex w-4/5 mx-auto'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
   </div>
    
      
      
    </>
  )
}

export default App
