import { Grid, Typography } from "@mui/material";
import React from "react";
import { LoginForm } from "./LoginForm";

// Importa tu imagen de fondo
import backgroundImage from '../../images/rachel-coyne-U7HLzMO4SIY-unsplash.jpg'; // Asegúrate de tener la ruta correcta

export const LoginPage = () => {
  return (
    <>
      {/* center de login box */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Grid item m={4}>
          <div className="recuadro">
            <LoginForm />
            <Typography variant="body2" sx={{ mt: 2 }}>
            Don't have an account? Sign up to create or participate in events <a href="/signup">here</a>.
         </Typography>
          </div>
          
        </Grid>
      </Grid>
    </>
  );
};
