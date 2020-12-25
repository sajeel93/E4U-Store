import React from 'react'
import Slider from './Header/Slider/Slider'
import Products from '../Shop/Products'
import HomeCategories from '../HomeCategories/HomeCategories'
import Trending from '../Shop/ProductTrending'
import FlashProducts from '../Shop/FlashProducts'


function Home() {
    return(
        <>
        <Slider />
        <FlashProducts />
        <Products />
        <HomeCategories />
        <Trending />
        </>
    )
}

export default Home;