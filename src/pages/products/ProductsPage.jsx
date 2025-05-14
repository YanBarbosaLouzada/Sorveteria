import React, { useEffect, useState } from "react";

import SorveteCard from "../../components/sorveteCard/SorveteCard.jsx";
import { SorveteList } from "../../mock/IceCreamApi.js";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import Popup, { PopupDisplay } from "../../components/popup/Popup.jsx";
import { useDispatch } from "react-redux";
import { hidePopup } from "../../redux/popup/popupSlice";
import { showPopup } from "../../redux/popup/popupSlice.js";

import "./ProductsPage.css";

function ProductsPage() {
  const dispatch = useDispatch();
  const [sorveteNome, setSorveteNome] = useState("");
  const [sorveteDigitado, setSorveteDigitado] = useState("");
  const [sorvetes, setSorvete] = useState([...SorveteList]);

  function BuscarSorverte(e) {
    e.preventDefault();
    setSorveteNome(sorveteDigitado);
    dispatch(showPopup({ message: "Busca realizada!", color: "success" }));
  }

  return (
    <div className="mainProduct">
      <div className="setInput">
        <Paper
          component="form"
          sx={{
            p: "6px 10px",
            display: "flex",
            alignItems: "center",
            width: 400,
            borderRadius: 50,
            boxShadow: 3,
            border: "1px solid #ddd",
            transition: "all 0.3s ease-in-out",
            "&:hover": { boxShadow: 6 },
          }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Digite o nome do sorvete..."
            value={sorveteDigitado}
            onChange={(e) => setSorveteDigitado(e.target.value)}
            inputProps={{ style: { fontSize: "16px" } }}
          />
          <IconButton
            sx={{
              p: "10px",
              color: "#ff9800",
              "&:hover": { color: "#e68900" },
            }}
            onClick={BuscarSorverte}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      <div className="sorvetes">

        <div className="sorvetes">
          {(sorveteNome !== "" ? sorvetes.filter((s) => s.name.toLowerCase().includes(sorveteNome.toLowerCase())) : sorvetes).map((s) => (<SorveteCard sorvete={s} key={s.id} />))}
        </div>

      </div>

      <PopupDisplay />



    </div>

  );
}

export default ProductsPage;
