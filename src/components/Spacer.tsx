import './Spacer.scss';

interface SpacerProps {
    height: number;
}

const Spacer: React.FC<SpacerProps> = ({ height }) => {
    return (
        <div style={{ height }}></div>
    )
}

export default Spacer;