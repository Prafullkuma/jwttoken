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
        <form>
            <div className="Dashboard">
                <div className="Topic_name">
                    <input type="text"
                        required
                        value={topic}
                        onChange={e => setTopic(e.target.value)}
                        placeholder="Enter The Topic Name" />
                    <br />
                    <input type="file"
                        required
                        value={thumbnail}
                        onChange={e => setThumbnail(e.target.value)} /><br />
                    <img src="data:image/jpeg;base64,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" alt="Thumbnail profile" /><br />
                    <button onClick={addThumbnail}> Add Thumbnail</button>

                </div>
                <div className="ArticleName">
                    <h1> Add Article</h1>
                    <input required type="text"
                        value={title}
                        placeholder="Enter Article Name"
                        onChange={e => setTitle(e.target.value)} />
                    <br />
                    <input type="file"
                        required
                        value={articleImage}
                        onChange={e => setArticleImage(e.target.value)} /><br />
                    <img src="data:image/jpeg;base64,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" alt="Articleprofile" /><br />
                    <button onClick={addArticleImage}> Add ArticleImage</button><br />
                    <span>Do you want to make Article feature:select below</span><br />
                    <select required value={feature} onChange={e => setFeature(e.target.value)}>
                        <option selected value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <button type="submit" onClick={saveAllData}> save</button>
                </div>

            </div>

        </form>

    )
}

export default Dashboard
