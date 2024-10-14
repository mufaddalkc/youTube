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
import { Paper } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
        {" "}
        {/* Set AppBar color to black */}
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              sx={{ mr: 2, color: "#808080" }} // Set MenuIcon color to gray
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={Logo} width={120} alt="YouTube Logo" />
            </Typography>
          </Box>

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
              sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
                width: "400px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                placeholder="Search..."
                style={{
                  padding: "8px",
                  borderRadius: "20px",
                  border: "none",
                  width: "85%",
                  outline: "none",
                }}
              />
              <IconButton type="submit" sx={{ p: "10px", color: "#808080" }}>
                {" "}
                {/* Change SearchIcon color to gray */}
                <SearchIcon />
              </IconButton>
            </Paper>
            <IconButton
              size="large"
              aria-label="microphone"
              sx={{ ml: 2, color: "#808080" }}
            >
              {" "}
              {/* Change MicIcon color to gray */}
              <MicIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="upload"
              sx={{ ml: 2, color: "#808080" }}
            >
              {" "}
              {/* Change VideocamIcon color to gray */}
              <VideocamIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="notifications"
              sx={{ ml: 2 }}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon sx={{ color: "#808080" }} />{" "}
                {/* Change NotificationsIcon color to gray */}
              </Badge>
            </IconButton>

            <Avatar
              alt="User Name"
              src="/path/to/avatar.jpg"
              sx={{ ml: 2, width: 40, height: 40 }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
