import React from 'react'
import Slider from './Header/Slider/Slider'
import Products from '../Shop/Products'
import HomeCategories from '../HomeCategories/HomeCategories'
import Trending from '../Shop/ProductTrending'



function Home() {
    return(
        <>
        <Slider />
        <Products />
        <HomeCategories />
        <Trending />
        </>
    )
}

export default Home;