import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addData } = usePhoneBookStore();
  const handleAddData = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    addData(name, phoneNumber);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
    >
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="PhoneNumber"
        variant="outlined"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddData} style={{ backgroundColor: '#ce93d8' }}>
        Add
      </Button>
    </Box>
  );
};

export default ContactForm;
