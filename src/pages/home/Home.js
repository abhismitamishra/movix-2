import React from 'react'
import './style.scss';
import HeroBanner from './hero_banner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './top_rated/TopRated';

//HeroBanner
const Home = () => {
  return (
    <div className="homePage">
       <HeroBanner/>
       <Trending />
       <Popular />
       <TopRated />

    </div>
  )
}

export default Home