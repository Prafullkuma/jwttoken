import React from 'react'

export const Pagination = ({ perPage, totalPosts }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>

        </div>
    )
}
