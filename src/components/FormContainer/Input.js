import styled from 'styled-components'

const Input = styled.input`


@media(max-width:768px){
 
    width:100%;
 
 }

 @media(min-width:768px){
 
    width:${(props) => props.small ? "100px" : "200px"};
    
 }

 @media(min-width:1280px){
 
    width:${(props) => props.width};

}

`;
export default Input;