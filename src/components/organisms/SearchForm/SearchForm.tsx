import DateSelector from "../../molecules/DatesSelector"
import FlightLocationSelector from "../../molecules/FlightLocationSelector"

export const SearchForm = () => {
    return (<>
        <FlightLocationSelector />
        <DateSelector />
    </>)
}