import React from 'react'
// import '../../assets/login.css'
const Header = () => {
    return (
        <div>
            <div className='header-container'>

                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="logo" width="200px"></img>

                <div style={{ marginTop: "20px" }}>
                    <select>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Kannada</option>
                        <option>Tamil</option>
                    </select>
                    <button >Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Header