import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";

import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="bg-home">
      {/* Banner */}
      <Box
        sx={{
          backgroundImage: `url(https://praiadoforte.org.br/wp-content/uploads/2024/05/sorveteria-60-sabores.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backdropFilter: "brightness(0.8)",
          position: "relative",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
          border: "1px solid black",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            p: 4,
            borderRadius: 2,
            width: "90%",
            fontWeight: "bold",
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          O Sabor da Felicidade 🍦
          <Typography variant="h6" sx={{ fontSize: "1.2rem", opacity: 0.9 }}>
            Desde 1985 adoçando momentos inesquecíveis
          </Typography>
        </Typography>
      </Box>

      {/* Nossa História */}
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
          color: "black",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#ffd700",
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Nossa História
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            Tudo começou em 1985, quando Dona Ana, apaixonada por sobremesas,
            decidiu criar sorvetes artesanais que combinassem qualidade e amor.
            O sucesso foi imediato! Hoje, a **Sorveteria Delícia** continua essa
            tradição, trazendo sabores incríveis e momentos especiais para
            nossos clientes.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#ff7f50",
              ":hover": { backgroundColor: "#e67e22" },
              boxShadow: "4px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            Conheça Nossos Sabores 🍨
          </Button>
        </Container>
      </Box>

      {/* Missão, Visão e Valores */}
      <Box
        sx={{
          backgroundImage:
            "url(https://forbes.com.br/wp-content/uploads/2021/09/Life_DiadoSorvete_22set2021_Divulgacao.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
          textAlign: "center",
          color: "white",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#ffd700",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Missão, Visão e Valores
          </Typography>

          <Grid container spacing={3} sx={{ mt: 5 }}>
            {/* Missão */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  color: "white",
                  height: "8.9rem",
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    🌟 Missão
                  </Typography>
                  <Typography variant="body1">
                    Oferecer sorvetes artesanais de alta qualidade,
                    proporcionando felicidade a cada colherada.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Visão */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  color: "white",
                  height: "8.9rem",
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    🔍 Visão
                  </Typography>
                  <Typography variant="body1">
                    Ser referência em sorvetes artesanais, inovando sempre e
                    criando sabores inesquecíveis.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Valores */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(5px)",
                  color: "white",
                  height: "8.9rem",
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    💖 Valores
                  </Typography>
                  <Typography variant="body1">
                    Qualidade, paixão, inovação e respeito pelos nossos clientes
                    e ingredientes.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage;
