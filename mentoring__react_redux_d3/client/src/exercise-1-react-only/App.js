import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';

import StoreRsvpWordFrequencyTable from './containers/StoreRsvpWordFrequencyTable';
import rsvps from './services/rsvps';
import store from './services/store';
import './App.css';

const storeInstance = store();
rsvps(storeInstance);

class App extends Component {
  render() {
    return (
      <Provider store={storeInstance}><div>
        <Row><Col xs={12}><h1>React-Only</h1></Col></Row>
        <Row><Col xs={12}><StoreRsvpWordFrequencyTable /></Col></Row>
      </div></Provider>
    );
  }
}

export default App;
