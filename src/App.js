import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './components/Background';
import TimerPage from './components/TimerPage';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactComponent as IconFacebook } from './images/icon-facebook.svg';
import { ReactComponent as IconInstagram } from './images/icon-instagram.svg';
import { ReactComponent as IconPinterest } from './images/icon-pinterest.svg';
import ResponsiveSvgButton from './components/ResponsiveButton';

const dayInMilliseconds = 1000 * 60 * 60 * 24;
const hourInMilliseconds = 1000 * 60 * 60;
const minuteInMilliseconds = 1000 * 60;
const secondInMilliseconds = 100;

function App() {
  return (
    <>
      <Background style={{
        zIndex: -3,
        position: 'absolute'
      }} className="bg" />
      <Container xs={12} style={{
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center'
      }}>
        <Row className="App-header"  >
          We're launching soon
      </Row>
        <Row xs={12} className="timerRow" >
          <Col className="timerColumn" xs={3} ><TimerPage intervalInMs={dayInMilliseconds} initialVal={2} label={'Days'} /></Col>
          <Col className="timerColumn" xs={3}><TimerPage intervalInMs={hourInMilliseconds} initialVal={0} maxVal={23} label={'Hours'} /></Col>
          <Col className="timerColumn" xs={3}><TimerPage intervalInMs={minuteInMilliseconds} initialVal={0} label={'Minutes'} /></Col>
          <Col className="timerColumn" xs={3}><TimerPage intervalInMs={secondInMilliseconds} initialVal={0} label={'Seconds'} /></Col>
        </Row>
        <Row className=" timerFooter" >
          <Col >
            <ResponsiveSvgButton className="footerColumn" component={IconFacebook} />
          </Col>
          <Col>
            <ResponsiveSvgButton className="footerColumn" component={IconPinterest} />
          </Col>
          <Col>
            <ResponsiveSvgButton className="footerColumn" component={IconInstagram} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
