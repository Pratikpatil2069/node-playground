import express from "express";
import path from "path";

const app = express();

// Serve static files
app.use(express.static("public"));

// Explicitly send index.html on root
// app.get("/", (req, res) => {
//     res.sendFile(path.join(process.cwd(), "public", "index.html"));
// });

const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});
