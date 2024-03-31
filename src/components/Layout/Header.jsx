import { React } from "react"
import logo from "/src/assets/cv-logo.png"
import DownloadResume from '../DownloadResume'

export default function Header(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" />
                <h3>Easy Resume Maker</h3>
            </div>
            <DownloadResume />
        </div> 
    )
}