import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Homepage from './Homepage'
import Response from './Responses'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles.css'

export default function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/response' element={<Response/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
