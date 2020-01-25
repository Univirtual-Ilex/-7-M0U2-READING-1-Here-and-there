//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
// styles from styled
import { UiButtonsContainer } from '../Actividad1/Actividad_styles'
// Components
import Container from '../Container'
import MainTitle, { Subtitle } from '../MainTitle'
import { IRow, ICol } from '../Grid'
import ButtonUi from '../ButtonControlUI'
import {BubbleInfo} from '../BubbleInstructions'
import {ButtonAudio2} from '../ButtonAudio'
import {DraggableClean} from '../Draggable'
import AreaDrop from '../AreaDrop/AreaDrop'
import ButtonCheck from '../ButtonCheck'
// Componente base
const Actividad2_base = ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>

            <UiButtonsContainer top={1.9} right={1.9}>
                <ButtonUi icon='ilx-ayuda' tooltip='Click on the button below to listen to the audio of the video once again, then organize the sentences' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>

            <IRow w={90} align='center' justify='center' pt={2.3} pb={1} px={2}>
                <ICol>
                    <MainTitle color={Ilex.violeta2} size={1.5}> ORGANIZE THE SENTENCES IN THE RIGHT ORDER</MainTitle>
                </ICol>
            </IRow>
            
            <IRow justify='center' gutters={1}>
                <ICol w={20}>
                    <Subtitle color={Ilex.violeta2} size={1.4}>
                    PRACTICE PLACES IN YOUR NEIGHBORHOOD
                    </Subtitle>
                    <IRow>
                        <ICol>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>House</BubbleInfo>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>Bus Stop</BubbleInfo>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>Shop</BubbleInfo>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>Bakery</BubbleInfo>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>Drug Store</BubbleInfo>
                            <BubbleInfo py={0.4} mx={0.2} my={0.5}>Apartament</BubbleInfo>
                        </ICol>
                    </IRow>
                    <ButtonAudio2 src='./media/audio.mp3' mt={2} px={2} py={2}>
                        <IRow pb={1}>
                            <ICol className='bocina'>
                                <i className='ilx-bocina'></i>
                            </ICol>
                        </IRow>
                        <Subtitle color={'#fff'} size={1}>CLICK HERE TO LISTEN THE VIDEO’S AUDIO</Subtitle>
                    </ButtonAudio2>
                </ICol>
                <ICol w={30}>
                    <DraggableClean>I leave my flat to go to work</DraggableClean>
                    <DraggableClean>She likes to know about everything and everybody</DraggableClean>

                    <DraggableClean>Edward lives on apartment 309</DraggableClean>
                    <DraggableClean>I think her daughter is always there with her</DraggableClean>

                    <DraggableClean>I can say that I have nice neighbors</DraggableClean>
                    <DraggableClean>The shopping mall “El Progreso” and the “Megabus” station are in front of my apartment</DraggableClean>

                    <DraggableClean>She is very old</DraggableClean>
                    <DraggableClean>sometimes he asks me to take care of it</DraggableClean>

                    <DraggableClean>I have two neighbors</DraggableClean>
                    <DraggableClean>We go ahead with our duties</DraggableClean>
                </ICol>
                <ICol w={30}>
                    <AreaDrop w={20} h={25} p={1}></AreaDrop>
                </ICol>
                <IRow>
                    <ICol pt={3}><ButtonCheck /></ICol>
                </IRow>
            </IRow>



        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
