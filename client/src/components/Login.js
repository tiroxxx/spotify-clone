import React from 'react'

const redirectUri = "http://localhost:3000"
const clientId = "3a7598dc8dd04d0c9c1c7e45610c2573"
const scope = "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`

export default function Login() {
    return (
        <div>
            
        </div>
    )
}
