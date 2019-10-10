import styled from 'styled-components'
import { theme } from '../../utilis/theme'

const Form = styled.form`

    width:90%;
    margin:auto;
    padding:3% 0;

    h3{
    font-weight:800;
    text-transform:uppercase;
    }

    input{
        margin: 0 5px 5px 0;
        border:none;
        padding:20px 25px;
        font-size:12px;
    }

    .form-text{

        margin: 30px 0;

        p{
        margin: 10px 0;
        color:grey;
        font-size:12px;
        line-height:22px;
        }

    }


    label {

        color:grey;
        display: block;
        position: relative;
        padding-left: 35px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-size:12px;
        line-height:22px;
        margin:10px;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: white;
    }

    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    input:checked ~ .checkmark:after {
    display: block;
    }

    .checkmark:after {

        left: 7px;
        top: 2px;
        width: 8px;
        height: 12px;
        border: solid rgba(0,0,0,0.7);
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);

    }
}

.button-container{

    width:100%;
    text-align:right;
    margin:40px 0;

        button{

            background-color:${theme.colors.brown};
            color:white;
            border:0;
            padding:15px 40px;
            font-size:18px;
            font-weight:500;

            svg{margin-left:10px}

        }

}

.error{

    background-color:white;
    font-size:14px;
    line-height:44px;
    text-align:center;
    color:red;
    opacity:0.6;
    box-shadow: 3px 3px 3px rgba(0,0,0,0.07);
    
}

@media(max-width:768px){
   
    h3{

        font-size:18px;
        text-align:center;
        margin-top:20px;

    }

    .button-container{

        text-align:center;
        margin:0 0 5vh;

    }

}

@media(min-width:1280px){

    width:1200px;
    margin:auto;

}
`;

export default Form;