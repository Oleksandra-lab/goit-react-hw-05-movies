import {Suspense, lazy} from 'react'
import { Route, Routes} from 'react-router-dom'
import Loader from '../components/Loader/Loader';
import {StyledNavLink} from './App.styled'

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('../Pages/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));



export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <StyledNavLink className="header-link" to="/">
            Home
          </StyledNavLink>
          <StyledNavLink className="header-link" to="/movies">
            Movies
          </StyledNavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/movies/:movieId/*" element={<MovieDetails/>} />
      </Routes>
    </Suspense>

    </div>



    
  )
  
  
};
