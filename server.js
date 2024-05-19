import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();

app.use(cors());

const url =
  "http://openAPI.seoul.go.kr:8088/6b57516b6e6a616531303061426d5571/json/RealtimeCityAir/1/100/";

app.get("/data", async (req, res) => {
  try {
    const response01 = await fetch(url);

    const data01 = await response01.json();

    const responseData = {
      data01: data01,
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
