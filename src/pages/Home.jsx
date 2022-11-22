import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { findAll, reset } from '../features/movie/movie.slice'


function Home () {
    const { movies, isSuccess  } = useSelector((state) => state.movie);

    const dispatch = useDispatch();

    
    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])
    

    useEffect(() => {
        dispatch(findAll(0, 10));
    }, [dispatch])

    return (
        <h1>Home</h1>
    )
}

export default Home;