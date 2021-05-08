import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const redirectUri = "https://spotify-lyrical.herokuapp.com/"
const clientId = "3a7598dc8dd04d0c9c1c7e45610c2573"
const scope = "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`


export default function About() {
    return (
        <main id="about-page">
            <Navbar className="justify-content-center" expand="sm" variant="dark">
                <Navbar.Brand href="/">
                    <i style={{ marginRight: "2px" }} class="fab fa-spotify"></i>Spotify Lyrical
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                    <Nav className="justify-content-center lol">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <a id="login-button" className="btn btn-success btn-md " href={AUTH_URL}>
                    Login with Spotify
                </a>
            </Navbar>
        <section id="about-section">
            
        </section>
        </main>
    )
}
