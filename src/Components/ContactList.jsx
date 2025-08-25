import { Grid, TextField, Box } from "@mui/material";
import React, { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";

const ContactList = () => {
  const [searchThings, setSearchThings] = useState("");
  const { phoneBook } = usePhoneBookStore();
  const visibleList = searchThings
    ? phoneBook.filter(
        (item) =>
          item.name.toLowerCase().includes(searchThings.toLowerCase()) ||
          item.phoneNumber.includes(searchThings)
      )
    : phoneBook;
  return (
    <div>
      <Box display="flex" justifyContent="center">
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={(e) => setSearchThings(e.target.value)}
          color="secondary"
          style={{ width: '80%' }}
        />
      </Box>

      {visibleList.map((item) => (
        <div key={item.id}>
          <Grid container spacing={2} alignItems={"center"} style={{ marginTop: '10px' }}>
            <Grid item xs={2}>
              <img
                alt="face"
                src={`https://i.pravatar.cc/150?u=${item.id}`}
                width={80}
                style={{ borderRadius: '50%' }}
              ></img>
            </Grid>
            <Grid item xs={10}>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{item.name}</p>
                <p style={{ margin: 0 }}>{item.phoneNumber}</p>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
