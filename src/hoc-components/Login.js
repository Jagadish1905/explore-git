import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const buttonSX = {
    "&:hover": {
        backgroundColor: "lightGray",
        color: "black"
    },
    backgroundColor: "gray"
};

export default function Login() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePwd = (e) => {
        setPwd(e.target.value)
    }

    const handleLogin = () => {
        console.log("entered handleLogin")
        const sendData = { email: email, password: pwd }
        fetch('http://localhost:5001/api/users/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendData)
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                sessionStorage.setItem('token', res.accessToken)
                console.log("res in then", res)
                res.accessToken && navigate('contacts')
            })
    }

    useEffect(() => {
        console.log("kjsdhfj")
        let token = sessionStorage.getItem('token')
        console.log("token", token)
    })
    return (
        <React.Fragment>
            <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Paper elevation={3} sx={{ width: "40%", backgroundColor: "#ccd4d9" }}>
                    <Typography variant="h5" sx={{ backgroundColor: "gray", color: "white" }}>Login</Typography>
                    <Box sx={{ padding: 5 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Email
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    required
                                    id="title"
                                    name="title"
                                    label="Email"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    onChange={handleEmail}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <InputLabel
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontWeight: 700
                                    }}
                                >
                                    Password
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    required
                                    id="artist"
                                    name="artist"
                                    label="Password"
                                    fullWidth
                                    size="small"
                                    autoComplete="off"
                                    variant="outlined"
                                    onChange={handlePwd}
                                    type='password'
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Button variant="contained" sx={buttonSX}
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </React.Fragment >
    );
}