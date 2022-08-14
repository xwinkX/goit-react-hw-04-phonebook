import css from 'components/Filter/Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <h2 className={css.h2}>Find contacts by name</h2>
      <label>
        <input type="text" value={value} onChange={onChange} />
      </label>
    </>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
