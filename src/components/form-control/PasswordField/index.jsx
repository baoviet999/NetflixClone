import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Controller } from 'react-hook-form';

PassWordField.propTypes = {
    
};

function PassWordField({ name, form, label }) {
    const [showPass, setShowPass] = useState(false)
    const handleShowPass = () => {
        setShowPass(prev => !prev)
    }
    const { errors } = form
    const hasErrors = errors[name]
    return (
        <div>
            <FormControl margin='normal' error={!!hasErrors} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <Controller
                    id={name}
                    type={showPass ? "text" : "password"}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPass}
                                onMouseDown={handleShowPass}
                                edge="end"
                            >
                                {showPass ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    name={name}
                    control={form.control}
                    as={OutlinedInput}
                    labelWidth={70}
                />
                <FormHelperText error={!!hasErrors}>{errors[name]?.message }</FormHelperText>
            </FormControl>
        </div>
    );
}

export default PassWordField;