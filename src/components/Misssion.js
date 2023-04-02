import React from 'react'
import { useNavigate } from 'react-router-dom'

function Misssion() {
    const navigate = useNavigate();
    return (
        <>
            <div>Mission</div>
            <button onClick={() => navigate('/')}>Geriye Don</button>
        </>
    )
}

export default Misssion