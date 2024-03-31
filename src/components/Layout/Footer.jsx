import { React } from 'react'


export default function Footer(){
    var currentYear = new Date().getFullYear();
    return(
        <>
            <footer>
                <span>Eazy Resume Maker @<span style={{ fontWeight:600}}>{currentYear}</span></span>
            </footer>
        </>
    )
}
