import ButtonAppBar from "./comonents/ButtonAppBar";
import Sidebar from "./comonents/SideBar";
import BasicGrid from "./comonents/BasicGrid";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
        <ButtonAppBar />
      </Box>
      <Box sx={{ display: "flex", height: "100vh", marginTop: "64px" }}>
        <Box
          sx={{
            width: "20vw",
            bgcolor: "#f0f0f0",
            position: "fixed",
            height: "calc(100vh - 64px)",
            overflowY: "auto",
            zIndex: 1,
            top: "64px",
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
