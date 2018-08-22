import React, { Component } from 'react';
import './style/common.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components'
import Profession from './components/profession'
import Teacher from './components/teacher'
import TeacherFinal from './components/teacherFinal'
import Other from './components/other'
import OtherFinal from './components/otherFinal'
import Media from './components/mediaController'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router >
          <Switch history>
            <Route exact path='/' component={Home} ></Route>
            <Route path='/profession' component={Profession} ></Route>
            <Route path='/teacher' component={Teacher} ></Route>
            <Route path='/teacherFinal' component={TeacherFinal} ></Route>
            <Route path='/other' component={Other} ></Route>
            <Route path='/otherFinal' component={OtherFinal} ></Route>
          </Switch>
        </Router>
        <Media ></Media>
      </React.Fragment>

    );
  }
}

export default App;
