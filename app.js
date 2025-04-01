const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (video)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Docker Image</title></head>
      <body>
        <h1>Docker Image</h1>
        <video width="720" height="480" controls>
          <source src="/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
