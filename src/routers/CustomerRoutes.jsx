import { Route , Routes} from 'react-router-dom'
import HomePage from '../customers/pages/HomePage/HomePage'
import Navbar from '../customers/components/NavBar/Navbar'
import GenresPage from '../customers/pages/Genre/GenresPage'
import WantToRead from '../customers/pages/MyLibrary/WantToRead'
import CurrentlyReading from '../customers/pages/MyLibrary/CurrentlyReading'
import AlreadyRead from '../customers/pages/MyLibrary/AlreadyRead'





const CustomerRoutes = () => {
  return (
    <div className='relative'>
      <div className='sticky top-0 z-50'>
        <Navbar/>
      </div>

      <div>
        <Routes>
          <Route path='/*' element={<HomePage/>}></Route>
          <Route path='/genres' element={<GenresPage/>}></Route>
          <Route path='/wanttoread' element={<WantToRead/>}></Route>
          <Route path='/currentlyreading' element={<CurrentlyReading/>}></Route>
          <Route path='/alreadyread' element={<AlreadyRead/>}></Route>
        </Routes>

       
    
    </div>
      
    </div>
    
  )
}

export default CustomerRoutes