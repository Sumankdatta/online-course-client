import { Col, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Offer from './Offer/Offer';

const Home = () => {

    const AllCourses = useLoaderData();
    const offer = AllCourses.filter(course => course.discount_status === true)

    return (
        <Container>
            <Row>
                <Col lg='9'>
                <div className='text-center mt-5 rounded  p-3'>
                        <h1>Explore Our Courses</h1>
                        <hr />
                       
                    </div>
                    <div className='courses'>
                        {
                            AllCourses.map(course => <Course
                                key={course.id}
                                course={course}
                            ></Course>)
                        }
                    </div>
                </Col>
                <Col lg='3'>
                    <div className='text-center mt-5 rounded bg-warning p-3'>
                        <h3 >Todays Offer</h3>
                        <h5 className='text-danger'>Get Flat 30% Discount</h5>
                    </div>
                    <div>
                        {
                            offer.map(course => <Offer
                                key={course.id}
                                course={course}
                            ></Offer>)
                        }

                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Home;