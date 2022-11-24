import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { findOne } from '../features/movie/movie.slice'
import Spinner from 'react-bootstrap/Spinner';

function ModalMovie({modalShow, setModalShow}) {

  const dispatch = useDispatch();

  
  const { movie, isLoading  } = useSelector((state) => state.movie);
  

  if(isLoading) {
    <Spinner animation="border" variant="light" /> 
  }

  console.log(movie);

  return (
    <>
      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            { movie.titulo }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img width="50%" src={ movie.banner } alt="" />
            <p> <b>Diretor:</b> { movie.diretor } </p>
            <p> <b>Produtor:</b> { movie.produtor } </p>

            <p> <b>Descrição:</b> { movie.descricao } </p>
        
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalMovie