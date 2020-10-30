import React from 'react'

function Navbar() {
    return (
        <div>
            <section>
                <h1>JWT Token</h1>
                <nav className="navbar-items">
                    <ul>
                        <li><Link to="/signup">Register</Link></li>
                        <li><Link to="/signin">Login</Link></li>
                    </ul>

                </nav>
            </section>
        </div>
    )
}

export default Navbar
