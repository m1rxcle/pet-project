import "./style.css"
import logo from "./../../assets/Image/logo.jpg"

const Header = () => {
	return (
		<header className="header-container">
			<img className="imgLogo" src={logo} alt="img" />
		</header>
	)
}

export default Header
