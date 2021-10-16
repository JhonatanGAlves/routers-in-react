import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BotaoVoltar = () => (
    <AreaBotao>
        <Link className="botao" to="/">Voltar</Link>
    </AreaBotao>
)

const AreaBotao = styled.div`
    width: 100%;
    margin-top: 100px;

    .botao {
        background-color: #f7df1e;
        padding: 25px;
        color: #000;
        text-decoration: none;
    }
`

export default BotaoVoltar