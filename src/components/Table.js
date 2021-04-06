import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#53A8E2",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(Brand, Model, Year) {
//   return { Brand, Model, Year };
// }

// const rows = [
//   createData("Nokia", "6600", 2004),
//   createData("Samsung", "S6", 2006),
//   createData("Apple", "iPhone4", 2008),
//   createData("Sony", "Z2", 2009),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    maxHeight: "322px",
  },
});

export default function CustomizedTables({ mobiles }) {
  const classes = useStyles();
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table stickyHeader className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Brand</StyledTableCell>
            <StyledTableCell align="right">Model</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mobiles.map((mobile, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {mobile.brand}
              </StyledTableCell>
              <StyledTableCell align="right">{mobile.model}</StyledTableCell>
              <StyledTableCell align="right">{mobile.year}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
