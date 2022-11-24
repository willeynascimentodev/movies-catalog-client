import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { findAll } from '../features/movie/movie.slice'
import  CardMovie  from '../components/CardMovie' 
import  Pag  from '../components/Pagination' 
import  Spinner from 'react-bootstrap/Spinner';
import  Search  from '../components/Search' 
import  ModalMovie  from '../components/ModalMovie' 

function Home ({perPage}) {
    const { movies, moviesTotal, isLoading  } = useSelector((state) => state.movie);
    const [modalShow, setModalShow] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const params = {
            titulo: '',
            skip: 0,
            limit: 10
        }
        console.log(process.env.API_URL);
        dispatch(findAll(params));
        
    }, [dispatch])

  

    return (
        <>
        <Search perPage={perPage}/>
        <ModalMovie id={1} setModalShow={setModalShow} modalShow={modalShow} />
            <div className="contain-movies flex-container">
                <h2>Filmes</h2>
                { !isLoading ? <Pag total={moviesTotal} perPage={perPage}/> : null }
                {
                     
                    !isLoading ? 
                        movies.length > 0 ? 
                        movies.map((movie) => (
                            <CardMovie setModalShow={setModalShow} key={movie._id} movieData={movie} /> 
                        )) : <h2>Nenhum resultado encontrado...</h2>
                        
                    : <Spinner animation="border" variant="light" /> 
                }  
                { !isLoading ? <Pag total={moviesTotal} perPage={10}/> : null }
                
            </div>
         
        </>
    )
}

export default Home;