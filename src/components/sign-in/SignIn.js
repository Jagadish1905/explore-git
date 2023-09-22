import React from 'react'
import Header from './Header'
import '../../assets/login.css'
import SuggestionsCard from '../suggestions-card/SuggestionsCard'
const SignIn = () => {
    return (
        <div>
            <div className='sign-in-container'>
                <Header />
                <div className='body-text'>
                    <h1>The biggest indian hits. Ready to watch here from ₹149.</h1>
                    <p>Join today. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                    <input
                        placeholder='Email address'
                        type="email"></input>
                    <button>Get Started</button>
                </div>
            </div>
            <SuggestionsCard />
        </div >
    )
}

export default SignIn