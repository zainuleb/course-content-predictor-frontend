import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

function RenderResults() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000')
      .then((res) => {
        setTable(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col className="bg-light border" xs="4">
          <b>Course Name</b>
        </Col>
        <Col className="bg-light border" xs="4">
          <b>Summary</b>
        </Col>
        {/*         <Col className="bg-light border" xs="4">
          <div>
            <b>Summary</b>
          </div>
        
        </Col> */}
        <Col className="bg-light border" xs="4">
          <b>Number of Jobs Found</b>
        </Col>
      </Row>
      {table &&
        table.map((row) => (
          <Row>
            <Col className="bg-light border" xs="4">
              <p>{row.courseName}</p>
            </Col>
            <Col className="bg-light border" xs="4">
              <p>{row.courseTopics}</p>
            </Col>
            <Col className="bg-light border" xs="4">
              <p>{row.jobsNo}</p>
            </Col>
          </Row>
        ))}
    </Container>
  );
}
export default RenderResults;
