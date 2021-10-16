import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PaginaInicial = () => (
    <Container>
        <h1>Escolha o seu caminho em JavaScript</h1>
        <Buttons>
            <Link className="button-front" to="/front-end">Front-end</Link>
            <Link className="button-back" to="/back-end">Back-end</Link>
        </Buttons>
    </Container>
)

const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    max-width: 700px;

    h1 {
        font-size: 35px;
        margin-bottom: 60px;
    }
`
const Buttons = styled.div`
    display: flex;
    justify-content: space-between;

    .button-front {
        background-color: #2deaff;
        font-size: 20px;
        font-weight: 600;
        padding: 25px;
        text-decoration: none;
    }

    .button-back {
        font-size: 20px;
        font-weight: 600;
        padding: 25px;
        text-decoration: none;
        background-color: green;
        color: #FFF;
    }
`

export default PaginaInicial