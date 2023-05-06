import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    const [accept, setAccept] = useState(false);
    const [error,setError]=useState('');

    const { loginWithGithub, loginWithGoogle, createUser, userProfile, emailVerification } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, url, email, password);
        setError('')

        createUser(email, password)
            .then(result => {
                const user = result.user;
                user.displayName = name;
                user.photoURL = url;
                console.log(user);
                handleUserProfile(name, url)
                handleEmailVerification()
                form.reset()
                navigate('/')
                toast.success('User create successfully')

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        userProfile(profile)
            .then(() => {
                console.log('profile updated');
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleEmailVerification = () => {
        emailVerification()
            .then(() => {
                console.log('email verification send');
                
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGithub=()=>{
        loginWithGithub()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error => {
            console.error(error)
        })
    }

    const handleChecked = (event) => {
        setAccept(event.target.checked);
    }

    return (
        <div className='mx-auto mt-5 shadow-lg p-5 mb-5 bg-body-tertiary rounded' style={{ maxWidth: "500px" }}>
            <h2 className='mb-4'>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl" >
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="url" name='url' placeholder="Photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>

                    <Form.Control name='password' type='password' placeholder="Password" required />

                    <p className='text-danger'>{error.slice(9)}</p>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={handleChecked}
                            type="checkbox"
                            label={<> Accepted <Link to='/terms'>Terms and condition</Link></>} />
                    </Form.Group>

                </Form.Group>

                <Button className='w-100 mb-3' disabled={!accept} variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account ? please <Link to='/login'>Login</Link></p>

            </Form>

            <div>
                <Button onClick={handleGoogle} className='w-100 mb-2 fw-semibold fs-5' variant="outline-primary">Sign-in-with <FaGoogle className='fs-4' /></Button> <br></br>
                <Button onClick={handleGithub} className='w-100 fw-semibold fs-5' variant="outline-secondary">Sign-in-with <FaGithub className='fs-4' /></Button>
            </div>
        </div>
    );
};

export default SignUp;