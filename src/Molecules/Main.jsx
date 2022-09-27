import Information from "../Atoms/Atoms-Main/Information";
import Subtitle from "../Atoms/Atoms-Main/Subtitle";
import Articles from "./Articles";


function Main() {
    return (  
        <>
        <nav className="nav">
        <Information></Information>
        <Subtitle></Subtitle>
        </nav>
        <Articles></Articles>
        </>
    );
}

export default Main;