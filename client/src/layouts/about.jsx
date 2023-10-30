import React from 'react'
import Navbar from '../components/Navbar'
import { Container } from 'react-bootstrap'


const styles = {
  backgroundColor: '#291749',
  /* height: 40%; */
  marginTop: '3rem',
  color:"white"
}

const About = () => {
  return (
    <>
<Navbar/>
<Container style={styles}>
<div className="content-container ">
      <h1>About Us</h1>
      <h4>MISSION</h4>
      <p>
        Skillify is a comprehensive teaching, research, and public service institution dedicated to the advancement
        of knowledge through scholarship and creative work.
      </p>
      <p>
        The Skillify is committed to providing access and ensuring student success, and to a culture of innovation,
        entrepreneurship, and commercialization of discoveries by our community of scholars.
      </p>
      <p>
        The Skillify promotes lifelong learning through its academic, continuing education, and experiential
        learning programs. The faculty, staff, and student community shares diverse cultural values that foster
        inclusivity and cultivate mutual respect.
      </p>
      <h4>VISION</h4>
      <p>
        Skillify is a pre-eminent urban public research that inspires bold solutions with global impact
        through creative scholarship, transformative access, and collaborative learning.
      </p>
      <h4>VALUES</h4>
      <h5><u>Access and Success:</u></h5>
      <p>
        Provide a supportive environment where students can flourish as scholars and citizens. Expand access to
        academic offerings, scholarship opportunities, and other vital resources that prepare students to succeed
        and graduate.
      </p>
      <h5><u>Opportunity and Excellence:</u></h5>
      <p>
        Pursue the highest standards of excellence throughout every facet of the Skillify. Provide all qualified
        students with opportunities to reap the benefits of the tremendous knowledge that exists at Skillify.
      </p>
      <h5><u>Inclusiveness and Diversity:</u></h5>
      <p>
        Foster an inclusive environment that supports a diverse community of faculty, staff, and students. Encourage
        the exploration and discovery of the unfamiliar and promote the understanding of all viewpoints.
      </p>
      <h5><u>Mavericks and Innovators:</u></h5>
      <p>
        Ensure a culture of innovation, entrepreneurship, and creativity that strengthens our Maverick nature.
        Cultivate an atmosphere that rewards curiosity and challenges conventional thought.
      </p>
      <h5><u>Collegiality and Collaboration:</u></h5>
      <p>
        Encourage a spirit of collegiality and camaraderie among all members of the Skillify community. Champion
        partnerships and collaborative efforts that increase the Skillify’s impact on society.
      </p>
    </div>
</Container>


    {/* Footer code */}
    <div className="fixed-footer">
      @ 2023 SKILLIFY, INC
    </div>
  </>
  )
}

export default About