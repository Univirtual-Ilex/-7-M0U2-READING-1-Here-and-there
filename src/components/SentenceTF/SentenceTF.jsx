
//Import
import React, { useState } from 'react'
import styled from 'styled-components'
import styles from './SentenceTF_styles'
import {ButtonTF2 as ButtonTF} from '../ButtonTF'
import { IRow, ICol } from '../Grid'

// Componente base
const SentenceTF_base = ({ answer, correct, index, ...props}) => {
    const [active, setActive] = useState()
    const setanswer = (val) => {
        let feedBack = val === correct
        answer({
            index: index,
            feedback: feedBack
        })
        setActive(val)
    }
    return (
        <div {...props}>
            <div className="pregunta">
                <IRow justify='space-between' className='ItemsFilaTop'>
                    <ICol w={60} px={1}> {props.children} </ICol>
                    <ICol w={40}> 
                        <ButtonTF t onClick={ ()=> answer ? setanswer(true) : console.log('answer prop is not defined, Not sending data true') } className={active===true ? 'active':'inactive'}/> 
                        <ButtonTF f onClick={ ()=> answer ? setanswer(false) : console.log('answer prop is not defined, Not sending data false') } className={active===false ? 'active':'inactive'}/> 
                    </ICol>
                </IRow>

            </div>

        </div>
    )
}
const SentenceTF = styled(SentenceTF_base)`${ styles }`
export default SentenceTF
