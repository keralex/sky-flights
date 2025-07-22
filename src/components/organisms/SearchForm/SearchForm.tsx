import { Grid } from "@mui/material";
import DateSelector from "../../molecules/DatesSelector";
import FlightLocationSelector from "../../molecules/FlightLocationSelector";
import PassengerSelector from "../../molecules/PassengerSelector";

export const SearchForm = () => {
    return (
        <Grid container spacing={{ xs: 2 }} >
            <Grid size={{ xs: 12 }}>
                <PassengerSelector />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <FlightLocationSelector />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>

                <DateSelector />
            </Grid>
        </Grid>
    );
};
