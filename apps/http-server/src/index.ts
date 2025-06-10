import  express from "express";
import { prismaClient } from "@repo/db/client";


const app = express();
app.use(express.json());

app.get("/hi", (req, res) => {
    res.send({
        message: "hi there!"
    })
})
app.post("/signup", async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await prismaClient.users.create({
        data: {
            username: username,
            password: password
        }
    })


    res.json({
        message: "signup successfull!",
        id:user.id
    })
})

const PORT = 3002;
app.listen(PORT, () => {
    console.log("server listening on the port " + PORT);

})
