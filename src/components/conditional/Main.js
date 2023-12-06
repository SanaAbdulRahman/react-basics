import React from 'react'
import LoggedIn from './LoggedIn'
import NotLoggedIn from './NotLoggedIn'

const Main = ({ isLoggedIn }) => {
    return (
        <div>{isLoggedIn ? <LoggedIn /> : <NotLoggedIn />}</div>
    )
}

export default Main