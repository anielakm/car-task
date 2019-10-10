import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Form from './FormContainer/Form'
import Input from './FormContainer/Input'


const FormFields = (props) => {

    const { name, email, phone, zipCode, city, street, houseNum, apartmentNum, chbx1, chbx2, chbx3, chbx4, errors_required, errors_message } = props.state;
    const { handleChange, handleCheck, handleSubmit } = props;
    const { messages } = props;

    return (<>
        <Form onSubmit={handleSubmit} noValidate>

            <h3>Wypełnij formularz</h3><br />

            <Input width="330px" type="text" name="name" placeholder="* Imię i Nazwisko" value={name} onChange={handleChange} style={errors_message.name_error || errors_required.name ? { border: `1px solid red` } : null} />
            <Input width="330px" type="text" name="email" placeholder="* E-mail" value={email} onChange={handleChange} style={(errors_required.email || errors_message.email_error_at || errors_message.email_error_dot) ? { border: `1px solid red` } : null} />
            <Input width="290px" type="number" name="phone" placeholder="* Nr telefonu" value={phone} onChange={handleChange} style={errors_required.phone || errors_message.phone_error ? { border: `1px solid red` } : null} />
            <Input width="230px" small type="text" name="zipCode" placeholder="* Kod pocztowy" value={zipCode} onChange={handleChange} style={errors_required.zipCode || errors_message.zipCode_error ? { border: `1px solid red` } : null} />
            <Input width="220px" type="text" name="city" placeholder="* Miejscowość" value={city} onChange={handleChange} style={errors_required.city ? { border: `1px solid red` } : null} />
            <Input width="300px" type="text" name="street" placeholder="* Ulica" value={street} onChange={handleChange} style={errors_required.street ? { border: `1px solid red` } : null} />
            <Input width="100px" small type="text" name="houseNum" placeholder="* Nr domu" value={houseNum} onChange={handleChange} style={errors_required.houseNum ? { border: `1px solid red` } : null} />
            <Input width="100px" small type="text" name="apartmentNum" placeholder="Nr lokalu" value={apartmentNum} onChange={handleChange} /> <br />

            <div className="form-text">
                <p>* pola wymagane</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio voluptas, cumque consectetur quaerat minima doloremque sint iusto dolores odit quos nesciunt? Aut rem sequi aspernatur reprehenderit voluptatibus illo consequuntur inventore.</p>
            </div>

            <label htmlFor="chbx1"><input name="chbx1" type="checkbox" id="chbx1" onChange={handleChange} checked={chbx1} /><span className="checkmark"></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat voluptatem, architecto nemo deserunt dolore blanditiis et repellat? Reiciendis, voluptatibus earum.</label>
            <label htmlFor="chbx2" ><input name="chbx2" type="checkbox" id="chbx2" onChange={handleChange} checked={chbx2} /> <span className="checkmark"></span>Facilis quaerat voluptatem, architecto nemo deserunt dolore blanditiis et repellat? Reiciendis, voluptatibus earum.</label>
            <label htmlFor="chbx3" ><input name="chbx3" type="checkbox" id="chbx3" onChange={handleChange} checked={chbx3} /><span className="checkmark"></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat voluptatem, architecto nemo deserunt dolore blanditiis et repellat? Reiciendis, voluptatibus earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores cupiditate doloribus nisi, modi sit veritatis a maiores dignissimos pariatur error enim sequi laboriosam saepe atque quisquam quia animi id?
Corrupti temporibus molestias ullam inventore quod? Ipsam magnam praesentium aut culpa deleniti, similique nesciunt odit tempore ipsum molestias perspiciatis suscipit eius voluptatum error, eveniet optio quae quisquam ducimus est placeat!</label>
            <label htmlFor="chbx4" ><input name="chbx4" type="checkbox" id="chbx4" onChange={handleCheck} checked={chbx4} /><span className="checkmark"></span>{chbx4 ? 'Odznacz wszystko' : 'Zaznacz wszystko'}</label> <br />

            <p className="error">{errors_message.name_error && messages.name_error}</p>
            <p className="error">{errors_message.phone_error && messages.phone_error}</p>
            <p className="error">{errors_message.email_error_at && messages.email_error_at}</p>
            <p className="error">{errors_message.email_error_dot && messages.email_error_dot}</p>
            <p className="error">{errors_message.zipCode_error && messages.zipCode_error}</p>
            <p className="error">{errors_required.message && messages.message}</p>

            <div className="button-container">

                <button type="submit">Wyślij formularz  <FontAwesomeIcon icon={faChevronRight} /></button>


            </div>


        </Form>
    </>);
}

export default FormFields;