import React  from 'react'
import { SecTitleMain, MainTitle } from './styles'

let textError:string = '404 NOT FOUND' ;

function FirstComponent() {
    return (
        <SecTitleMain>
            <MainTitle>{textError}</MainTitle>
        </SecTitleMain>
    )
}

export default FirstComponent