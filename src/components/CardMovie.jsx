import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardMovie({ movie }) {
  return (
    <Card style={{ width: '18rem', margin: '10px', marginTop: '10px', display: 'inline-block' }}>
      <Card.Img variant="top" src={ movie.banner } />
      <Card.Body>
        <Card.Title>{ movie.titulo }</Card.Title>
        <Card.Text>
          
          
            <b>Dirigidor por:</b> <p class="director-name">{ movie.diretor }</p> <br/>
            <b>Produzido por:</b> <p class="producer-name">{ movie.produtor }</p> 
        </Card.Text>
        <Button variant="primary">Detalhes</Button>
      </Card.Body>
    </Card>
  );
}

export default CardMovie;