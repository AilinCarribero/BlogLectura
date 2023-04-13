import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { postApiAuthRegistro } from '../services/apiAuth';
import { useResponse } from '../hooks/useResponse';

const Registro = () => {
    const { setToastResponse } = useResponse();

    const [dataForm, setDataForm] = useState({
        nombre: '',
        email: '',
        userAuth: '',
        password: ''
    });

    const handleChangeForm = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;

        //console.log(targetName, targetValue);

        setDataForm(prevDataForm => ({
            ...prevDataForm,
            [targetName]: targetValue
        }))
    }

    const handleClickSubmit = (e) => {
        e.preventDefault();

        postApiAuthRegistro(dataForm).then(res => {
            const resRes = setToastResponse(res, 'Se creo correctamente');

            if (resRes === "ok") {
                setDataForm({
                    nombre: '',
                    email: '',
                    userAuth: '',
                    password: ''
                });
            }
        }).catch(err => {
            console.error(err);
        });
    }

    return (<>
        <Grid container justifyContent="center" alignItems="center" direction="column" className='conteiner-form'>
            <Grid className='titulo-form'>
                Formulario de Registro
            </Grid>
            <Grid>
                <TextField className='text-field-mui' id="outlined-password-input" label="Nombre" name="nombre" onChange={handleChangeForm} value={dataForm.nombre} size="small" color='secondary' />
            </Grid>
            <Grid>
                <TextField className='text-field-mui' id="outlined-password-input" label="Correo" name="email" type="email" onChange={handleChangeForm} value={dataForm.email} size="small" color='secondary' />
            </Grid>
            <Grid>
                <TextField className='text-field-mui' id="outlined-password-input" label="Usuario de ingreso" name="userAuth" onChange={handleChangeForm} value={dataForm.userAuth} size="small" color='secondary' />
            </Grid>
            <Grid>
                <TextField className='text-field-mui' id="outlined-password-input" label="Contraseña" name="password" type="password" onChange={handleChangeForm} value={dataForm.password} size="small" color='secondary' />
            </Grid>
            <Grid>
                <button className='button-form' type='submit' onClick={handleClickSubmit}>
                    Crear
                </button>
            </Grid>
        </Grid>
    </>)
}

export default React.memo(Registro);