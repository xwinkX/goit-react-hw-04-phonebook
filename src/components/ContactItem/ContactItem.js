import css from 'components/ContactItem/ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContacts }) => {
  return (
    <li className={css.li}>
      <p className={css.p}>{name}</p>
      <p>{number}</p>
      <button className={css.button} onClick={() => onDeleteContacts(id)}>
        Удалить
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
