import React, { useEffect, useState } from 'react'
import axios from './axios'
import YouTube from 'react-youtube'
// import movieTrailer from 'movie-trailer'


const url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchURL,islargerow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    const fetchData = async ()=>{
        const response = await axios.get(fetchURL)
        setMovies(response.data.results)
        
        
    }

    useEffect(()=>{
        fetchData()
    },[fetchURL])

    const options ={
      height: '390px',
      width: '100%',
      playerVars:{
        autoplay: 1,
      }
    };

    const handleClick = (movie)=>{
      if(trailerUrl){
        setTrailerUrl("");
      }
      // else {
      //   movieTrailer(movie?.name || "")
      //   .then(url=>{
      //     const urlParams = new URLSearchParams(new URL(url).search)
      //     setTrailerUrl(urlParams.get('v'));
      //   }).catch((error) => console.log(error))
      // }
    }
  return (
    <div className='row'>
        <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map((movie)=>(
          <>
          <img 
          onClick={()=> handleClick(movie)}
          key={movie.id}
          className= {`poster-img ${islargerow && "largeposter-img"}`}
          src={`${url}${movie.poster_path}`} alt={movie.name}/>
          
          {/* <h5 className='movie-name'>{!islargerow? movie.name || movie.original_name || movie.title: ""}</h5> */}
          </>
        ))}
      </div>
      {trailerUrl && <YouTube videoId= {trailerUrl} options={options}/>}
    </div>
  )
}

export default Row