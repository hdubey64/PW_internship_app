import "./calcyButton.css";
import PropTypes from "prop-types";

const Button = ({ onClick, data }) => {
   return (
      <button onClick={onClick} className={` calcy-button ${data.color}`}>
         {data.value}
      </button>
   );
};
export default Button;

Button.propTypes = {
   data: PropTypes.shape({
      symbol: PropTypes.string,
      number: PropTypes.string,
      operation: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
   }).isRequired,
   onClick: PropTypes.func,
};
