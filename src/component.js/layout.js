import { Link } from "gatsby"
import React from "react"

export default function Layout({children}){
    return (
        <div style={{margin: `0 auto`, maxWidth: "80vw", padding: `0 1rem`}}>
            <header style={{display: "flex"}}>
                <div style={{width: "20%", background: "green"}}>Logo</div>
                <div style={{width: "50%", background: "gray", display: "flex", flexDirection: "row"}}>
                    <Link to="/">Home</Link>
                    <Link to="/tra">About</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <div style={{width: "30%", background: "yellow"}}>Login/Logout</div>
            </header>
            {children}
        </div>
    )
}