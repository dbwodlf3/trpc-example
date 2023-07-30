import path from "path";
import express from "express";
import { trpcMiddleWare } from "./trpc";

const app = express();
const static_path = path.resolve(path.join(__dirname, "../../static"));

app.use("/trpc", trpcMiddleWare);

app.use("/public", express.static(static_path));

app.get("/", (req, res) => {
    res.redirect("public/index.html");
});

app.listen("8253", () => {
    console.log(`server is listing ${8253}.`);
});
