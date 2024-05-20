import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landingpage from "./pages/Landingpage.jsx"
import Documentationpage from './pages/documentationPage.jsx'
import NotFoundPage from "./pages/NotFoundPage.jsx"
import Redirectionpage from './pages/Redirectionpage.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index path="/home" element={<Landingpage/>} />
      <Route path="/:referenceId" element={<Redirectionpage/>} />
      <Route path='/documentation' element={<Documentationpage/>} />
      <Route path='/home/*' element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
