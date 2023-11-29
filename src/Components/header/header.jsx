import HeaderButton from "./headerButton/headerButton.jsx";
import logo from "../../assets/ico/logo.svg";
import "./header.css";

const buttonList = [
    {
        name : "logo",
        link : "home",
        customCss : "",
        img : logo,
    },
    {
        name : "COFFEE",
        link : "cafe",
        customCss : "",
        img : "",
    },
    {
        name : "MENU",
        link : "menu",
        customCss : "",
        img : "",
    },
    {
        name : "EXPERIENCIA",
        link : "experiencia",
        customCss : "",
        img : "",
    },
    {
        name : "Localizar tienda",
        link : "https://www.google.com.ar/maps/search/Starbucks/@-34.6556054,-58.4823916,11z?entry=ttu",
        customCss : "header__button--right",
        img : "",
    },

];

function Header() {
  return (
    <header>
        <nav>
            <div className='wrapper'>
                <ul className='header__container'>
                    {
                        buttonList.map((aButton,index) => {
                            
                            return < HeaderButton key={index} data={aButton} />;
                        })
                    }
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;