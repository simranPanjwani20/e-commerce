import React from 'react'
import './style.css'

const Home = () => {
    const handleCloth=()=>{
        window.location.href="/clothes"
    }
    const handleCar=()=>{
        window.location.href="/car"
    }
    const handleProperty=()=>{
        window.location.href="/property"
    }
  return (
        <div>
            <div className='homeSeaparator'></div>
            <div className="banner-container">
                <div className="text-center">
                    <h1 className="headingHome">Welcome to CollectionCommerce</h1>
                    <h4 className="subheadingHome">Your very own place to shop variety products</h4>
                    <div className="btnsHome">
                    <button onClick={handleCloth}>Check Clothing</button>
    <button onClick={handleCar} >Check Cars</button>
    <button onClick={handleProperty}>Check Property</button>
                    </div>
                </div>
            </div>
            <div className='homeSeaparator'></div>
        </div>
  )
}

export default Home