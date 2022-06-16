import * as React from 'react';
import './Table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,trackingId, date, status) {
  return { name,trackingId, date, status };
}

const rows = [
  createData('Aravindth',27121997,'27 Dec 1997', 'Approved'),
  createData('Bala',27121997,'10 May 2022', 'Pending'),
  createData('Manoj',27121997,'6 Sep 2021', 'Delivered'),
  createData('Anu',27121997,'23 May 1993', 'Approved'),
];

const makeStyle = (status)=> {
    if (status === 'Approved')
    {
        return{
            background: 'green',
            color: 'white',
        }
    }
    else if(status === 'Pending')
    {
        return{
            background: 'red',
            color: 'white',
        }
    }
    else{
        return{
            background: 'blue',
            color: 'white',
        }
    }
}
// color: status==='Apporoved' ? "green" : "red"

// color: rate >= 8 ? "green" : "red",


export default function BasicTable() {
  return (
      <div className="Table">
          <h3>Recent Orders</h3>
    <TableContainer component={Paper}
    style = {{boxShadow: '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                  <span className='status' style={makeStyle(row.status)}>{row.status} </span>
              </TableCell>
              <TableCell align="left" className='Details' >Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

  );
}
