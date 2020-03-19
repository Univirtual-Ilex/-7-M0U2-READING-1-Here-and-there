import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import {ButtonLink} from '../ButtonX'
import estilos_home from './Home_styles'



const Home_base = function ({staticContext, ...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png">

                    <div className='bloque-izquierdo entrada-top-Y-2'>
                        <div className='bloque-izquierdo-container'>
                            <h1> Here and there </h1>
                            <p>
                            Read the experiences of two Exchange students at UTP. Click True or False for the statements.
                            <span className='negrilla'> <br/> ¡Time to practice your listening skill!</span></p>
                            <ButtonLink to='/actividad1'>Start</ButtonLink>
                        </div>
                    </div>
                    <div className='bloque-derecho entrada-top-Y-3'>
                        <figure>
                            <img src='./src/cover.png' alt='Logo' />    
                        </figure>

                    </div>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home