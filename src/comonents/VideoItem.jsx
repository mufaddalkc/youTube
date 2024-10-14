import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Logo from "../assets/netflix.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "black",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  height: 300,
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

  return (
    <Item>
      <img
        src={thumbnail}
        alt="Video Thumbnail"
        style={{ width: "100%", height: 150, objectFit: "cover" }}
      />
      <Grid2 container spacing={1} sx={{ alignItems: "center" }}>
        <Grid2 size={2}>
          <img src={Logo} alt="Logo" style={{ width: 75, height: 75 }} />
        </Grid2>
        <Grid2 size={9}>
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
            {views} views • {daysAgo} days ago{" "}
          </Typography>
        </Grid2>
        <Grid2 size={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <MoreVertIcon sx={{ color: "white" }} onClick={handleClick} />
          <Menu
            // sx={{
            //   "& .MuiPaper-root": {
            //     background: "red",
            //   },
            // }}
            slotProps={{ paper: { sx: { bgcolor: "grey" } } }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem sx={{ color: "white" }} onClick={handleClose}>
              Menu Item 1
            </MenuItem>
            <MenuItem sx={{ color: "white" }} onClick={handleClose}>
              Menu Item 2
            </MenuItem>
          </Menu>
        </Grid2>
      </Grid2>
    </Item>
  );
};

export default VideoItem;
