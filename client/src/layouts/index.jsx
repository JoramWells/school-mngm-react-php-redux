/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import home from '../imgs/home.jpg'
import Footer from '../components/Footer'
import NavbarComponent from '../components/Navbar'
import { Col, Container, Row, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


const contentStyles = {
    backgroundColor: "#291749",
    marginTop: "4rem",
    height: "350px",
    color: "white",
    textAlign: "center",
    padding: "70px 40px 40px 40px",
    width: "99%",
    margin: "auto"
}

const courseButton = {
    display: 'inline-block',
    marginTop: '2rem',
    padding: '10px 20px',
    backgroundColor: '#483d8b',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    textDecoration: 'none',

}

const Index = () => {
    const navigate = useNavigate()
    return (
        <div>
            <NavbarComponent />
            <div style={contentStyles}>
                <h1>DATA SCIENCE</h1>
                <h2 style={{
                    marginTop: "2rem"
                }}>MASTER OF SCIENCE DEGREE PROGRAM</h2>
                <Button style={courseButton} onClick={()=>navigate('/courses')}>
                    View Course Catalog
                </Button>
            </div>
            <Container fluid='md' style={{
                marginTop: "2rem"
            }} >

                <Row>
                    <Col>
                        <p>
                            Master of Science degree in Data Science helps meet the growing need for data science professionals in
                            STEM, health-related and other fields, expanding students’ marketable skills and preparing them to enter
                            a fast-growing job field.<br />
                            The program is unique for its breadth, offering a widely encompassing set of courses that allows
                            students without a computer science background to develop the necessary skills for data science jobs in
                            business, engineering, healthcare and science settings. It aims to instill the acumen needed to draw
                            insights from data, to make sound decisions using data, and to effectively communicate about data-driven
                            findings and decisions.</p>
                        <p>
                            Students will use real-world problems, methods and data in instruction materials through collaboration
                            with community partners; problem-based, experiential learning which emphasizes hands-on coding
                            exercises; service learning in which students learn while doing for social good; and inclusive learning
                            to broaden student participation and strengthen student retention in data science education.<br />
                            The degree requires 30 course hours and can be completed in two years. After completion of a set of core
                            courses, students choose to pursue a specialty in either the engineering track (computer science or
                            industrial engineering) or the science track (biology, geology, mathematics, or psychology). They will
                            participate in a required capstone experience which can be integrated with workplace projects. Elective
                            options offer additional flexibility to craft a degree that fits his or her specific situation.<br />
                            Students will come from different backgrounds, but the most important factor for their growth and
                            success will be a keen interest in learning the powerful ways in which data can be applied in various
                            fields.
                        </p>


                    </Col>
                    <Col>
                        <img src={home} alt="Data Science Course" style={{
                            width: "350px",
                            height: "350px",
                            objectFit: "contain"
                        }} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <img src={home} alt="Data Science Course" style={{
                            width: "350px",
                            height: "350px",
                            objectFit: "contain"
                        }} />
                    </Col>
                    <Col>
                        <h4>
                            Notes:
                        </h4>
                        <p>
                            In general, an applicant who graduated with a Bachelor’s degree from an accredited U.S. or ABET
                            institution within the last three years with a GPA of 3.2 or better on a 4.0 scale and who is currently
                            conducting professional work in related fields should contact the MSDS graduate advisor about the
                            possibility of GRE wavier. Such waivers are not offered by all graduate programs.<br />
                            Applications with significant deficiencies in college-level mathematics may be deferred/denied as
                            determined by the MSDS program advisors.<br />
                            If an applicant has a degree from a U.S. institution, the English Proficiency requirement on TOEFL/IELTS
                            is waived. However, it is waived for admission purposes only. If the applicant wishes to be considered
                            for possible funding as a Graduate Teaching Assistant (GTA) or have any teaching responsibility, the
                            applicant must have a U.S. bachelor’s degree or a TOEFL speaking score of at least 23, or an IELTS
                            speaking score of at least 7. A master’s degree from a U.S. institution does not suffice for a waiver of
                            the English proficiency requirement for international applicants desiring consideration for GTA support.
                            An applicant who does not achieve the stated English proficiency standards may be required to take the
                            Graduate English Skills Program (GESP) qualifying exam upon arrival at UTA to determine the need for
                            additional English language courses after admission.<br />
                            Only the following application documents are required: application, fee, transcripts from all higher
                            education institutions attended, and GRE and TOEFL scores unless they are waived. The MSDS program
                            neither requires nor reviews letters of recommendation, statements of purpose, or any other supplemental
                            materials from applicants.
                        </p>
                    </Col>
                </Row>

                <div className="body2-container">
                    <p>
                        Master of Science degree in Data Science helps meet the growing need for application-oriented
                        engineers who can use data science tools and techniques to solve complex problems in industries such as
                        manufacturing, logistics, healthcare and energy.<br />
                        The program is unique for its breadth, offering a widely encompassing set of courses that allows students
                        with or without a programming background to develop the necessary data science skills. It aims to instill
                        the acumen needed to draw insights from data, to make sound decisions using data, and to effectively
                        communicate about data driven findings and decisions.<br />
                        Students will use real-world problems, methods and data in instruction materials through collaboration with
                        community partners; problem-based, experiential learning
                        which emphasizes hands-on coding exercises; service learning in which students learn while doing for social
                        good; and inclusive learning to broaden student participation and strengthen student retention in data
                        science education.<br />
                        The degree requires 30 course hours and can be completed in two years. After completion of a set of core
                        courses, students may choose electives from multiple
                        programs to match their career interests. They may also participate in a capstone experience which can be
                        integrated with workplace projects. Elective options offer additional flexibility to craft a degree that
                        fits his or her specific situation.<br />
                        Students will come from different backgrounds, but the most important factor for their growth and success
                        will be a keen interest in learning the powerful ways in which data can be applied in various fields.
                    </p>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Index