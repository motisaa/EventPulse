import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Button, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { LoginBasicoUsuario } from "../../petitions/RQLogin";
import { GeneralCtx } from "../../contexts/GeneralContext";
import { ErrorLogin } from "../../components/ErrorGeneral/ErrorGeneral";
import { MensajeInformativo } from "../../components/MensajeInformativo/MensajeInformativo";
import "./LoginPage.css";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { MensajeError } from "../../petitions/HandleError"

const validationSchema = yup.object({
    Email: yup.string("Email").required("Required"),
    Password: yup.string("Password").required("Required"),
});

export const LoginForm = (props) => {
    const { setSession } = useContext(GeneralCtx);
    const [hayError, setHayError] = useState(false);
    const [mensajeError, setMensajeError] = useState("");
    const [hayMensaje, setHayMensaje] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (values) => {
        const usuario = await loginBasico({
            Email: values.Email,
            Password: values.Password,
        });

        setSession(usuario);
        // Mostramos mensaje de OK
        setMensaje(`Login correcto: ${usuario.Name}`);
        setHayMensaje(true);
        // Nos vamos a inicio
        navigate("/inicio");
       
    };

    const loginBasico = async ({ Email, Password }) => {
        try {
            const { data: user } = await LoginBasicoUsuario(Email, Password);
            return user;
        } catch (error) {
            setHayError(true);
            setMensajeError(MensajeError(error));
        }
    };

    const formik = useFormik({
        initialValues: {
            Email: "",
            Password: "",
        },
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="Email"
                            name="Email"
                            label="Email"
                            value={formik.values.Email}
                            onChange={formik.handleChange}
                            error={formik.touched.Email && Boolean(formik.errors.Email)}
                            helperText={formik.touched.Email && formik.errors.Email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="Password"
                            name="Password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            value={formik.values.Password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            onChange={formik.handleChange}
                            error={formik.touched.Password && Boolean(formik.errors.Password)}
                            helperText={formik.touched.Password && formik.errors.Password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Log in
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <ErrorLogin
                hayError={hayError}
                mensajeError={mensajeError}
                cerrarError={() => setHayError(false)}
            />
            <MensajeInformativo
                hayMensaje={hayMensaje}
                mensaje={mensaje}
                cerrarMensaje={() => false}
            />
        </>
    );
};
