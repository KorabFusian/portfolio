import React from "react"

export default function Resume (props) {
    return (<div id="Intro-row">
        <a href={props.resumeUrl}><button>Télécharger mon CV</button></a>
    </div>)
}