import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Button, CircularProgress } from '@mui/material'
import '../App.css';

const QuizPage = () => {



    const [questionsData, setQuestionsData] = useState([])
    const [clicked, setClicked] = useState(false)

    console.log(clicked);

    const getData = async () => {
        const res = await fetch("https://opentdb.com/api.php?amount=10")
        const data = await res.json()
        setQuestionsData(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    const toggle = () => {
        setClicked(prevState => !prevState)
    }


    return (
        <Box sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h3">
                Quiz Page
            </Typography>
            <hr />

            {questionsData ? (
                questionsData.map((item) => {
                    return (
                        <>
                            <Typography variant="h6" mt={2}>{item.question}</Typography>
                            {item.incorrect_answers.map((ia) => {
                                return (
                                    <Button variant="outlined" sx={{ marginLeft: "5px", marginTop: "1.5px", marginRight: "5px", marginBottom: "3px" }}><Typography variant="h6" onClick={toggle} className={clicked ? "btn-filled" : ""}>{ia}</Typography></Button>
                                )
                            })}
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
    )
}

export default QuizPage