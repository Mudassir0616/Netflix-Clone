import React, { useEffect, useState } from 'react'
import requests from './request'
import axios from './axios'

function Banner() {
    const [movie, setMovie] = useState([])

    const fetchData = async()=>{
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length - 1)])
        //THIS ^^ FUNCTION IS USED TO DISPLAY RANDOM MOVIES ON OUR BANNER....
        return request;
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(movie)
  return (
    <header className='banner' 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center"
    }}>
        <div className="banner-content">

            <h1 className='banner-title'>
                {movie?.name || movie?.title || movie?.original_name}
            </h1>

            <div className="banner-buttons">
              <button className="btn-play">Play</button>
              <button className="btn-list">My List</button>    
            </div> 

            <div className="banner-description">
                <h5>{movie.overview}</h5>
            </div>
        </div>
        <div className="banner-fade"/>
    </header>
  )
}

export default Banner