const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Xin chào từ backend 🚀" });
});

app.listen(PORT, () => console.log(`Server chạy tại cổng ${PORT}`));