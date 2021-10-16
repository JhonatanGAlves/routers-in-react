import React from 'react'
import styled from 'styled-components'
import BotaoVoltar from '../BotaoVoltar'

const PaginaBackEnd = () => (
    <Container>
        <h1>Node.js</h1>
        <p>
            Node.js é uma tecnologia usada para executar código JavaScript fora do navegador. Com ele podemos construir aplicações web em geral, desde web sites até APIs e microsserviços.
        </p>
        <a target="_blank" href="https://www.devmedia.com.br/node-js/">Guia de Node.js</a>
        <BotaoVoltar />
    </Container>
)

const Container = styled.div`
    max-width: 750px;
    text-align: center;
`


export default PaginaBackEnd