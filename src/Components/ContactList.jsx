import { Grid, TextField, Box, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";

const ContactList = () => {
  const [searchThings, setSearchThings] = useState("");
  const { phoneBook, removeData } = usePhoneBookStore();
  const visibleList = searchThings
    ? phoneBook.filter(
        (item) =>
          item.name.toLowerCase().includes(searchThings.toLowerCase()) ||
          item.phoneNumber.includes(searchThings)
      )
    : phoneBook;
  return (
    <div>
      <Box display="flex" justifyContent="center" mb={3}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={(e) => setSearchThings(e.target.value)}
          color="secondary"
          style={{ width: "80%" }}
        />
      </Box>

      {visibleList.map((item) => (
        <Paper
          key={item.id}
          elevation={2}
          style={{
            marginBottom: "20px",
            padding: "20px",
            borderRadius: "16px",
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <img
                alt="face"
                src={`https://i.pravatar.cc/150?u=${item.id}`}
                width={80}
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item xs={8}>
              <div style={{ textAlign: "left" }}>
                <p
                  style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  {item.name}
                </p>
                <p style={{ margin: 0, fontSize: "1.1rem", color: "#555" }}>
                  {item.phoneNumber}
                </p>
              </div>
            </Grid>
            <Grid item xs={2} style={{ textAlign: "right" }}>
              <Button
                variant="contained"
                onClick={() => removeData(item.id)}
                style={{ backgroundColor: "#e57373", minWidth: 60 }}
              >
                삭제
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default ContactList;
