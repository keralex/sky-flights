// src/components/molecules/DateSelector.tsx
import { Paper } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

const DateSelector = () => {
    const [departureDate, setDepartureDate] = useState<Dayjs | null>(dayjs())
    const [returnDate, setReturnDate] = useState<Dayjs | null>(dayjs().add(7, 'day'))

    return (
        <Paper elevation={1} sx={{ display: 'flex', gap: 2, p: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Fecha de salida"
                    value={departureDate}
                    onChange={(newValue) => setDepartureDate(newValue)}
                    slotProps={{ textField: { fullWidth: true } }}
                />

                <DatePicker
                    label="Fecha de regreso"
                    value={returnDate}
                    onChange={(newValue) => setReturnDate(newValue)}
                    slotProps={{ textField: { fullWidth: true } }}
                    minDate={departureDate || dayjs()}
                />
            </LocalizationProvider>
        </Paper>
    )
}

export default DateSelector;
