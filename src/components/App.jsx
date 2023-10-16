import {Suspense, lazy} from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('../Pages/Cast'));
const Reviews = lazy(() => import('../Pages/Reviews'));


export const App = () => {
  return (



    <Suspense>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movies/:movieId" element={<MovieDetails/>} />
      <Route path="/movies/:movieId/cast" element={<Cast/>} />
      <Route path="/movies/:movieId/reviews" element={<Reviews/>} />
      </Routes>
    </Suspense>
  )
  
  
};
