import React from 'react'

function Navbar() {
    return (
        <div>
            <section>
                <h1>JWT Token</h1>
                <nav className="navbar-items">
                    <ul>
                        <li><Link to="/signup"></Link></li>
                        <li></li>
                    </ul>

                </nav>
            </section>
        </div>
    )
}

export default Navbar
