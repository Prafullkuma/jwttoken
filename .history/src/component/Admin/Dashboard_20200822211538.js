import React, { useState } from 'react'
import './Dashboard.css'
function Dashboard() {
    const [topic, setTopic] = useState('')
    return (
        <div className="Dashboard">
            <label id=""></label>
            <input type="text"
                value={topic}
                placeholder="Enter The Topic Name" />

        </div>
    )
}

export default Dashboard
