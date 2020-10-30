import React, { useState } from 'react'
import './Dashboard.css'
function Dashboard() {
    const [topic, setTopic] = useState('')
    const [thumbnail, setThumbnail] = useState()
    return (
        <div className="Dashboard">
            <label id="topic">Topic Name</label>
            <input for="topic" type="text"
                value={topic}
                onChange={e => setTopic(e.target.value)}
                placeholder="Enter The Topic Name" />
            <input type="file"
                value={} />
            <button> Add Thumbnail</button>

        </div>
    )
}

export default Dashboard
