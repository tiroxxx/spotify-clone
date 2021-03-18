import React from 'react'
import { Container } from "react-bootstrap"

const redirectUri = "https://spotify-lyrical.herokuapp.com/"
const clientId = "3a7598dc8dd04d0c9c1c7e45610c2573"
const scope = "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`

export default function Login() {
    return (
        <Container className="d-flex justify-content-center 
        align-items-center" style={{ minHeight: "100vh" }}>
            <a className="btn btn-success btn-lg" href={AUTH_URL}>
                Login with Spotify
            </a>
        </Container>
    )
}
