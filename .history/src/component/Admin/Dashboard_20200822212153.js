import React, { useState } from 'react'
import './Dashboard.css'
function Dashboard() {
    const [topic, setTopic] = useState('')
    const [thumbnail, setThumbnail] = useState()
    const addThumbnail = (e) => {
        console.log(e.target.file)
    }
    return (
        <div className="Dashboard">
            <div className="Topic_name">
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
            <div>
                <h1> Add Article</h1>

            </div>



        </div>
    )
}

export default Dashboard
