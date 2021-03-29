import './Menu.scss';

interface MenuProps {
    title: string;
}

const Menu: React.FC<MenuProps> = ({ title }) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    )
}

export default Menu