import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>"Discover a World of Stories: Your Gateway to Enchanting Tales and Timeless Classics. Dive into a Literary Adventure with Our Vast Collection of Books - Explore, Imagine, and Uncover the Magic of Reading!"

</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header