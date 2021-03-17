require("dotenv").config()
const cors = require("cors")
const bodyParser = require("body-parser")
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http//localhost:3000",
        clientId: "3a7598dc8dd04d0c9c1c7e45610c2573",
        clientSecret: process.env.CLIENT_SECRET
    })


    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3001)