import React  from 'react';
import { SecMessage, MessageMain } from './styles'

let messageMain:string = "The page you are looking for might be removed or is temporarily unavailable"

function Message() {
    return (
        <SecMessage>
             <MessageMain>{messageMain}</MessageMain>
        </SecMessage>
    )
}

export default Message