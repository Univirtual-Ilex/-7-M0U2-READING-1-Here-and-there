import React from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import BubbleInstructions from '../BubbleInstructions'
import Video from '../Video'
import ButtonX from '../ButtonX'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'







const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={36}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='slide the sentences to organize them, then press check to verify if it is right or wrong, press hint if you need help   ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow pt={2}>
                <ICol py={ 2 }>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    FIRST WATCH THIS VIDEO THEN ORGANIZE THE ACTIVITY SENTENCES 
                    </MainTitle>  
                </ICol>
            </IRow>

            <IRow justify='space-between' align='center' w={80}>
                <ICol w={30} pt={2}>
                    <BubbleInstructions align='center' py={3} px={1}>
                        For the next activity listen to the video carefully, then organize the sentences in the correct order
                    </BubbleInstructions>
                </ICol>
                <ICol w={65} pl={2}>
                    <Video videoSrc='./media/video.mp4' w={ 30 } radius></Video>
                </ICol>
            </IRow>

            <IRow w={100} justify='flex-end' py={0}>
                <ICol w={15}>
                    <ButtonX> Next </ButtonX>
                </ICol>
            </IRow>

        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad