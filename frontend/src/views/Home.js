import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";

//Redux
import { useSelector } from "react-redux";

//Component
import CardPreView from '../components/CardPreView';
import Navbar from '../components/Navbar';

//Css
import "../styles/Home.scss";

const Home = () => {
    const infoHistoria = useSelector(state => state.narrativaRedux.narrativas);

    return (<>
        <Navbar />
        <Row className='conteiner-component'>
            <Col>
                {Array.isArray(infoHistoria) && infoHistoria.map(info => (
                    <CardPreView info={info} key={info.id} />
                ))}
            </Col>
        </Row>
        </>)
}

export default React.memo(Home);