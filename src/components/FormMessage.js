import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MessageContainer from './MessageContainer/MessageContainer'

const handleClick = () => {
    document.querySelector('#message').style.display = 'none';
}

const FormMessage = (props) => {
    const { message } = props;
    return (<MessageContainer id="message">
        <div>
            <div className="inner">
                <span onClick={handleClick} ><FontAwesomeIcon icon={faTimes} /></span>
                <p>{message}wiadomosc wyslana poprawnie</p>
            </div>

        </div>
    </MessageContainer>);
}

export default FormMessage;