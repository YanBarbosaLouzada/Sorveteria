import React from 'react'
import { Typography, Box } from "@mui/material";

function Footer() {
    return (
        <div>
            <Box sx={{ bgcolor: "#ff7f50", color: "white", py: 1, textAlign: "center" ,mt: 3}}>
                <Typography variant="h6">🍦 Sorveteria Delícia - Desde 1985 🍦</Typography>
                <Typography variant="body2">Endereço: Rua dos Sorvetes, 123 - Cidade Feliz</Typography>
                <Typography variant="body2">Telefone: (11) 1234-5678</Typography>
            </Box>
        </div>
    )
}

export default Footer
