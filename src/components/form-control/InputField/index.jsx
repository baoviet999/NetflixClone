import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

InputField.propTypes = {};

function InputField({ name, form, label }) {
    const { errors } = form;
    const hasError = errors[name];
    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}
            
            fullWidth
            margin="normal"
            variant="outlined"
            label={label}
            error={!!hasError}
            helperText={errors[name]?.message}
        />
    );
}

export default InputField;
