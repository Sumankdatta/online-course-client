import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';
import { Container } from 'react-bootstrap';

const CourseDetails = () => {
    const courses = useLoaderData();
    const componentRef = useRef();

    const dis=parseInt(courses.discount)
    const total=courses.price - (courses.price * dis/100)


    return (
        <Container>
            <h4 className='text-center mt-5'>Course Name :</h4>
            <div className='d-flex align-items-center text-center justify-content-center mt-2'>
                
                <h1 className='me-2'>{courses.title}</h1>
                <ReactToPrint
                    trigger={() => <FaFilePdf className='fs-2 text-danger'></FaFilePdf>}
                    content={() => componentRef.current}
                />

            </div>
            <Card className=' mx-auto mt-5'  ref={componentRef}  >
                <Card.Img variant="top" src={courses.img} />
                <Card.Body>
                    <Card.Title>{courses.title}</Card.Title>
                    <Card.Text>
                        <p> {courses.details}</p>
                        <hr />
                        <p>Course Duration : {courses.studyTime} days</p>
                        <h6>Price :<s>{courses.price} BDT</s></h6>
                        <h6>Discounted Price : {total} BDT</h6>
                    </Card.Text>
                    <Link to={`/checkout/${courses.course_id}`}><Button variant="primary">Get Premium Access</Button></Link>

                </Card.Body>
            </Card>
           
        </Container>
    );
};

export default CourseDetails;