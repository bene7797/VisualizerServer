const express = require("express");
const ytdl = require("ytdl-core");
const app = express();

app.get("/audio", async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send("URL is required");
  }

  res.header("Content-Disposition", 'attachment; filename="audio.mp3"');
  ytdl(url, { filter: "audioonly" }).pipe(res);
});

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
