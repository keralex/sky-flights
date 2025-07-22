// src/components/molecules/DateSelector.tsx
import { Box } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

const DateSelector = () => {
    const [departureDate, setDepartureDate] = useState<Dayjs | null>(dayjs())
    const [returnDate, setReturnDate] = useState<Dayjs | null>(dayjs().add(7, 'day'))

    return (
        <Box sx={{ display: 'flex', gap: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Departure "
                    value={departureDate}
                    onChange={(newValue) => setDepartureDate(newValue)}
                    slotProps={{ textField: { fullWidth: true } }}
                />

                <DatePicker
                    label="Return "
                    value={returnDate}
                    onChange={(newValue) => setReturnDate(newValue)}
                    slotProps={{ textField: { fullWidth: true } }}
                    minDate={departureDate || dayjs()}
                />
            </LocalizationProvider>
        </Box>
    )
}

export default DateSelector;
