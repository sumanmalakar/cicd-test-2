import express from "express";
import pageRoutes from "./routes/pageRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(pageRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
  