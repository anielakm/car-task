import React, { Component } from 'react';
import FormMessage from './FormMessage'
import FormFields from './FormFields'
import styled from 'styled-components'
import { theme } from '../utilis/theme'

const FormContainer = styled.div`
background-color:${theme.colors.pistachio};
`;


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            zipCode: '',
            city: '',
            street: '',
            houseNum: '',
            apartmentNum: '',
            chbx1: false,
            chbx2: false,
            chbx3: false,
            chbx4: false,
            sendMessage: '',

            //boolean values for checking if input were completed correctly
            errors_message: {
                name_error: false,
                email_error_at: false,
                email_error_dot: false,
                phone_error: false,
                zipCode_error: false,
            },

            //boolean values for checking if input is empty
            errors_required: {
                name: false,
                email: false,
                phone: false,
                zipCode: false,
                city: false,
                street: false,
                houseNum: false,
                message: false
            }

        }
    }

    //messages described type of input value error
    messages = {
        name_error: 'Imię i nazwisko powinno składać się z dwóch wyrazów. Zarówno imię jak i nazwisko powinny być dłuzsze niż 3 znaki',
        email_error_at: 'Brak @ w emailu',
        email_error_dot: 'Błędny format adresu email',
        phone_error: 'Numer kontaktowy powinien składać się z 9-ciu cyfr',
        zipCode_error: 'Kod pocztowy powinien być zapisany w formacie XX-XXX i składać się z 5-ciu cyfr',
        message: 'Wszystkie wymagane pola (oznaczone *) nie zostały uzupełnione'
    }

    //hangle form with state
    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;


        if (type !== "checkbox") {
            const value = e.target.value;
            this.setState({
                [name]: value
            })
        } else {
            const checked = e.target.checked;

            this.setState({
                [name]: checked
            })
        }

    }

    // handle form submit
    handleSubmit = (e) => {
        e.preventDefault();

        //check if form were completed correctly
        let send = this.formValidation();

        //sending data from form, if formValidation function returned true
        if (send) {

            //prepared data to send
            let dataToSend = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: {
                    city: this.state.city,
                    zipCode: this.state.zipCode,
                    street: this.state.street,
                    houseNumber: this.state.houseNum,
                    apartmentNumber: this.state.apartmentNum
                },
                checkboxValues: {
                    checkbox1: this.state.chbx1,
                    checkbox2: this.state.chbx2,
                    checkbox3: this.state.chbx3,

                }
            };

            //send data with fetch method
            fetch("https://my-json-server.typicode.com/anielakm/posts-data/posts", {
                method: "post",
                body: JSON.stringify(dataToSend)
            })
                .then(resp => {
                    if (resp.ok) {
                        console.log('wiadomość wysłana');
                        console.log(dataToSend)
                        this.sendMessage('ok');
                        return resp.json()

                    } else {

                        return Promise.reject(resp)
                    }
                })
                .then(resp => {
                    console.log(resp)
                })
                .catch(error => {
                    if (error.status === 404) {
                        this.sendMessage('error');
                        console.log("Błąd: żądany adres nie istnieje");
                    }
                });
        }

    }

    formValidation = () => {

        let name = this.state.name;
        let email = this.state.email;
        let phone = this.state.phone;
        let zipCode = this.state.zipCode;
        let city = this.state.city;
        let street = this.state.street;
        let houseNum = this.state.houseNum;

        let errors = {};
        let send = true;

        let result_name, result_email, result_phone, result_zipCode;

        let errors_required = {
            name: false,
            email: false,
            phone: false,
            zipCode: false,
            city: false,
            street: false,
            houseNum: false,
            message: false
        }

        //name field validation
        if (name) {
            result_name = this.nameValidation(name);
            errors.name_error = result_name;

            //check if name input is empty
        } else {
            errors_required.name = true;
            errors_required.message = true;
        }

        //email validation
        if (email) {
            result_email = this.emailValidation(email);
            errors.email_error_at = result_email.at;
            errors.email_error_dot = result_email.dot;

            //check if email input is empty
        } else {
            errors_required.email = true;
            errors_required.message = true;
        }

        //phone validation
        if (phone) {
            result_phone = this.phoneValidation(phone);
            errors.phone_error = result_phone;

            //check if phone input is empty
        } else {
            errors_required.phone = true;
            errors_required.message = true;
        }

        //zip-code validation
        if (zipCode) {
            result_zipCode = this.zipCodeValidation(zipCode);
            errors.zipCode_error = result_zipCode;

            //check if zip-code input is empty
        } else {
            errors_required.zipCode = true;
            errors_required.message = true;
        }

        //check if city, street and house number (other required inputs) are empty
        if (!city) {
            errors_required.city = true;
            errors_required.message = true;
        }
        if (!street) {
            errors_required.street = true;
            errors_required.message = true;
        }
        if (!houseNum) {
            errors_required.houseNum = true;
            errors_required.message = true;
        }

        //update state with values from validations
        this.setState({ errors_required });
        this.setState({ errors_message: errors })

        //check if there is an error
        if ((Object.values(errors).indexOf(true) > -1) || (Object.values(errors_required).indexOf(true) > -1)) {
            send = false;
        }

        //function return true if there is no error found
        return send;


    }

    //content of message which is displayed after submit (if there is no error after validation)
    sendMessage = (text) => {
        let message;

        if (text === 'ok') {
            message = "Wiadomość wysłana poprawnie." //there is no problem in sending data
        }
        else {

            message = "Nastąpił błąd podczas wysyłania wiadomości." //something went wrong during fetch metod - more info in console 
        }

        //displaying message window, cleaning form and errors
        this.setState({
            name: '',
            email: '',
            phone: '',
            zipCode: '',
            city: '',
            street: '',
            houseNum: '',
            apartmentNum: '',
            chbx1: false,
            chbx2: false,
            chbx3: false,
            chbx4: false,
            sendMessage: message,

            errors_message: {
                name_error: false,
                email_error_at: false,
                email_error_dot: false,
                phone_error: false,
                zipCode_error: false,
            },

            errors_required: {
                name: false,
                email: false,
                phone: false,
                zipCode: false,
                city: false,
                street: false,
                houseNum: false,
                message: false
            }

        }, () => document.querySelector('#message').style.display = 'block');


    }

    //name input validation
    nameValidation = (name) => {

        let name_error_words_number = false;
        let name_error_length = false;

        //check if value contains two words separated with space (' ')
        if (!name.includes(' ')) {

            name_error_words_number = true;
            return name_error_words_number;

        } else {
            let nameSplit = name.split(" "); //splitting string into two values
            let words = nameSplit.filter(item => item.length < 3); //checking if each of words are longer than 3 signs

            if (words.length) {
                name_error_length = true;
            }

            return name_error_length;

        }


    }


    //email input validation
    emailValidation = (email) => {
        let at = false; //boolean for validate '@'
        let dot = true; //boolean for validate '.'

        //checking if value includes '@'
        if (!email.includes('@')) {
            at = true;
        }

        //checking if value includes '.' at last positions
        if ((email[email.length - 3] === '.') || ((email[email.length - 4]) === '.')) {
            dot = false;
        }

        return { at, dot }

    }

    //phone number input validation
    phoneValidation = (phone) => {

        let phone_error = false;

        //checking if phone contains 9 numbers
        if (phone.length !== 9) {
            phone_error = true;
        }

        return phone_error;

    }

    //zip code validation
    zipCodeValidation = (zipCode) => {

        let zipCode_error = false;

        //check if there is a '-' on second position of value
        if (!zipCode[2] === '-') {
            zipCode_error = true;
        }

        //take numbers from input value, parseInt method converts value to integers so by the way it checks if there were typed in numbers (letters won't be converted)
        let zipNumber = parseInt(zipCode.slice(0, 2) + zipCode.slice(3, 6));

        //check if zipNumber includes 5 numbers
        if (zipNumber.toString().length !== 5) {
            zipCode_error = true;
        }

        return zipCode_error;
    }


    //checkboxes checking
    handleCheck = () => {
        const chbx4 = this.state.chbx4;

        //checking other checkboxes, if checkbox 4 is checked
        if (!chbx4) {
            this.setState({
                chbx1: true,
                chbx2: true,
                chbx3: true,
                chbx4: true,
            })

            //uncheck checkboxes with checbox 4
        } else {
            this.setState({
                chbx1: false,
                chbx2: false,
                chbx3: false,
                chbx4: false
            })

        }

    }

    render() {



        return (
            <FormContainer>
                <FormMessage message={this.state.sendMessage} />
                <FormFields state={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleCheck={this.handleCheck} messages={this.messages} />
            </FormContainer>);
    }
}

export default Form;