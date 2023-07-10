import "./navbar.css";


const Navbar = ({ onClickAbout, onClickWork, onClickProject }) => {
    
    return (
        <div className="navbar">
            <p onClick={onClickAbout}>About</p>
            <p onClick={onClickWork}>Work Experience</p>
            <p onClick={onClickProject}>Projects</p>
        </div>
    )
}

export default Navbar;