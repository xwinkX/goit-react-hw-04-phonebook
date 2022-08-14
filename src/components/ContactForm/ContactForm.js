import css from 'components/ContactForm/ContactForm.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  formId = nanoid();

  formChange = event => {
    const { value } = event.currentTarget;
    this.setState({ [event.currentTarget.name]: value });
  };
  formSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={css.contactForm} onSubmit={this.formSubmit}>
        <h2>Name</h2>
        <label htmlFor={this.formId}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.formChange}
            id={this.formId}
          />
        </label>
        <h2>Number</h2>
        <label htmlFor={this.formId}>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.formChange}
            id={this.formId}
            className={css.input}
          />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  formSubmit: PropTypes.func,
  htmlFor: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};
export default ContactForm;
