const express = require("express");
const path = require("path");
const app = express();
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");
const { getNotes, getNoteById } = require("./controllers/noteControllers");
const { protect } = require("./middlewares/authMiddlewares");

dotenv.config();
connectDB();
app.use(express.json());

// ------------- deployment ---------------------

// __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/Frontend/build")));
//   app.get("/api/notes", protect, getNotes);
//   app.get("/api/notes/:id", getNoteById);
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running.....");
//   });
// }

// ----------------------------------------------

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started running on PORT ${PORT}`));
