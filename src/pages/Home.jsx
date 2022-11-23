import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { findAll } from '../features/movie/movie.slice'
import  CardMovie  from '../components/CardMovie' 
import  Pag  from '../components/Pagination' 
import Spinner from 'react-bootstrap/Spinner';
import  Search  from '../components/Search' 

function Home ({perPage}) {
    const { movies, moviesTotal, isLoading, searchMovie  } = useSelector((state) => state.movie);

    const dispatch = useDispatch();

    useEffect(() => {
        const params = {
            titulo: '',
            skip: 0,
            limit: 10
        }
        dispatch(findAll(params));
        
    }, [dispatch])

    return (
        <>
        <Search perPage={perPage}/>
            <div className="contain-movies flex-container">
                { !isLoading ? <Pag total={moviesTotal} perPage={perPage}/> : null }
                {
                     
                    !isLoading && movies.length > 0 ? 

                    movies.map((movie) => (
                        <CardMovie key={movie._id} movie={movie} /> 
                    )) : <Spinner animation="border" variant="light" /> 
                }  
                { !isLoading ? <Pag total={moviesTotal} perPage={10}/> : null }
                
            </div>
         
        </>
    )
}

export default Home;