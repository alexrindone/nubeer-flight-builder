import './FlightContainer.scss'

const FlightContainer: React.FC = ({children}) => {

    return (
        <div className="flight-container">
            { children }
        </div>
    )
}

export default FlightContainer;