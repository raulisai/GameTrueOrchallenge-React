import React from 'react'
import NavBar from './NavBar'

function Layout(props) {
    return (
        <React.Fragment>
        <div className="container">
        <div className="row">
        <div className="col-2 col-md-1">
        <NavBar />
        </div>
        <div className="col-10 col-md-11">
        {props.children}
        </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Layout
