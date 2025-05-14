import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import "./SorveteCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { showPopup } from "../../redux/popup/popupSlice";

export default function SorveteCard({sorvete}) {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <Card
      sx={{
        width: 250,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={sorvete.imageSrc}
          alt={sorvete.name}
        />
        <CardContent >
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            {sorvete.name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {sorvete.flavors.join(", ")}
          </Typography> */}
          <Typography variant="h7" color="warning" >
            💰<b>$ {sorvete.price}</b> 
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{backgroundColor: "litegreen", padding: 1, mt: 3}}
            onClick={() => {
              dispatch(addToCart(sorvete));
              dispatch(
                showPopup({
                  message: `Item adicionado ao carrinho!`,
                  color: "success",
                })
              );
            }}
          >
            Adicionar ao Carrinho
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
