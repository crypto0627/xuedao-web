import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Row {
  events: string;
  days: string;
}

function createData(events: string, days: string): Row {
  return { events, days };
}

const rows: Row[] = [
  createData('Challenges Announced', "May early"),
  createData('Monthly Workshops', "May-June"),
  createData('Pitch Practice', "Early-July"),
  createData('Demo Day', "July 11"),
  createData('Edux Conference', "July 12-13"),
];

export function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="event day table">
        <TableHead>
          <TableRow>
            <TableCell>Events</TableCell>
            <TableCell align="right">Days</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.events}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.events}
              </TableCell>
              <TableCell align="right">{row.days}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable
