import "./App.css";
import { Grid } from "@mui/material";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1
          style={{
            color: "#9c27b0",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Phone Book
        </h1>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <ContactForm />
          </Grid>
          <Grid item xs={12} md={7}>
            <ContactList />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
