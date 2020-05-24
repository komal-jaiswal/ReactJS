import React, { Component } from 'react'

const Book = (props) => {
    //destructoring
    const { title, author, pages, freeBookMark } = props
    return (
        <section>
            <h1>{title}</h1>
            <p>By : {author}</p>
            <p>Pages : {pages} pages</p>
            <p>Freebookmark today : {freeBookMark ? "Yes !" : "No"}</p>

        </section>

    )
}


export default Book