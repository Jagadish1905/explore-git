import React, { useState } from 'react';

import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Outlet, useNavigate } from 'react-router-dom';

const header = {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "2rem",
    marginRight: "2rem",
    height: "6vh",
    alignItems: 'center',
    color: "white"
}


function Contacts() {
    let ct = [{ "name": "juhfd", "email": "dsfsdfg", "phone": "87738945" }]
    const [cntcs, setcncts] = useState([])
    const navigate = useNavigate()
    const getContacts = () => {
        fetch('http://localhost:5001/api/contacts', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiamFnYWRpc2gxMjMiLCJlbWFpbCI6ImphZ2FkaXNoMTIzQGdtYWlsLmNvbSIsImlkIjoiNjUxYzU3NjliM2I2Y2U5MDI3NjMzZmRiIn0sImlhdCI6MTY5NjU5NzY2NiwiZXhwIjoxNjk2NTk4NTY2fQ.7cxUADJd5_Md6ZRHeJizJMt6sjOxqC51y9A26flMZ8w'
            }
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log("res for getContacts", res)
                setcncts(res)
            })
    }
    const handleDashboard = () => {
        navigate('dashboard')
    }
    return (
        <Box>
            <Paper sx={{ backgroundColor: "gray" }}>
                <Box sx={header} >
                    <Typography>CONTACTS</Typography>
                    <ContactsIcon />
                    <Button onClick={handleDashboard} sx={{ color: "white" }}>Dashboard</Button>
                </Box>
            </Paper>
            <Button onClick={getContacts}>Get Contacts</Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell align="right">EMAIL</TableCell>
                            <TableCell align="right">PHONE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cntcs.map((row, i) => (
                            <TableRow
                                key={row.email + i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Outlet />
        </Box>
    );
}
export default Contacts;