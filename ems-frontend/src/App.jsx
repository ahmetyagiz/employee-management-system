import './App.css'
import React from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* // http://localhost:8080 */}
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          {/* // http://localhost:8080/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />}></Route>
          {/* // http://localhost:8080/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App