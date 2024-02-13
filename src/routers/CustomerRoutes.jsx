import { Route , Routes} from 'react-router-dom'
import HomePage from '../customers/pages/HomePage/HomePage'
import Navbar from '../customers/components/NavBar/Navbar'


const CustomerRoutes = () => {
  return (
    <div className='relative'>
      <div className='sticky top-0 z-50'>
        <Navbar/>
      </div>

      <div>
        <Routes>
          <Route path='/*' element={<HomePage/>}></Route>
        </Routes>
    
    </div>
      
    </div>
    
  )
}

export default CustomerRoutes