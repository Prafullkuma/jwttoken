import React, { useState } from 'react'
import './Dashboard.css'
function Dashboard() {
    const [topic, setTopic] = useState('')
    const [thumbnail, setThumbnail] = useState()
    const addThumbnail = () => {

    }
    return (
        <div className="Dashboard">
            <label id="topic">Topic Name</label>
            <input for="topic" type="text"
                value={topic}
                onChange={e => setTopic(e.target.value)}
                placeholder="Enter The Topic Name" />
            <input type="file"
                value={thumbnail}
                onChange={e => setThumbnail(e.target.value)} />
            <button onClick={addThumbnail}> Add Thumbnail</button>

        </div>
    )
}

export default Dashboard
