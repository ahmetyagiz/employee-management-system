import './App.css'
import React from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <HeaderComponent />
        <div className="content">
          <Routes>
            {/* // http://localhost:8080 */}
            <Route path='/' element={<ListEmployeeComponent />} />
            {/* // http://localhost:8080/employees */}
            <Route path='/employees' element={<ListEmployeeComponent />} />
            {/* // http://localhost:8080/add-employee */}
            <Route path='/add-employee' element={<EmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}


export default App