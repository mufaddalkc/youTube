import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import VideoItem from "./VideoItem";
import img from "../assets/thum.png";

export default function BasicGrid() {
  const videoItems = [
    {
      title: "Squid Game: Season 1 Recap | Hindi | Netflix India",
      views: "203K",
      daysAgo: 6,
      thumbnail: img,
      channelName: "Netflix India",
    },
    {
      title: "NARAK | Stand-up Comedy by Samay Raina",
      views: "597K",
      daysAgo: 3,
      thumbnail: img,
      channelName: "Samay Raina",
    },
    {
      title:
        "Sunil Grover & Krushna's HILARIOUS SRK-Salman Mimicry 🤣 Ft. Kartik Aaryan",
      views: "100K",
      daysAgo: 10,
      thumbnail: img,
      channelName: "Netflix India",
    },
    {
      title:
        "Sunil Grover & Krushna's HILARIOUS SRK-Salman Mimicry 🤣 Ft. Kartik Aaryan",
      views: "100K",
      daysAgo: 10,
      thumbnail: img,
      channelName: "Netflix India",
    },
    {
      title: "Squid Game: Season 1 Recap | Hindi | Netflix India",
      views: "203K",
      daysAgo: 6,
      thumbnail: img,
      channelName: "Netflix India",
    },
    {
      title: "Squid Game: Season 1 Recap | Hindi | Netflix India",
      views: "203K",
      daysAgo: 6,
      thumbnail: img,
      channelName: "Netflix India",
    },
    {
      title: "NARAK | Stand-up Comedy by Samay Raina",
      views: "597K",
      daysAgo: 3,
      thumbnail: img,
      channelName: "Samay Raina",
    },
    {
      title:
        "Sunil Grover & Krushna's HILARIOUS SRK-Salman Mimicry 🤣 Ft. Kartik Aaryan",
      views: "100K",
      daysAgo: 10,
      thumbnail: img,
      channelName: "Netflix India",
    },
    {
      title:
        "Sunil Grover & Krushna's HILARIOUS SRK-Salman Mimicry 🤣 Ft. Kartik Aaryan",
      views: "100K",
      daysAgo: 10,
      thumbnail: img,
      channelName: "Netflix India",
    },
    {
      title: "Squid Game: Season 1 Recap | Hindi | Netflix India",
      views: "203K",
      daysAgo: 6,
      thumbnail: img,
      channelName: "Netflix India",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Grid container spacing={2}>
            {videoItems.map((video, index) => (
              <Grid size={4} key={index}>
                <VideoItem
                  title={video.title}
                  views={video.views}
                  daysAgo={video.daysAgo}
                  thumbnail={video.thumbnail}
                  channelName={video.channelName}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
