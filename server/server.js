require("dotenv").config()
const cors = require("cors")
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(express.json())

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId: "3a7598dc8dd04d0c9c1c7e45610c2573",
        clientSecret: "c750f9b3327f4c9799d88797782a0606"
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        console.log(err);
        res.sendStatus(400)
    })
})

app.listen(3001)