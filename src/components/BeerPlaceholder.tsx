import './BeerPlaceholder.scss'

interface BeerPlaceholderProps {
    additionalClass?: string
    onClick?:(e: any) => void
}

const BeerPlaceholder: React.FC<BeerPlaceholderProps> = ({ additionalClass, onClick, children }) => {
    return (
        <div onClick={onClick}>
            {children ? children : <div className={`circle ${additionalClass?.length ? additionalClass : ''}`}></div>}
        </div>
    )
}

export default BeerPlaceholder;