import React from "react";
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, Box } from "@mui/material";
import IcecreamIcon from "@mui/icons-material/Icecream";
import "./Homepage.css"
const HomePage = () => {
  return (
    <div className="bg-home">
      {/* Banner */}
      <Box
        sx={{
          backgroundImage: `url(https://fricon.com.br/img/seguimentos/sorvetes.png)`,
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
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#ffd700", textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}>
            Nossa História
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.8 }}>
            Tudo começou em 1985, quando Dona Ana, apaixonada por sobremesas, decidiu criar sorvetes artesanais que combinassem qualidade e amor.
            O sucesso foi imediato! Hoje, a **Sorveteria Delícia** continua essa tradição, trazendo sabores incríveis e momentos especiais para nossos clientes.
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
          backgroundImage: "url(https://forbes.com.br/wp-content/uploads/2021/09/Life_DiadoSorvete_22set2021_Divulgacao.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: 8,
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
          border: "1px solid black",
        }}
      >
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "white", textShadow: "2px 2px 8px rgba(0,0,0,0.3)", mb: 4 }}>
            Missão, Visão e Valores
          </Typography>
          <Grid container spacing={3}>
            {[
              { title: "Missão", text: "Levar felicidade e refrescância através de sorvetes artesanais feitos com carinho.", bg: "#ffcccb" },
              { title: "Visão", text: "Ser reconhecida como a melhor sorveteria artesanal do Brasil, criando experiências inesquecíveis.", bg: "#ffff99" },
              { title: "Valores", text: "Qualidade, inovação, sustentabilidade e paixão pelo que fazemos.", bg: "#b0e0e6" },
            ].map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card
                  sx={{
                    bgcolor: item.bg,
                    textAlign: "center",
                    p: 3,
                    minHeight: "200px",
                    borderRadius: "12px",
                    boxShadow: "4px 4px 10px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                    ":hover": { transform: "scale(1.05)" },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default HomePage;
