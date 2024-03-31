import { React } from 'react'

import EduDetails from '../Details/EduDetails'
import Exp from '../Details/Exp'
import PersonDetails from '../Details/PersonDetails'
import Skills from '../Details/Skills'
import Projects from "../Details/Projects";
import TempColor from '../Details/TempColor'

export default function ResumeData(){
    return(
        <>
            <div className="data-section">
                <TempColor />
                <PersonDetails />
                <EduDetails />
                <Skills />
                <Exp />
                <Projects />
            </div>
        </>
    )
}