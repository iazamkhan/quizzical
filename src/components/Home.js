import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography, Button } from '@mui/material'
import '../App.css'

const Home = () => {

    const handleClick = () => {
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }
      
    return (
        <Stack direction="column" spacing={5}>
            <Box sx={{
                width: '50%',
                textAlign: 'center',
                alignItems: 'center',
                border: '4px solid #1d3557',
                borderRadius: '15px',
                marginLeft: '25%',
                marginTop: '30px'
            }}>
                <Stack mt="10px" p="50px">
                    <Typography sx={{fontSize: {xs: '26px', lg: '32px'}, fontWeight: '500'}}>
                        Quizzical
                    </Typography>
                    <Typography sx={{fontSize: {xs: '16px', lg: '22px'}, fontWeight: '500', color: '#1d3557'}}>
                        Test your General Knowledge
                    </Typography>
                    <Link to="/quiz" style={{ textDecoration: 'none' }}>
                        <Button onClick={handleClick} variant="contained"
                            sx={{
                                marginTop: '100px',
                                height: '50px'
                            }}
                        >
                            <Typography variant="h6">
                                Start Quiz
                            </Typography>
                        </Button>
                    </Link>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Home