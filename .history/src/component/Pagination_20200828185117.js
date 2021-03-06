import React from 'react'

export const Pagination = ({ perPage, totalPosts }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a href="!#" className="page-link">
                        {number}
                    </a>
                </li>
            ))}
        </nav>
    )
}
