import ButtonAppBar from "./comonents/ButtonAppBar";
import Sidebar from "./comonents/SideBar";
import BasicGrid from "./comonents/BasicGrid";
import { Box, useMediaQuery } from "@mui/material";
import "./App.css";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 }}>
        <ButtonAppBar />
      </Box>

      <Box
        sx={{
          display: "flex",
          height: "100vh",
          marginTop: "64px",
        }}
      >
        {!isMobile && (
          <Box
            sx={{
              width: isTablet ? "30vw" : "20vw",
              bgcolor: "black",
              position: "fixed",
              height: "calc(100vh - 64px)",
              overflowY: "auto",
              zIndex: 1,
              top: "64px",
            }}
          >
            <Sidebar />
          </Box>
        )}

        <Box
          sx={{
            marginLeft: !isMobile ? (isTablet ? "30vw" : "20vw") : 0,
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
