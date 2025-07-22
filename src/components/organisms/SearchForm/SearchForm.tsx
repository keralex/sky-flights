import { Button, Grid } from "@mui/material";
import DateSelector from "../../molecules/DatesSelector";
import FlightLocationSelector from "../../molecules/FlightLocationSelector";
import PassengerSelector from "../../molecules/PassengerSelector";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export const SearchForm = () => {
    const [origin, setOrigin] = useState('Buenos Aires')
    const [destination, setDestination] = useState('Aruba')
    const [departureDate, setDepartureDate] = useState<Dayjs | null>(dayjs())
    const [returnDate, setReturnDate] = useState<Dayjs | null>(dayjs().add(7, 'day'))
    const [passengers, setPassengers] = useState({
        adults: 1,
        children: 0,
        infantsWithSeat: 0,
        infantsWithoutSeat: 0,
    })

    const handleSubmit = () => {
        const formData = {
            origin,
            destination,
            departureDate: departureDate?.format('YYYY-MM-DD'),
            returnDate: returnDate?.format('YYYY-MM-DD'),
            passengers,
        }

        console.log('Datos del form:', formData)

        // Aquí podrías disparar una búsqueda con React Query
        // por ejemplo: refetch() o setSearchParams(formData)
    }

    return (
        <Grid container spacing={{ xs: 2 }} >
            <Grid size={{ xs: 12 }}>
                <PassengerSelector onChange={setPassengers} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <FlightLocationSelector onChangeOrigin={setOrigin}
                    onChangeDestination={setDestination} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <DateSelector onChangeDeparture={setDepartureDate}
                    onChangeReturn={setReturnDate} />
            </Grid>
            <Grid size={{ xs: 12 }}>
                <Button variant="contained" onClick={handleSubmit} >
                    Search
                </Button>
            </Grid>

        </Grid>
    );
};
