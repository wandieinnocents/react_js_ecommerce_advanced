import React from 'react'
import Box from '@mui/material/Box';
import { Chip, TextField, InputAdornment } from '@mui/material';

const PopularProductCategories = () => {
  return (
    <div>
         <Box
     sx={{
       display: 'flex',
       flexWrap: 'wrap',
       paddingTop:"8px",
      //  justifyContent: 'center',
       gap: 1, // Space between chips
       padding: 1,
     }}
   >

     <Chip label="Apparel" color="success" size="small" />
     <Chip label="Apparel" color="success" size="small" />
     <Chip label="Apparel" color="success" size="small" />
     <Chip label="Apparel" color="success" size="small" />
     <Chip label="Apparel" color="success" size="small" />
     <Chip label="Apparel" color="success" size="small" />
     {/* Add more chips as needed */}
   </Box>
    </div>
  )
}

export default PopularProductCategories