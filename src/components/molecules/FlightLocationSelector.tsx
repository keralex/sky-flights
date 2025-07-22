import { IconButton, TextField, InputAdornment, Box } from '@mui/material'
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
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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

      <IconButton onClick={handleSwap} size="medium">
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

    </Box>
  )
}

export default FlightLocationSelector
