import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DownloadIcon from "@mui/icons-material/Download";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.08)",
  },
}));

const StyledListItemIcon = styled(ListItemIcon)({
  color: "gray",
});

export default function Sidebar() {
  return (
    <List
      sx={{
        width: "20vw",
        backgroundColor: "black",
        height: "100vh",
        color: "white",
      }}
    >
      <ListItemButton component="a" href="#">
        <StyledListItemIcon>
          <HomeIcon />
        </StyledListItemIcon>
        <ListItemText primary="Home" sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton component="a" href="#">
        <StyledListItemIcon>
          <AppShortcutIcon />
        </StyledListItemIcon>
        <ListItemText primary="Shorts" sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton component="a" href="#">
        <StyledListItemIcon>
          <SubscriptionsIcon />
        </StyledListItemIcon>
        <ListItemText primary="Subscriptions" sx={{ color: "white" }} />
      </ListItemButton>
      <Divider sx={{ backgroundColor: "gray" }} />
      <ListItemButton component="a" href="#">
        <StyledListItemIcon>
          <Avatar sx={{ width: 24, height: 24 }}>Y</Avatar>
        </StyledListItemIcon>
        <ListItemText primary="You" sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton>
        <StyledListItemIcon>
          <HistoryIcon />
        </StyledListItemIcon>
        <ListItemText primary="History" sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton component="a" href="#">
        <StyledListItemIcon>
          <PlaylistPlayIcon />
        </StyledListItemIcon>
        <ListItemText primary="Playlist" sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton component="a" href="#">
        <StyledListItemIcon>
          <WatchLaterIcon />
        </StyledListItemIcon>
        <ListItemText primary="Watch Later" sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton component="a" href="#">
        <StyledListItemIcon>
          <ThumbUpIcon />
        </StyledListItemIcon>
        <ListItemText primary="Liked Videos" sx={{ color: "white" }} />
      </ListItemButton>
      <ListItemButton component="a" href="#">
        <StyledListItemIcon>
          <DownloadIcon />
        </StyledListItemIcon>
        <ListItemText primary="Downloads" sx={{ color: "white" }} />
      </ListItemButton>
      <Divider sx={{ backgroundColor: "gray" }} />
      <ListItemButton component="a" href="#">
        <StyledListItemIcon>
          <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>A</Avatar>
        </StyledListItemIcon>
        <ListItemText primary="Account" sx={{ color: "white" }} />
      </ListItemButton>
    </List>
  );
}
