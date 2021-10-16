import React from 'react'
import styled from 'styled-components'
import BotaoVoltar from '../BotaoVoltar'

const PaginaFrontEnd = () => (
    <Container>
        <h1>React.js</h1>
        <p>
            React é uma biblioteca JavaScript para a criação de interfaces de usuário e, nesse contexto, uma das tecnologias mais utilizadas pelo mercado. No guia abaixo você aprenderá quais são os pré-requisitos para iniciar no React do jeito certo e como criar as suas primeiras SPAs com ela.
        </p>
        <a target="_blank" href="https://www.devmedia.com.br/react/">Guia de React.js</a>
        <BotaoVoltar />
    </Container>
)

const Container = styled.div`
    max-width: 750px;
    text-align: center;
`

export default PaginaFrontEnd