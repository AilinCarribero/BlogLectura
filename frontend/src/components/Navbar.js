import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

//Img - Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPowerOff } from '@fortawesome/free-solid-svg-icons';

//Css
import "../styles/Navbar.scss";

const Navbar = () => {

    /*Busqueda: 
        1. Filtra por titulo
        2. Filtra por contenido del texto
        3. (Luego) Filtra por genero
    */
    const [search, setSearch] = useState();

    return (
        <Row className='container-navbar'>
            <Col xs={10} md={11} className='content-search'>
                <div className='input-seatch'>
                    <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
                    <input name='search' value={search} placeholder="Titúlo, Contenido, Genero" />
                </div>
            </Col>
            <Col className='content-login'>
                <FontAwesomeIcon id="icon-off" icon={faPowerOff} />
            </Col>
        </Row>
    )
}

export default React.memo(Navbar);