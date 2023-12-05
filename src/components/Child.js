import React from 'react'
import homeCss from './Home.module.css'

const Child = () => {
    return (
        <div className={homeCss.home}>Child component of Home</div >
    )
}

export default Child