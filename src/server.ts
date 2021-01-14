import app from "./app";

const HOST = "127.0.0.1";
const PORT = 3333;

app.listen(PORT, HOST, () =>
  console.log(`Server Running on http://${HOST}:${PORT}`)
);
