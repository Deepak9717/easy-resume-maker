import { React } from 'react'
import { useData } from "../Context";

export default function Footer(){
    const {route } = useData();
    var currentYear = new Date().getFullYear();

    return(
            <footer className={ route ? "wide-width" : ""}>
                <div>
                <span>Eazy Resume Maker @<span style={{ fontWeight:600}}>{currentYear}</span></span>
                </div>
            </footer>
    )
}
