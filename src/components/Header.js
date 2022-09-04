import React from 'react'
import { Typography, Box } from '@mui/material'
import logo from '../assets/brain.png'
import '../App.css'

const Header = ({name}) => {
    return (
        <>
        <Box className="header-wrapper" py={1} sx={{ alignItems: 'center', textAlign: 'center', alignSelf: 'center' }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '26px', lg: '32px' }, fontWeight: '500', marginRight: '10px'}}>
                Quizzical
            </Typography>
            <img src={logo} className="header-logo" alt="app-logo" style={{width: '4%', height: '4%', marginBottom: '10px'}} />
        </Box>
        <Typography variant="h6" sx={{ display: 'block', textAlign: 'center', color: '#000'}}>Welcome {name}</Typography>
        <hr />
        </>
    )
}

export default Header