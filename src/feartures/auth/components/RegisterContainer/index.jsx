import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { register } from '../../userSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from "notistack";
RegisterConainer.propTypes = {
    // values : PropTypes.array
};

function RegisterConainer(props) {
    const dispatch = useDispatch()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const handleSubmit = async (values) => {
        try {
            values.username = values.email;
            const action = register(values);
            const result = await dispatch(action);
            unwrapResult(result);
            enqueueSnackbar("Register success!", { variant: "success" });
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={ handleSubmit}/> 
        </div>
    );
}

export default RegisterConainer;