import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Logo from "../assets/logo.png";
import { Paper, useMediaQuery } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function ButtonAppBar() {
  const [searchValue, setSearchValue] = React.useState("");
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleClearSearch = () => {
    setSearchValue("");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: "#000000", top: 0 }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {isMobile ? (
              <Typography variant="h6" component="div">
                <img src={Logo} width={120} alt="YouTube Logo" />
              </Typography>
            ) : (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  sx={{ mr: 2, color: "#808080" }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                  <img src={Logo} width={120} alt="YouTube Logo" />
                </Typography>
              </>
            )}
          </Box>

          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                size="large"
                aria-label="search"
                sx={{ color: "#808080" }}
              >
                <SearchIcon />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Paper
                component="form"
                variant="outlined"
                sx={{
                  borderRadius: 20,
                  border: "1px solid #808080",
                  pl: 2,
                  boxShadow: "none",
                  width: "600px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#000",
                  height: 40,
                }}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  style={{
                    padding: "8px",
                    border: "none",
                    width: "90%",
                    outline: "none",
                    fontSize: 16,
                    fontWeight: 400,
                    color: "#fff",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    background: "none",
                    backgroundImage: "none",
                    borderRadius: "20px 0 0 20px",
                  }}
                />
                {searchValue && (
                  <IconButton
                    type="button"
                    sx={{
                      p: "10px",
                      color: "#fff",
                      borderRadius: "0 20px 20px 0",
                    }}
                    onClick={handleClearSearch}
                  >
                    <ClearIcon />
                  </IconButton>
                )}
                <IconButton
                  type="submit"
                  sx={{
                    p: "10px",
                    color: "#fff",
                    borderRadius: "0 20px 20px 0",
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
              <IconButton
                size="large"
                aria-label="microphone"
                sx={{ ml: 2, color: "#808080" }}
              >
                <MicIcon />
              </IconButton>
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="upload"
                sx={{ ml: 2, color: "#808080" }}
              >
                <VideocamIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="notifications"
                sx={{ ml: 2 }}
              >
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon sx={{ color: "#808080" }} />
                </Badge>
              </IconButton>

              <Avatar
                alt="User Name"
                src="/path/to/avatar.jpg"
                sx={{ ml: 2, width: 40, height: 40 }}
              />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
