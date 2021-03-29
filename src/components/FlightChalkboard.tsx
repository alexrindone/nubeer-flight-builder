import './FlightChalkboard.scss';

const FlightChalkboard: React.FC = ({children}) => {
    return (
        <div className="flight-chalkboard">
            {children}
        </div>
    )
}

export default FlightChalkboard;