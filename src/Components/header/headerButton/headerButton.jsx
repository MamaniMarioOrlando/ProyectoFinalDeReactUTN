import "./headerButton.css";
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";

function HeaderButton( {data: { name,link,customCss,img } }){
  if(name === "Localizar tienda"){
    return(
      <li className={`header__button ${customCss}`}>
        <a target="_blank" rel="noopener noreferrer" href={link}>
          {name}
        </a>
      </li>
    );
  }
  if(img) {
    return (
        <li className={`header__button ${customCss}`}>
          <NavLink to={link}>
              <img src={img} alt={name} />
          </NavLink>
            
        </li>
      );
  }
  return (<li className= {`header__button header__button--link ${customCss}`}>
    <NavLink to={link}>{name}</NavLink>
  </li>);
}

HeaderButton.propTypes = {
  data: PropTypes.object
};

export default HeaderButton;
