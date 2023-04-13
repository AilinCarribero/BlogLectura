import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Routes } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';

//Redux
import { useDispatch } from 'react-redux';
import { getNarrativas } from './redux/slice/Narrativas/thunks';

//Components
import Navbar from './components/Navbar';

//Views
import Home from './views/Home';
import Narrativa from './views/Narrativa';
import Registro from './views/Registro';
import Login from './views/Login';

//Css
import "./styles/general.scss";

const Routers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNarrativas());
    }, []);

    return (
        <BrowserRouter>
            <Container className='container-app' fluid={true}>
                <ToastContainer />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/narrativa/:id/:titulo" element={<Narrativa />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default Routers;