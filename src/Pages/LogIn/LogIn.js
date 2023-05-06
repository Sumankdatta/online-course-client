import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const LogIn = () => {
    const [error,setError]=useState('');

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, { replace: true })
                toast.success('Log in successfully')
                
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })


    }
    return (
        <div className='mx-auto mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded p-5' style={{ maxWidth: "500px" }}>
            <h2 className='mb-4'>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>{error.slice(9)}</p>
                <Button className='w-100 mb-3 mt-2' variant="primary" type="submit">
                    Submit
                </Button>
                <p>New to this website ? please <Link to='/signup'>Register</Link></p>
                <p>Forget password ? please <Link to='/resetpassword'>Reset password</Link></p>
            </Form>

        </div>
    );
};

export default LogIn;