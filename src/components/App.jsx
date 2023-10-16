import {Suspense, lazy} from 'react'
import { Route, Routes, NavLink} from 'react-router-dom'

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));



export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
          <NavLink className="header-link" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movies/:movieId/*" element={<MovieDetails/>} />
      </Routes>
    </Suspense>

    </div>



    
  )
  
  
};
