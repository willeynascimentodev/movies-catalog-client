import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { findOne, reset } from '../features/movie/movie.slice'

function CardMovie({ movieData, setModalShow }) {

  const { movie  } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  

  const findMovie = async () => {
    await dispatch(reset);
    await dispatch(findOne(movieData._id));
    setModalShow(true);

  }
  
  return (
    <Card style={{ width: '18rem', margin: '10px', marginTop: '10px', display: 'inline-block' }}>
      <Card.Img variant="top" src={ movieData.banner } />
      <Card.Body>
        <Card.Title>{ movieData.titulo }</Card.Title>
        <Card.Text>
            <b>Dirigidor por:</b> <p className="director-name">{ movieData.diretor }</p> <br/>
            <b>Produzido por:</b> <p className="producer-name">{ movieData.produtor }</p> 
        </Card.Text>
        <Button onClick={ findMovie } variant="primary">Detalhes</Button>
      </Card.Body>
    </Card>
  );
}

export default CardMovie;