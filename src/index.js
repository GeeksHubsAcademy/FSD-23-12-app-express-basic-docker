import express from "express";

const app = express();

app.get("/healthy", (__req, res) => {
	res.send("Server is Healthyyyyyyyyy");
});

app.listen(4000, () => {
	console.log("Server running");
});
