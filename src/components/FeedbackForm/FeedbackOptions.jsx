import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackForm = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.buttonList}>
      {options.map(option => (
        <li key={option} className={s.buttonItem}>
          <button
            className={s.button}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackForm.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackForm;
