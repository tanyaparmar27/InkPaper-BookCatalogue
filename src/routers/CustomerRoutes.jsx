import { Route , Routes} from 'react-router-dom'
import HomePage from '../customers/pages/HomePage/HomePage'
import Navbar from '../customers/components/NavBar/Navbar'
import GenresPage from '../customers/pages/Genre/GenresPage'
import WantToRead from '../customers/pages/MyLibrary/WantToRead'
import CurrentlyReading from '../customers/pages/MyLibrary/CurrentlyReading'
import AlreadyRead from '../customers/pages/MyLibrary/AlreadyRead'
import Romance from '../customers/pages/Genre/Genres/Romance'
import Mystery from '../customers/pages/Genre/Genres/Mystery'
import Classics from '../customers/pages/Genre/Genres/Classics'
import Horror from '../customers/pages/Genre/Genres/Horror'
import SelfHelp from '../customers/pages/Genre/Genres/SelfHelp'
import Autobiography from '../customers/pages/Genre/Genres/Autobiography'


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
          <Route path='/genres/:romance' element={<Romance />} />
          <Route path='/genres/:mystery' element={<Mystery />} />
          <Route path='/genres/:classics' element={<Classics />} />
          <Route path='/genres/:selfhelp' element={<SelfHelp />} />
          <Route path='/genres/:horror' element={<Horror />} />
          <Route path='/genres/autobiography' element={<Autobiography/>}></Route>


        </Routes>

       
    
    </div>
      
    </div>
    
  )
}

export default CustomerRoutes