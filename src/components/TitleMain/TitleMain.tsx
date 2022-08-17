import React  from 'react';
import { SecTitle, Title } from './styles'

let titleError:string = 'I have bad news for you' ;

function TitleMain() {
    return (
        <SecTitle>
            <Title>{titleError}</Title>
        </SecTitle>
    )
}

export default TitleMain