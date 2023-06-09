import LoginForm from '../components/auth/LoginForm'
import RegisterForm from '../components/auth/RegisterForm'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'


const Auth = ({ authRoute }) => {
    const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext)
    console.log(`isAu ${isAuthenticated}, loading ${authLoading}`)
    // console.log({ authState: { authLoading, isAuthenticated } })
    let body

    // if (!isAuthenticated) {

    //     body = (
    //         <>
    //             {authRoute === 'login' && <LoginForm />}
    //             {authRoute === 'register' && <RegisterForm />}
    //         </>
    //     )
    // } else if (authLoading) {
    //     body = (
    //         <div className='d-flex justify-content-center mt-2'>
    //             <Spinner animation='border' variant='info' />
    //         </div>
    //     )
    // } else if (isAuthenticated && !authLoading) {
    //     return <Redirect to='/dashboard' />
    // }
    if (authLoading) {

        body = (
            <div className='d-flex justify-content-center mt-2'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    }
    else if (isAuthenticated) return <Redirect to='/dashboard' />
    else
        body = (
            <>
                {authRoute === 'login' && <LoginForm />}
                {authRoute === 'register' && <RegisterForm />}
            </>
        )

    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1>Let Me Know</h1>
                    <h4>Diễn dàn của Sinh Viên IT năm 96!</h4>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Auth