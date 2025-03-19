import React, { useEffect, useState } from 'react'
import { useGetAPIDATA } from "../../hooks/getAPIDATA.jsx"
import SorveteCard from '../../components/sorveteCard/SorveteCard.jsx';
import Popup from '../../components/popup/Popup.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./ProductsPage.css"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import AnchorTemporaryDrawer from '../../components/drawer/Drawer.jsx';
function ProductsPage() {
    const [sorveteNome, setSorveteNome] = useState('');
    const [sorveteDigitado, setSorveteDigitado] = useState('');
    const { sorveteData, loading, error } = useGetAPIDATA(sorveteNome);
    const [popupContent, setPopupContent] = useState({ message: '', color: '' });
    const [showPopup, setShowPopup] = useState(false);

    function showAndHidePopup(message, color) {
        setPopupContent({ message, color });
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    }

    useEffect(() => {
        if (!loading) {
            if (error) {
                showAndHidePopup('Erro ao buscar sorvete', 'red');
            } else if (sorveteData) {
                showAndHidePopup('Sorvete encontrado!', 'success');
            }
        }
    }, [loading, error, sorveteData]);


    const handleInputChange = (e) => {
        setSorveteDigitado(e.target.value);
    }
    function BuscarSorverte() {
        setSorveteNome(sorveteDigitado);
    }
    return (
        <div className='mainProduct'>
            <div className='setInput'>
                <Paper component="form"
                    sx={{ p: '4px', display: 'flex', alignItems: 'center', width: 350, justifyContent: 'center', border: 1 }}
                >
                    <InputBase
                        sx={{ ml: 2, flex: 1 }}
                        id="outlined-basic"
                        variant="outlined"
                        name="sorvete"
                        size='small'
                        placeholder='Nome do Sorvete'
                        value={sorveteDigitado}
                        onChange={handleInputChange}

                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
                        <SearchIcon onClick={BuscarSorverte} />
                    </IconButton>

                </Paper>
            </div>

            {loading && <p>Carregando...</p>}
            {error && <p>Erro ao buscar sorvete. Erro: {error}</p>}

            <div className='content' style={{ width: '90%'}}>
                {Array.isArray(sorveteData) ? (
                    <div className='sorvetes'>
                        {sorveteData.map((s) => (
                            <SorveteCard key={s.id} {...s}></SorveteCard>
                        ))}
                    </div>
                ) : (
                    sorveteData && <div>Sorvete não encontrado!</div>
                )}
                {
                    showPopup ?
                        <Popup
                            message={popupContent.message}
                            color={popupContent.color}
                        />
                        : null
                }
            </div>

            <div>
                
            </div>

        </div>
    )
}

export default ProductsPage;



