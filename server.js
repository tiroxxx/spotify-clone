require("dotenv").config()
const cors = require("cors")
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const lyricsFinder = require("lyrics-finder")
const getLyrics = require("./scrapper")
const path = require("path")

const PORT = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("client/build"))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.post("/refresh", (req, res) => {
    console.log("refreshing in");
    const refreshToken = req.body.refreshToken

    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.access,
                expiresIn: data.body.expiresIn
            })
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(400)
        })
})

app.post("/login", (req, res) => {
    console.log("logging in");
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
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

app.get("/lyrics", async (req, res) => {
    res.send("sorry this page has retired!")
})

app.listen(PORT, () => {
    console.log("==> ????  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT);
})
