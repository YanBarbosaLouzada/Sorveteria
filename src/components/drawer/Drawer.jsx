import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from "../../redux/cart/cartSlice";

export default function AnchorTemporaryDrawer() {
    const cart = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: 500,
                p: 2,
                height: '100%',
                position: 'relative',
                backgroundColor: "#f9f9f9"
            }}
            role="presentation"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
        >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
                🛒 Seu Carrinho
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {cart.length === 0 ? (
                <Typography variant="body1" align="center">O carrinho está vazio.</Typography>
            ) : (
                <Grid container spacing={2}>
                    {cart.map((item) => (
                        <Grid item xs={12} key={item.id}>
                            <Card sx={{ display: 'flex', borderRadius: 2, boxShadow: 3 , maxHeight: 150}}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 100, objectFit: 'cover' }}
                                    image={item.imageSrc}
                                    alt={item.name}
                                />
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">{item.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">Qtd: {item.quantity}</Typography>
                                    <Typography variant="body2"><b>$ {item.price}</b></Typography>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        size="small"
                                        sx={{ mt: 1 }}
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        Remover
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}

            {cart.length > 0 && (
                <Box >
                    <Button
                        fullWidth
                        variant="contained"
                        color="warning"
                        onClick={() => dispatch(clearCart())}
                        sx={{ mt: 2, mb: 2, textAlign: 'center' }}
                    >
                        🗑 Limpar Carrinho
                    </Button>
                </Box>
            )
            }
        </Box >
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <a
                        onClick={toggleDrawer(anchor, true)}
                        sx={{ color: 'white', }}
                    >
                        Carrinho
                    </a>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
