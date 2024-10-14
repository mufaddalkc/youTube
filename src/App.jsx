import ButtonAppBar from "./comonents/ButtonAppBar";
import Sidebar from "./comonents/SideBar";
import BasicGrid from "./comonents/BasicGrid";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <ButtonAppBar />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box
          sx={{
            width: "20vw",
            bgcolor: "#f0f0f0",
            position: "fixed",
            height: "100vh",
            overflowY: "auto",
            zIndex: 1,
          }}
        >
          <Sidebar />
        </Box>

        <Box
          sx={{
            marginLeft: "20vw",
            flexGrow: 1,
            overflowY: "auto",
            padding: 2,
            // marginTop: "64px",
            bgcolor: "black",
            color: "white",
          }}
        >
          <BasicGrid />
        </Box>
      </Box>
    </>
  );
}

export default App;
