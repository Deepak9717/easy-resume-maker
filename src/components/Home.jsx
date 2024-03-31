import { React } from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
        return(
            <>
                <div className="heading">
                    <h1>Welcome to Easy Resume Maker</h1>
                    <p>Make resume quickly</p>
                    <Link to="/create-resume">
                        <button className="" type="button">Create Resume</button>
                    </Link>
                </div>
            </>
        )
    }
