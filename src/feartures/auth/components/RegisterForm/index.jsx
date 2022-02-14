import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-control/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PassWordField from "../../../../components/form-control/PasswordField";
import { CircularProgress } from "@material-ui/core";
RegisterForm.propTypes = {};

function RegisterForm({ onSubmit }) {
    const scheme = yup.object().shape({
        fullName: yup.string().required("Vui long nhap dung ten"),
        email: yup.string().required("Vui long nhap email").email("vui long nhap dung email"),
        password: yup.string().required("Vui long nhap password").min(6, "nhap it nhat 6 ki tu"),
        retypePassword: yup
            .string()
            .required("Vui long nhap lai mat khau")
            .oneOf([yup.ref("password")], "mat khau nhap lai chua dung"),
    });
    const form = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            retypePassword: "",
        },
        resolver: yupResolver(scheme),
    });
    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    const { isSubmitting } = form.formState;
    console.log(isSubmitting)
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="fullName" form={form} label="Full Name" />
            <InputField name="email" form={form} label="Email" />
            <PassWordField name="password" form={form} label="Enter PassWord" />
            <PassWordField name="retypePassword" form={form} label="Enter PassWord" />
            <button type="submit">Submit</button>
            {isSubmitting && <CircularProgress color="secondary" />}


            
        </form>
    );
}

export default RegisterForm;
