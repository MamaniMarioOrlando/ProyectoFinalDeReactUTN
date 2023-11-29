import PropTypes from "prop-types"
import "./titleBar.css";

function TitleBar ({text}) {
  return (
    <div className="title-bar">{text}</div>
  );
}

TitleBar.propTypes= {
    text: PropTypes.string
}

export default TitleBar;