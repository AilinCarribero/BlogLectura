import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import bcrypt from 'bcryptjs';

const Login = () => {
    const [dataForm, setDataForm] = useState({
        userAuth: '',
        password: ''
    });

    const handleChangeForm = (e) => {
        const targetName = e.target.name;
        const targetValue = e.target.value;

        console.log(targetName, targetValue);

        setDataForm(prevDataForm => ({
            ...prevDataForm,
            [targetName]: targetValue
        }));
    }

    const handleClickSubmit = (e) => {
        e.preventDefault();

        const envData = {
            userAuth: dataForm.userAuth,
            password: bcrypt.hashSync(dataForm.password, 10)
        }

        console.log(envData);

    }

    return (<>
        <Grid container justifyContent="center" alignItems="center" direction="column" className='conteiner-form'>
            <Grid className='titulo-form'>
                Login
            </Grid>
            <Grid>
                <TextField className='text-field-mui' id="outlined-password-input" label="Usuario" name="userAuth" onChange={handleChangeForm} value={dataForm.userAuth} size="small" color='secondary' />
            </Grid>
            <Grid>
                <TextField className='text-field-mui' id="outlined-password-input" label="Contraseña" name="password" type="password" onChange={handleChangeForm} value={dataForm.password} size="small" color='secondary' />
            </Grid>
            <Grid>
                <button className='button-form' type='submit' onClick={handleClickSubmit}>
                    Ingresar
                </button>
            </Grid>
        </Grid>
    </>)
}

export default React.memo(Login);