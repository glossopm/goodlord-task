import "./Header.css";
import logo from "../../assets/goodlord-logo-large_green.svg";

const Header = () => {
  return (
    <header className="Header-header">
      <img src={logo} className="Header-logo" alt="logo" />
    </header>
  );
};

export default Header;
