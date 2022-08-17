import React  from 'react';
import imgError from '../../assets/error.png';
import { SecInitial, DivFlex, SecImageError } from './styles'

function ComponentImage() {
    return (
        <SecInitial>
            <DivFlex>
                <SecImageError>
                    <img id="imgLogoCompassOne" src={imgError} alt="logo"/>
                </SecImageError>
            </DivFlex>
        </SecInitial>
    )
}

export default ComponentImage