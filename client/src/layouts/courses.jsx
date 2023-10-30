import { Container, Table } from 'react-bootstrap'
import NavbarComponent from '../components/Navbar'


const Courses = () => {
    return (
        <div>
            {/* 

Project Group: 5

Project Group Members: Vaibhavi Arjunwadkar (1001826818)
                   Sashidhar Boyapati (1002087319)
                   Hema Sai Desai (1002029973)
                   Hemanth Reddy Gillela (1002033611)
                   Smrithi Gujjula (1002073701) 

*/}
            <NavbarComponent />

            <div style={{
                backgroundColor:"#291749"
            }} >
            <div style={{ height:"55px"}}></div>

                <Container fluid='sm' className='mt-5' style={{
                    // marginTop:"7rem"
                }} >
                <h1 className='text-white text-center m-5' style={{
                    marginTop:"10rem"
                }}>Data Science Course Catalog</h1>

                    <Table striped bordered hover size="sm" responsive>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Course Number</th>
                                <th>Course Title</th>
                                <th>Credits</th>
                                <th>Type of Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sample rows. You can add more rows as needed */}
                            <tr data-href="coursedetail.html">
                                <td>1</td>
                                <td>DASC 5300/CSE 5300</td>
                                <td>Foundation of Computing</td>
                                <td>3</td>
                                <td>Core</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>2</td>
                                <td>DASC 5301/CSE 5332</td>
                                <td>Data Science</td>
                                <td>4</td>
                                <td>Core</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>3</td>
                                <td>DASC 5302/IE 5317</td>
                                <td>Introduction to Probability and Statistics</td>
                                <td>3</td>
                                <td>Core</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>4</td>
                                <td>DASC 5303/IE 5315</td>
                                <td>Data Science Project Management</td>
                                <td>4</td>
                                <td>Core</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>5</td>
                                <td>DASC 5309</td>
                                <td>Data Science Capstone Project</td>
                                <td>3</td>
                                <td>Core</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>6</td>
                                <td>CSE 5330</td>
                                <td>Database Systems</td>
                                <td>4</td>
                                <td>Elective-CSE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>7</td>
                                <td>CSE 5334</td>
                                <td>Data Mining</td>
                                <td>3</td>
                                <td>Elective-CSE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>8</td>
                                <td>CSE 5335</td>
                                <td>Web Data Management</td>
                                <td>4</td>
                                <td>Elective-CSE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>9</td>
                                <td>CSE 5360</td>
                                <td>Artificial Intelligence I</td>
                                <td>4</td>
                                <td>Elective-CSE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>10</td>
                                <td>CSE 5367</td>
                                <td>Pattern Recognition</td>
                                <td>3</td>
                                <td>Elective-CSE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>11</td>
                                <td>CSE 5368</td>
                                <td>Neural Networks</td>
                                <td>3</td>
                                <td>Elective-CSE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>12</td>
                                <td>CSE 6332</td>
                                <td>Cloud Computing &amp; Big Data</td>
                                <td>3</td>
                                <td>Elective-CSE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>13</td>
                                <td>CSE 6363</td>
                                <td>Machine Learning</td>
                                <td>3</td>
                                <td>Elective-CSE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>14</td>
                                <td>CSE 6367</td>
                                <td>Computer Vision</td>
                                <td>3</td>
                                <td>Elective-CSE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>15</td>
                                <td>IE 5301</td>
                                <td>Intro to Operations Research</td>
                                <td>3</td>
                                <td>Elective-IE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>16</td>
                                <td>IE 5303</td>
                                <td>Quality Systems</td>
                                <td>3</td>
                                <td>Elective-IE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>17</td>
                                <td>IE 5304</td>
                                <td>Advanced Engineering Economy</td>
                                <td>3</td>
                                <td>Elective-IE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>18</td>
                                <td>IE 5318</td>
                                <td>Applied Regression Analysis</td>
                                <td>3</td>
                                <td>Elective-IE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>19</td>
                                <td>IE 5322</td>
                                <td>Simulation and Optimization</td>
                                <td>3</td>
                                <td>Elective-IE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>20</td>
                                <td>IE 5323</td>
                                <td>Agent-Based Simulation</td>
                                <td>3</td>
                                <td>Elective-IE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>21</td>
                                <td>IE 5351</td>
                                <td>Intro to Systems Engineering</td>
                                <td>3</td>
                                <td>Elective-IE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>22</td>
                                <td>IE 6308</td>
                                <td>Design of Experiments</td>
                                <td>3</td>
                                <td>Elective-IE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>23</td>
                                <td>IE 6318</td>
                                <td>Data Mining and Analytics</td>
                                <td>3</td>
                                <td>Elective-IE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>24</td>
                                <td>MSE 5300</td>
                                <td>Intro to Materials Science &amp; Engineering</td>
                                <td>3</td>
                                <td>Elective-MSE</td>
                            </tr>
                            <tr data-href="coursedetail.html">
                                <td>25</td>
                                <td>MSE 5350</td>
                                <td>Intro to Computational Material Science</td>
                                <td>3</td>
                                <td>Elective-MSE</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
            {/* Footer code */}
            <div className="fixed-footer">
                @ 2023 SKILLIFY, INC
            </div>
        </div>
    )
}

export default Courses