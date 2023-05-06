import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-hot-toast';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logout');
                toast.success('Log out successfully')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link className='text-decoration-none text-warning fw-bold fs-3' to='/'>Easy Study</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav className='d-flex align-items-center justify-content-center'>
                            <Link className=' text-decoration-none text-warning fw-bold p-2 me-2' to='/'>Home</Link>
                            <Link className=' text-decoration-none text-warning fw-bold p-2 me-2' to='/'>Courses</Link>
                            <Link className=' text-decoration-none text-warning fw-bold p-2 me-2' to='/blog'>Blog</Link>
                            <>
                                {
                                    user?.uid ?
                                        <><Link ><button onClick={handleLogOut} className='border border-0 text-warning bg-dark fw-bold px-2 me-2'>Log out</button></Link>
                                            <h6 className='me-3 text-light mt-2'>Hello <span className='text-light fw-bold'>{user?.displayName}</span></h6></>
                                        :
                                        <>
                                            <Link to='/signup'> <button className='border border-0 bg-dark text-warning fw-bold px-2 me-2'>SignUp</button></Link>
                                            <Link to='/login'> <button className=' border border-0 bg-dark text-warning fw-bold px-2 me-3'>Login</button></Link>

                                        </>
                                }

                            </>
                            {
                                user?.uid ?
                                    <Image style={{ height: '30px' }} src={user?.photoURL} roundedCircle></Image>
                                    : <FaUser style={{ width: '35px', height: '35px' }} className='rounded-circle border p-1 text-light' ></FaUser>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;