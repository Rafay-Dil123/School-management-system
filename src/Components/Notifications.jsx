import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// or

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Badge from "@mui/material/Badge";
// import MailIcon from '@mui/icons-material/Mail'

function Notifications() {
  const [getRows, setRows] = useState([]);
  const [loadData, setData] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    //loadList();
  };

  const sample_data = {
    Teacher: "Nauman",
    Message: "Ajao kamry",
  };

  //   const loadList = async () => {
  //     const result = await axios.get("http://localhost:8000/api/list");
  //     setData(result.data);
  //   };
  //   // To get total count from backend
  //   const getLatestRowDetails = async () => {
  //     const results = await axios.get("http://localhost:8000/api/getLatestRow");
  //     setRows(results.data);
  //   };

  //   // Calling useEffect
  //   useEffect(() => {
  //     loadList();
  //     getLatestRowDetails();
  //   }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {/* <Button onClick={handleOpen}><Badge badgeContent={getRows == '0' ? "0" : getRows }  color="warning"> <NotificationsIcon /> </Badge> </Button> */}
            <MenuItem onClick={handleOpen}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge
                  badgeContent={getRows == "0" ? "0" : getRows}
                  color="error"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </MenuItem>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Model Box to Show data  */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 250 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell component="th">
                        <b>Student Name</b>
                      </TableCell>
                      <TableCell component="th">
                        <b>Description</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* {loadData.map((row) => ( */}
                    <TableRow
                    // style={{
                    //   backgroundColor:
                    //     row.status == "0" ? "#ccffcc" : "white",
                    // }}
                    >
                      <TableCell> {sample_data.Teacher} </TableCell>
                      <TableCell>{sample_data.Message}</TableCell>
                    </TableRow>
                    {/* ))} */}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <br />
          <br />
        </Box>
      </Modal>

      {/* Submit form       */}
    </div>
  );
}
export default Notifications;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  //   bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
