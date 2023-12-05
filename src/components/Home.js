import React from 'react'
import homeCss from "./Home.module.css"
import Child from './Child'
const Home = () => {
    return (
        <>
            <div className={homeCss.home}>Home component</div >
            <Child />

        </>
    )
}

export default Home