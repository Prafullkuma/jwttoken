import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h1>Loading....</h1>
    }
    return <ul className="list-group mb-4">
        {posts.map((p) => {
            <li key={p.id} className="list-group-item">
                {p.body}
            </li>
        })}
    </ul>
        <div>

        </div>
    
}

export default Posts
