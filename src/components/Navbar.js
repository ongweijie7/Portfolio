import "./navbar.css";


const Navbar = ({ showNavbar, onClickAbout, onClickWork, onClickProject, onClickContactMe }) => {
    
    return (
        <div className={`${!showNavbar ? 'navbar' : 'transformedNavbar'}`}>
            <p onClick={onClickAbout}>About</p>
            <p onClick={onClickWork}>Work Experience</p>
            <p onClick={onClickProject}>Projects</p>
            <p onClick={onClickContactMe}>Contact Me</p>
        </div>
    )
}

export default Navbar;