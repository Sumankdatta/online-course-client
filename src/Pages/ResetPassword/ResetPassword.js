import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const ResetPassword = () => {
    const [email,setEmail]=useState('');
    const {passwordReset}=useContext(AuthContext);

    const handleResetPassword=(event)=>{
       
        const emailField=event.target.value;
        setEmail(emailField);
    }
    const handleEmailSubmit=()=>{
        passwordReset(email)
        .then(()=>{
            console.log('Reset password email send');
           toast.success('Reset password email send')
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div className='mx-auto mt-5 shadow-lg p-5 mb-5 bg-body-tertiary rounded' style={{ maxWidth: "500px" }}>
            <h2 className='mb-4'>Reset Password</h2>
           
                <Form.Group onBlur={handleResetPassword} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Button onClick={handleEmailSubmit} variant="primary" type="submit">
                    Submit
                </Button>

           

        </div>
    );
};

export default ResetPassword;