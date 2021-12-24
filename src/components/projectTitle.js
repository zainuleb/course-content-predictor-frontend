import React from 'react';
import { Badge, Button, Row, Col } from 'reactstrap';

function ProjectTitle() {
  return (
    <div>
      <div>
        <Row>
          <Col xs="2"></Col>
          <Col xs="8">
            <div style={{ paddingTop: '20px' }}>
              <Badge color="danger" pill>
                React Based Dynamic Application v1.0
              </Badge>
            </div>
            <h1 className="App-Title">
              Course Content Predictor Based On Industrial Trends
            </h1>
            <p>
              "Course Content Predictor Based On Industrial Trends" is a
              forecasting system, utilizing forecasting models, our system
              forecasts the course content predicted on the most trending jobs
              for Computer Science graduates in the IT industry.
            </p>
            <p>
              Picking the right course in the advanced time of innovation is a
              vital choice as the even- tual fate of the understudy relies upon
              this one essential choice. The understudy without anyone else
              isn’t full grown enough to take the right choice in regards to the
              determination of courses for the forthcoming semester. Choosing
              some unacceptable courses implies a crisscross between understudy
              inclination, ability, and modern patterns.
            </p>

            <Button color="primary" outline size="md">
              Learn More About Our Project
            </Button>
            <hr />
          </Col>
          <Col xs="2"></Col>
        </Row>
      </div>
    </div>
  );
}

export default ProjectTitle;
