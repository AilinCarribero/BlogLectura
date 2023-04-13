import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//Utils
import { formatFecha } from '../utils/fecha';

const CardPreView = ({ info }) => {
    console.log(info)
    return (
    <Link to={`/narrativa/${info.id}/${info.titulo}`} >
        <Row className="content-card-preview" >
            <Col xs={4} md={3} className="content-card-img">
                <img className='img-preview' alt='' src='http://pm1.narvii.com/6826/a97b0b8c03534c35bbd8d1d11a8bbcc2a64b7f95v2_00.jpg' />
            </Col>
            <Col xs={8} md={9} className="content-card-text" >
                <p><b>{info.titulo}</b></p>
                <p id="text"> {`"${info.cita}"`} </p>
                <p id="fecha">{formatFecha(info.createdAt)}</p>
            </Col>
        </Row>
    </Link> 
    )
}

export default React.memo(CardPreView)