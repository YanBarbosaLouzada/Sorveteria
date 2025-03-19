import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import "./SorveteCard.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart} from "../../redux/cart/cartSlice";

export default function SorveteCard(sorvete) {
    const cart = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    return (
        <Card sx={{ width: 300, border: 1 }} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={sorvete.img}
                    alt="Sorvete IMG"
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {sorvete.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <div className='content-sabores'>
                            <p>Sobores:</p>
                            <div className="flavors">
                                {sorvete.flavors.map((f, index) => (
                                    <div key={index} className="flavor">{f}</div>
                                ))}
                            </div><br />

                        </div>
                        <p><b>⭐Rating: {sorvete.rating}</b></p>
                    </Typography>
                    <Button sx={{ justifyContent: "center", mt: "15px" }} variant="contained" size="medium" onClick={() => dispatch(addToCart(sorvete))}>
                        Adicionar ao carrinho
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}