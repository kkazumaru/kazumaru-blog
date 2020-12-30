import React from "react"
import "../styles/hero.css"
import AVATAR_IMG from "../../static/avatar.png"
export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                カズマルブログへようこそ！！<br />
            </h1>
            <div className="hero-author">
                <img src={AVATAR_IMG} className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by カズマル.
                </p>
            </div>
        </div>
    )
}