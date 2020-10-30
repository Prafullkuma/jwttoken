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
    const saveAllData = () => {

    }
    return (
        <div className="Dashboard">
            <div className="Topic_name">
                <input type="text"
                    value={topic}
                    onChange={e => setTopic(e.target.value)}
                    placeholder="Enter The Topic Name" />
                <br />
                <input type="file"
                    value={thumbnail}
                    onChange={e => setThumbnail(e.target.value)} /><br />
                <img src="" alt="Thumbnail image" /><br />
                <button onClick={addThumbnail}> Add Thumbnail</button>

            </div>
            <div className="ArticleName">
                <h1> Add Article</h1>
                <input type="text"
                    value={title}
                    placeholder="Enter Article Name"
                    onChange={e => setTitle(e.target.value)} />
                <br />
                <input type="file"
                    value={articleImage}
                    onChange={e => setArticleImage(e.target.value)} /><br />
                <img src="" alt="ArticleImage" /><br />
                <button onClick={addArticleImage}> Add ArticleImage</button><br />
                <span>Do you want to make Article feature:select below</span><br />
                <select value={feature} onChange={e => setFeature(e.target.value)}>
                    <option selected value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <button type="submit" onClick={saveAllData}> save</button>
            </div>

        </div>
    )
}

export default Dashboard
