import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import UserModels from "../server/models/User.js";
dotenv.config({ path: "./.env.local" }); //bu kısımı doğru yazınca mongodb doğru bağlandı.

const app = express();
app.use(express.json());
app.use(cors());

console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => console.log("MongoDB Atlas bağlantısı başarılı"))
  .catch((err) => console.error("MongoDB bağlantı hatası:", err));

// Basit test endpoint
app.get("/", (req, res) => res.send("Backend çalışıyor"));

app.post("/Login", (req, res) => {
  const { mail, password } = req.body;
  UserModels.findOne({ mail: mail })
    .then((users) => {
      if (users) {
        if (users.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect.");
        }
      } else {
        res.json("No record existed.");
      }
    })
    .catch((err) => res.json(err));
});

app.post("/SignUp", (req, res) => {
  UserModels.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
