import { Typography, Grid, Paper } from "@mui/material";
import React from "react";

export const InicioPagina = () => {
    return (
        <>
                <Grid container spacing={2}>
                    <Grid item xs={12} mt={5}>
                        <Paper variant='outlined' sx={{ padding: 12 }}>
                            <Typography variant='h3'> Event Pulse </Typography>
                            <Typography>
                                Hola mundo
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
        </>

    )
};
