import React, { useState } from 'react'
import { Box, Stack, Typography, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Error from './Error'
import img from '../assets/education-quiz.png'
import logo from '../assets/brain.png'
import '../App.css'

const Home = ({name, setName}) => {

    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleClick = () => {
        if(!name) {
            setError(true)
        }
        else {
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            navigate('/quiz')
        }
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
                    <div className="top-header">
                        <Typography sx={{ fontSize: { xs: '26px', lg: '32px' }, fontWeight: '500' }}>
                            Quizzical
                        </Typography>
                        <img src={logo} className="loading" alt="app-logo" style={{ width: '8%', height: '8%', marginBottom: '10px' }} />
                    </div>
                    <Typography sx={{ fontSize: { xs: '16px', lg: '22px' }, fontWeight: '500', color: '#1d3557' }}>
                        Test your General Knowledge
                    </Typography>
                    <div className="img-form">
                        {error && <Error />}
                        <img src={img} alt="quiz" style={{ width: '20%', height: '20%', alignSelf: 'center', marginTop: '30px' }} />
                        <TextField mt={2} id="standard-basic" label="Enter your name" variant="standard" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <Button onClick={handleClick} variant="contained"
                        sx={{
                            marginTop: '50px',
                            height: '20%',
                            width: '60%',
                            alignSelf: 'center'
                        }}
                    >
                        <Typography sx={{ fontSize: { xs: '16px', lg: '20px' } }}>
                            Start Quiz
                        </Typography>
                    </Button>
                </Stack>
            </Box>
        </Stack>
    )
}

export default Home