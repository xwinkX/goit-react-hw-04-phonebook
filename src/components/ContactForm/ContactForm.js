import css from 'components/ContactForm/ContactForm.module.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formId = nanoid();

  const formChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={formSubmit}>
      <h2>Name</h2>
      <label htmlFor={formId}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={formChange}
          id={formId}
        />
      </label>
      <h2>Number</h2>
      <label htmlFor={formId}>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={formChange}
          id={formId}
          className={css.input}
        />
      </label>
      <button>Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  formSubmit: PropTypes.func,
  htmlFor: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};
