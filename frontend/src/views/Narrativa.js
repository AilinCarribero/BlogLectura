import React from 'react';
import { Row, Col } from 'react-bootstrap';

//Redux
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//Utils
import { formatFecha } from '../utils/fecha';

//Componets
import Navbar from '../components/Navbar';

//Style
import "../styles/Narrativa.scss";

const Narrativa = () => {
  const { id, titulo } = useParams();

  const narrativas = useSelector(state => state.narrativaRedux.narrativas);

  const narrativa = narrativas.find(narrativa => narrativa.id == id);

  console.log(narrativa)

  return (<>
    <Navbar />
    {narrativa &&
      <Row className='content-text-narrativa'>
        <Col xs={6} sm={6} className="titulo-text-narrativa" >
          {narrativa.titulo}
        </Col>
        <Col xs={6} sm={6} className="fecha-text-narrativa" >
          {formatFecha(narrativa.createdAt)}
        </Col>
        <Col xs={12} sm={12} className="historia-text-narrativa">
          <b id="primer-letra">{(narrativa.texto).charAt(0)}</b>{(narrativa.texto).slice(1)}
        </Col>
      </Row>
    }
  </>)
}

export default React.memo(Narrativa)