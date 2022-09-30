import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';


export default class ContactForm extends Component {
     state = {
     name: '',
     number: '',

    }
    nameId = nanoid();
    numberId = nanoid();

    handleChange = (evt) => {
        
        const { name, value } = evt.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit({ name, number });
        this.setState({
          name: '',
          number: '',
        })
    }

    render() {
      const { nameId, numberId, handleSubmit, handleChange } = this;
      return (
                <Form onSubmit={handleSubmit}>
         
                    <label htmlFor={nameId}>Name</label>
                    <Input
                     id={nameId}
                     type="text"
                     name="name"
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                     value={this.state.name}
                     onChange={handleChange}
                   />
         
         
                    <label htmlFor={numberId}>Number</label>
                    <Input
                     id={numberId}
                     type="tel"
                     name="number"
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required
                     value={this.state.number}
                     onChange={handleChange}
                  />
         
             <Button type="sybmit">Add contact</Button>
            </Form>
    )
  }
}



ContactForm.propTypes = {
    onSubmit: PropTypes.func
}