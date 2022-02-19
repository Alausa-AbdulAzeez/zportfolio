const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { google } = require("googleapis");
// const config = require("./config");
const OAuth2 = google.auth.OAuth2;
const dotenv = require("dotenv");
const app = express();

const PORT = process.env.PORT || 8800;

app.use(express.json());
app.use(cors());
dotenv.config();

const OAuth2_client = new OAuth2(
  process.env.clientId,
  process.env.clientSecret
);
OAuth2_client.setCredentials({ refresh_token: process.env.refreshToken });

app.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const conditionsArray = [name == true, email == true, message == true];
    // !conditionsArray.includes(false)
    if (name && email && message) {
      async function main() {
        const accessToken = OAuth2_client.getAccessToken();
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: process.env.user,
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
            refreshToken: process.env.refreshToken,
            accessToken: accessToken,
          },
        });

        let info = await transporter.sendMail({
          from: process.env.user, // sender address
          to: email, // list of receivers
          subject: "Potential client", // Subject line
          text: message, // plain text body
          //   html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        info.accepted &&
          res.status(201).json({ name: name, email: email, message: message });
      }

      main().catch(console.error);

      //   res.status(201).json(conditionsArray.includes(false));
    } else {
      res.status(500).json("Please fill the required credentials");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// async..await is not allowed in global scope, must use a wrapper
// async function main() {
// const accessToken=OAuth2_client.getAccessToken()
//   let transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth: {
//         type:'OAuth2',
//       user: config.user,
//       clientId:config.clientId,
//       clientSecret:config.clientSecret,
//       refreshToken:config.refreshToken,
//       accessToken:accessToken
//     },
//   });

//   let info = await transporter.sendMail({
//     from: config.user, // sender address
//     to: "alausaabdulazeez@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);

// }

// main().catch(console.error);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log("Backend server is running");
});
