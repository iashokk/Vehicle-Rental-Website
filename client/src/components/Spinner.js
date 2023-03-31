import React from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
function Spinner() {
    return (
        <Box sx={{ display: 'flex' }} className="spinner">
      <CircularProgress  size={30}/>
    </Box>
    )
}

export default Spinner
