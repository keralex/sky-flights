import {
    Box,
    Button,
    Divider,
    IconButton,
    Menu,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import PeopleIcon from '@mui/icons-material/People'

interface PassengerCategory {
    label: string
    description?: string
    key: keyof typeof initialCounts
}

const categories: PassengerCategory[] = [
    { label: 'Adultos', description: '12+ años', key: 'adults' },
    { label: 'Niños', description: '2–11 años', key: 'children' },
    { label: 'Bebés con asiento', key: 'infantsWithSeat' },
    { label: 'Bebés sin asiento', key: 'infantsWithoutSeat' },
]

const initialCounts = {
    adults: 1,
    children: 0,
    infantsWithSeat: 0,
    infantsWithoutSeat: 0,
}

const PassengerSelector = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [counts, setCounts] = useState(initialCounts)
    const [tempCounts, setTempCounts] = useState(initialCounts)

    const totalPassengers =
        counts.adults + counts.children + counts.infantsWithSeat + counts.infantsWithoutSeat

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
        setTempCounts(counts)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleConfirm = () => {
        setCounts(tempCounts)
        handleClose()
    }

    const handleCancel = () => {
        setTempCounts(counts)
        handleClose()
    }

    const handleChange = (key: keyof typeof counts, amount: number) => {
        setTempCounts((prev) => ({
            ...prev,
            [key]: Math.max(0, prev[key] + amount),
        }))
    }

    return (
        <>
            <Button
                startIcon={<PeopleIcon />}
                onClick={handleClick}
                variant="outlined"
                sx={{ textTransform: 'none' }}
            >
                {totalPassengers} pasajero{totalPassengers !== 1 ? 's' : ''}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCancel}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Box sx={{ px: 2, py: 1, width: 300 }}>
                    {categories.map(({ label, description, key }) => (
                        <Box
                            key={key}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            py={1}
                        >
                            <Box>
                                <Typography variant="subtitle1">{label}</Typography>
                                {description && (
                                    <Typography variant="caption" color="text.secondary">
                                        {description}
                                    </Typography>
                                )}
                            </Box>

                            <Box display="flex" alignItems="center" gap={1}>
                                <IconButton onClick={() => handleChange(key, -1)} disabled={tempCounts[key] === 0}>
                                    <RemoveIcon />
                                </IconButton>
                                <Typography>{tempCounts[key]}</Typography>
                                <IconButton onClick={() => handleChange(key, 1)}>
                                    <AddIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    ))}

                    <Divider sx={{ my: 1 }} />

                    <Box display="flex" justifyContent="flex-end" gap={1}>
                        <Button onClick={handleCancel}>Cancelar</Button>
                        <Button variant="contained" onClick={handleConfirm}>
                            Listo
                        </Button>
                    </Box>
                </Box>
            </Menu>
        </>
    )
}

export default PassengerSelector
