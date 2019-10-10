import styled from 'styled-components'

const MessageContainer = styled.aside`
position:fixed;
top:0;
height:100vh;
width:100vw;
background-color:rgba(0,0,0,0.5);
z-index:9;
display:none;

div{
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
div{

    background-color:white;
    z-index:10;
    position:relative;


    span{
        position:absolute;
        top:0;
        right:0;
        padding:15px;
        font-size:24px;
        cursor:pointer;
    }
}
}

@media(max-width:678px){

    div{
        div{
            height:40vh;
            width:80%;
        }
    }
    
}
@media(min-width:678px){
    p{font-size: 22px;}
    div{
        div{
            height:300px;
            width:600px;
        }
    }
}
@media(min-width:1280px){
    p{font-size:18px;
    text-transform:uppercase;
    letter-spacing:1px;}
}
`;

export default MessageContainer;