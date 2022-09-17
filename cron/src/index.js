import express from "express";
import cors from "cors";
import SupabaseClient from "./supabase.js";
import notify from "./notification.js";

const app = express();

app.use(cors());

app.post("/", async (req, res) => {
  res.set("Content-Type", "application/json");
  try {
    const emails = await notify(SupabaseClient);
    return res.send(JSON.stringify({ message: "success", emails }));
  }
  catch (error) {
    console.log({ error })
    return res.status(500).send(JSON.stringify(error));
  }
});

app.get("/", async (req, res) => {
  res.redirect("https://eyuelberga.github.io/CryptoTrack/");
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`);
});

export default app;
