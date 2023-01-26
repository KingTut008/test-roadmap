import { Col, Row } from 'antd';
import { Applications } from './applications';
import { RoadMap } from './roadMap';
import './App.scss';

const App = () => {
  return (
    <Row className="App">
      <Col flex="520px" className="App__Aside">
        <Applications />
      </Col>
      <Col flex="auto">
        <RoadMap />
      </Col>
    </Row>
  );
};

export default App;
