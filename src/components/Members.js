import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Members() {
    const [searchParams, setSearchParams] = useSearchParams()
    const isActive = searchParams.get('filter') === 'active';
    return (
        <>
            <div>Members</div>
            <button onClick={() => setSearchParams({ filter: "active" })}>Aktif Uyeler</button>
            <button onClick={() => setSearchParams()}>Tum Uyeler</button>
            {isActive ? <h2>Aktif Uyeler</h2> : <h2>Tum Uyeler</h2>}
        </>
    )
}

export default Members