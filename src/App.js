import React from 'react'
import styled from 'styled-components'
import Rotas from './components/Rotas'

const App = () => (
  <Container>
      <Rotas />
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

export default App