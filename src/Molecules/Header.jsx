import Logo from "../Atoms/Atoms-Header/Logo";
import NavButtons from "../Atoms/Atoms-Header/NavButtons";
import "../assets/css/css-header/header.css"
import SearchBar from "../Atoms/Atoms-Header/SearchBar";

function Header() {
    return (  
        <header className="header">
        <Logo></Logo>
        <nav className="navBar">
            <SearchBar></SearchBar>
            <NavButtons></NavButtons>
        </nav>
       
        </header>

    );
}

export default Header;