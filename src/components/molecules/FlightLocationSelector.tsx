import { IconButton, TextField, InputAdornment, Paper } from '@mui/material'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useState } from 'react'

const FlightLocationSelector = () => {
  const [origin, setOrigin] = useState('Buenos Aires')
  const [destination, setDestination] = useState('Aruba')

  const handleSwap = () => {
    setOrigin(destination)
    setDestination(origin)
  }

  return (
    <Paper elevation={1} sx={{ display: 'flex', alignItems: 'center', p: 1, gap: 1 }}>
      <TextField
        fullWidth
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        placeholder="Origen"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      <IconButton onClick={handleSwap} size="large" sx={{ mx: 1 }}>
        <SwapHorizIcon />
      </IconButton>
      <TextField
        fullWidth
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destino"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          },
        }}
      />

    </Paper>
  )
}

export default FlightLocationSelector
