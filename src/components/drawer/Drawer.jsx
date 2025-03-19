import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from "../../redux/cart/cartSlice";


export default function AnchorTemporaryDrawer() {
    const cart = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <h2>🛒 Carrinho de Compras</h2>

            {cart.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <div className="carrinho-grid">
                    {cart.map((item) => (
                        <Card key={item.id} sx={{ width: 250, border: 1, margin: 2 }}>
                            <CardMedia component="img" height="140" image={item.img} alt={item.name} />
                            <CardContent>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="body2">Quantidade: {item.quantity}</Typography>
                                <Typography variant="body2"><b>⭐ {item.rating}</b></Typography>
                                <Button
                                    sx={{ mt: 1 }}
                                    variant="contained"
                                    color="error"
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                >
                                    Remover
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            {cart.length > 0 && (
                <Button sx={{ mt: 2 }} variant="contained" color="warning" onClick={() => dispatch(clearCart())}>
                    🗑 Limpar Carrinho
                </Button>
            )}
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button
                        onClick={toggleDrawer(anchor, true)}
                        sx={{ my: 2, color: 'white', display: 'block', textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}
                    >
                        <a>{anchor}</a> 
                    </Button>
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