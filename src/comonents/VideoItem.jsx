import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Logo from "../assets/netflix.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "black",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  height: 300,
}));

const VideoItem = ({ title, views, daysAgo, thumbnail, channelName }) => {
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
        <Grid2 size={10}>
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
        </Grid2>
      </Grid2>
    </Item>
  );
};

export default VideoItem;
