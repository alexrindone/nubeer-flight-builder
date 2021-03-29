import './Header.scss'

const Header: React.FC = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default Header;