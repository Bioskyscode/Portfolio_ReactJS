"use server"
import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import sendGridtransport from "nodemailer-sendgrid-transport"
import env from "dotenv"

const app = express();
const port = process.env.PORT || 3001;
env.config();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const transport = nodemailer.createTransport(
    sendGridtransport({
        auth: {
            api_key: process.env.API_SENDGRID
        }
    })
);

app.post("/sendmail", (req, res) => {
    const { name, mail, jobtype, message } = req.body;
    console.log("outPut: ", req.body);

    if (!name) {
        return res.status(400).json({ error: "Please add your name" });
    } else if (name.length <= 3) {
        return res.status(400).json({ error: "Name must be at least 4 letters" });
    }

    if (!mail) {
        return res.status(400).json({ error: "Please add your E-Mail Address" });
    } else if (!regEx.test(mail)) {
        return res.status(400).json({ error: "Invalid Mail" });
    }

    if (!jobtype) {
        return res.status(400).json({ error: "Please add Job-type" });
    }

    if (!message) {
        return res.status(400).json({ error: "Please leave a message" });
    } else if (message.length <= 9) {
        return res.status(400).json({ error: "Text must be at least 10 letters" });
    }

    transport.sendMail({
        to: "empresaparajesus@gmail.com",
        from: "empresaparajesus@gmail.com",
        subject: "Job Offer",
        html: `
            <h4> Details Information:</h4>

            <ul>
            <li> <p>Name: ${name}</p></li>
            <li> <p>E-Mail: ${mail}</p></li>
            <li> <p>Job Types: ${jobtype}</p></li>
            <li> <p>Message: ${message}</p></li>
            </ul>
        `,
    });
    return res.status(200).json({ success: "Mail sent successfully!" });
});

app.listen(port, () => {
    console.log("Server connected on Port:", port)
});





