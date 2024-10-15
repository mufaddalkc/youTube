import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Logo from "../assets/netflix.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "black",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  height: 300, // Fixed height for uniformity
}));

const VideoItem = ({ title, views, daysAgo, thumbnail, channelName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery("(max-width:600px)"); // Check if it's mobile view

  return (
    <Item>
      <img
        src={thumbnail}
        alt="Video Thumbnail"
        style={{ width: "100%", height: 150, objectFit: "cover" }}
      />
      <Grid container spacing={1} sx={{ alignItems: "center" }}>
        {!isMobile && ( // Hide the logo on mobile view
          <Grid item xs={12} sm={2}>
            <img src={Logo} alt="Logo" style={{ width: 75, height: 75 }} />
          </Grid>
        )}
        <Grid item xs={12} sm={9}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "block",
            }}
          >
            {title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {channelName}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {views} views • {daysAgo} days ago
          </Typography>
        </Grid>
        {!isMobile && (
          <Grid
            item
            xs={12}
            sm={1}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <MoreVertIcon sx={{ color: "white" }} onClick={handleClick} />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{ paper: { sx: { bgcolor: "grey" } } }}
            >
              <MenuItem sx={{ color: "white" }} onClick={handleClose}>
                Menu Item 1
              </MenuItem>
              <MenuItem sx={{ color: "white" }} onClick={handleClose}>
                Menu Item 2
              </MenuItem>
            </Menu>
          </Grid>
        )}
      </Grid>
    </Item>
  );
};

export default VideoItem;
