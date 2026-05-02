import React from 'react'

import Hero from "./../components/hero/Hero"
import Popular from "./../components/popular/Popular"
import Cards from "./../components/cards/Cards"
import Business from "./../components/business/Business"
import Search from "./../components/search/Search"
import Blog from "./../components/blog/Blog"

const Home = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Cards />
            <Business />
            <Search />
            <Blog />
        </div>
    )
}

export default Home