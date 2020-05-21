import React from 'react';
import Home from './components/Home'
import Todo from './components/Todo'
import About from './components/About'
import StudentContainer from './components/StudentContainer'
import No from './components/No'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {
  state = {
    students: []
  }
  componentDidMount(){
    fetch("http://localhost:3000/students")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            students: result
          });
        }
      )
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route path='/about/:id' component={About}/>
            <Route path="/todo" render={ (props) => <Todo {...props} />} />
            <Route exact path="/noyall" render={ (props) => <No {...props} />} />
            <Route path="/students" render={ (props) => <StudentContainer {...props} students={this.state.students} /> } />
          </Switch>
        </Router>
      </div>
    )}
}

export default App;
