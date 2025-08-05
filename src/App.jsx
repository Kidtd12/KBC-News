import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import Footer from './Components/Footer'
import './App.css';


const App = () => {
  const [category,setCategory] = useState ("general");
  return (
    <div>

<Navbar setCategory={setCategory}/>
<NewsBoard category={category}/>
 <Footer /> {/* Add this at the bottom */}
    </div>
  )
}

export default App