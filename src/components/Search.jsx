import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { findAll, reset } from '../features/movie/movie.slice'

function Search ({perPage}) {
    const [search, setSearch] = useState('');
    
    const dispatch = useDispatch()

    const change = (e) => {
        setSearch(e.target.value);
    }

    const searchFunction = () => {
        
        dispatch(reset);
        const params = {
            titulo: search,
            skip: 0,
            limit: perPage
        }

        dispatch(findAll(params));
    }

    return (
        <div className="search row mb-5 mt-2 p-2">
            <input 
                className="form-control text-center p-2" 
                type="text" 
                placeholder="Digite o nome do filme aqui..."
                onChange={ change }
                onKeyUp={ searchFunction }
            />
        </div>
    )
}

export default Search;


        