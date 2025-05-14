import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidePopup } from "../../redux/popup/popupSlice";
import "./Popup.css"; // seu estilo

function Popup({ message, color }) {
    return (
        <div className={`popup ${color}`}>
            {message}
        </div>
    );
}

export function PopupDisplay() {
    const dispatch = useDispatch();
    const { message, color, show } = useSelector((state) => state.popup);

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                dispatch(hidePopup());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, dispatch]);

    return show ? <Popup message={message} color={color} /> : null;
}

export default Popup;
