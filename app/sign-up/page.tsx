import React from 'react'

const SignUp = () => {
  return (
    <div className='h-screen'>
        <h3 className='font-bold'>dropIt</h3>
        <div>
            <form>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" id='email'/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" id='password'/>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <button>Create Account</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp