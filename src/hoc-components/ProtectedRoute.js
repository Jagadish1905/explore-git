import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ Element }) => {
    console.log('element', Element)
    const { pathname } = useLocation();
    console.log("pathname", pathname)
    const token = sessionStorage.getItem("token");

    if (!token && ["/contacts"].includes(pathname)) {
        console.log("entered contacts")
        return <Navigate to="/" />;
    }
    if (!token && ["/contacts/dashboard"].includes(pathname)) {
        console.log("entered contacts/dashboard")
        return <Navigate to="/" />;
    }
    console.log("jhdkjsdhfkj")
    return <Element />;
};