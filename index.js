const express = require("express");
const app = express();
const port = process.env.PORT || 3000 ;
const UserRouter = require("./routes/userRoutes");
const NoteRouter = require("./routes/noteRoute");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config()

const mongoose = require("mongoose");

app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
  console.log("Http method - " + req.method + " - " + res.url);
  next();
});
app.use("/user", UserRouter);
app.use("/note", NoteRouter);

app.get("/", (req, res) => {
  res.send("Finally Done Auth Part!!!!");
})

mongoose
  .connect(
    (process.env.MONGO_URL),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
