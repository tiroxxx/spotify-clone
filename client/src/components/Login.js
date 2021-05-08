import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap"

const redirectUri = "https://spotify-lyrical.herokuapp.com/"
const clientId = "3a7598dc8dd04d0c9c1c7e45610c2573"
const scope = "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`

export default function Login() {
    return (
        <>
            <main id="login-page">
                <Container id="nav-container" className="justify-content-center">
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
                </Container>
                <section id="login-image">
                    <div id="login-text">
                        <h1 className="login-title">
                            Sing your favorite songs with
                    </h1>
                        <h1 className="login-title">
                            Spotify Lyrical
                    </h1>
                    </div>
                </section>
                <footer id="footer">
                    <Container id="footer-container">
                        <h3 style={{ fontSize: "1.25rem", marginBottom: "20px"}}>
                            <i style={{ marginRight: "2px" }} class="fab fa-spotify"></i>Spotify Lyrical
                        </h3>
                        <p><a className="links" href="/">Home</a></p>
                        <p><a className="links" href="/about">About</a></p>
                    </Container>
                </footer>
            </main>
        </>
    )
}
