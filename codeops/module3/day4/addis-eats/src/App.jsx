import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/Header/Header'
import Main from './component/main/Main'
import Footer from './component/Footer/Footer'

function App() {
    return(
        <>
            <Header />
            <Main /> 
            <Footer />   
        </>
    )
}

export default App
