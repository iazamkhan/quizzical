import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, CircularProgress } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css';
import Header from './Header';

const QuizPage = ({ name, setName }) => {

    const [questionsData, setQuestionsData] = useState([])
    const [clicked, setClicked] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
        if (!name) {
            navigate('/')
        }
    },
        [name, navigate]
    )


    const getData = async () => {
        const res = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
        const data = await res.json()
        setQuestionsData(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    const options = questionsData.map((item) => {return [item.correct_answer, ...item.incorrect_answers].sort(() => Math.random() - 0.5)})

    const toggle = () => {
        setClicked(prevState => !prevState)
    }


    return (
        <>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Header name={name} />
            </Link>
            <Box sx={{ alignItems: 'center', textAlign: 'center' }}>

                {questionsData.length ? (
                    questionsData.map((item, i) => {
                        return (
                            <>
                                <Typography variant="h6" mt={2}>{`${i + 1}. ${item.question}`}</Typography><br/>
                                <Button variant="outlined">{options[i]}</Button>
                            </>
                        )
                    })) : (
                    <CircularProgress
                        style={{ margin: 100 }}
                        color="inherit"
                        size={150}
                        thickness={1}
                    />
                )
                }

            </Box>
        </>
    )
}

export default QuizPage