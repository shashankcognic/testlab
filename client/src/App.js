import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ViewData from './pages/viewData'
import AddData from './pages/AddData'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/view" element={<ViewData/>} />
          <Route exact path="/" element={<AddData/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App