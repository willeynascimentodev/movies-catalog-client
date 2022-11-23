import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { findAll, reset, updateDB } from '../features/movie/movie.slice'
import { useNavigate } from 'react-router-dom'

function Header () {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { isLoading } = useSelector((state) => state.movie);
    

    const updateCatalog = async () => {
        
        
        await updateCatalogDB();
        const params = {
            titulo: '',
            skip: 0,
            limit: 10,
        }
        dispatch(reset);
        dispatch(findAll(params))        
    }

    const updateCatalogDB = async() => {
        dispatch(reset);
        dispatch(updateDB());
        return dispatch(updateDB());
    }



    return (
        <header>
            <h1>WA Flix</h1>
            <Button onClick={updateCatalog} variant="primary">Atualizar Catálogo</Button>
        </header>
    )
}

export default Header;