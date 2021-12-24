import React from 'react';
/* import reactDom from "react-dom"; */
import { Badge, Row, Col } from 'reactstrap';
import Graph from './chartLine';
import MarketGraph from './marketAnalysis';

function Analytics() {
  return (
    <div>
      {' '}
      <span>
        <br /> <br />
        <h4>
          <Badge color="success">Model Analytics</Badge>
        </h4>
        <br />
        <Row>
          <Col className="bg-light border" xs="6">
            <MarketGraph />
          </Col>
          <Col className="bg-light border" xs="6">
            <Graph />
          </Col>
        </Row>
        <br /> <br /> <br />
      </span>
    </div>
  );
}

export default Analytics;
