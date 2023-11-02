import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Table = () => {

  const person = [{name:'aswin', age:30, location:'Kochi'},{name:'Maya', age:30, location:'TVM'}]
  return (
    <div>
      

      <TableContainer component={Paper}>
     
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {person.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.age}</TableCell>
              <TableCell align="right">{item.location}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>


    </div>
  )
}

export default Table
