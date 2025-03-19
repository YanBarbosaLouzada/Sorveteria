// src/routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import Layout from "./pages/Layout";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Layout como rota pai */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="product" element={<ProductsPage />} />
                </Route>
            </Routes>
        </Router>
    );
}
