import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignInPage } from './auth/pages/SignInPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-in' element={<SignInPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
