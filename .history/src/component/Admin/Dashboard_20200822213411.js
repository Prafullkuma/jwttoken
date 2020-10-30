import React, { useState } from 'react'
import './Dashboard.css'
function Dashboard() {
    const [topic, setTopic] = useState('')
    const [thumbnail, setThumbnail] = useState()
    const [title, setTitle] = useState('')
    const [articleImage, setArticleImage] = useState('')
    const [feature, setFeature] = useState('')
    const [flag, setFlag] = useState(false)
    const addThumbnail = (e) => {
        console.log(e.target.file)
    }
    const addArticleImage = () => {

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
                <img src="" alt="Thumbnail" />
                <button onClick={addThumbnail}> Add Thumbnail</button>

            </div>
            <div>
                <h1> Add Article</h1>
                <input type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />

                <input type="file"
                    value={articleImage}
                    onChange={e => setArticleImage(e.target.value)} />
                <img src="" alt="ArticleImage" />
                <button onClick={addArticleImage}> Add ArticleImage</button>
                <span>Do you want to make Article feature:select below</span>
                <select>
                    <option selected value={feature}>Coconut</option>
                    <option value={feature}>Mango</option>
                </select>
            </div>



        </div>
    )
}

export default Dashboard
