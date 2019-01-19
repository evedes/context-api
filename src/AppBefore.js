import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

class App extends Component {
  state = {
    theme: 'theme-red',
  }

  changeTheme = () => {
    switch (this.state.theme) {
      case 'theme-red':
        return this.setState({ theme: 'theme-blue' });
      case 'theme-blue':
        return this.setState({ theme: 'theme-red' });
      default: return null;
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>How to develop your React Superpowers</h2>
          <h3>with the Context API</h3>
        </div>
          <h4>App Scope</h4>
          <Dashboard
            changeTheme={this.changeTheme}
            theme={this.state.theme} />
      </div>
    );
  }
}

const Dashboard = props => {
  return (
    <div>
      <div className="control-panel">
        <h4>Dashboard</h4>
        <Widget
          changeTheme={props.changeTheme}
          theme={props.theme} />
      </div>
    </div>
  )
}

const Widget = props => {
  return (
    <div className="themes-toolbar">
      <h4>Widget</h4>
      <div>
        <Button
          changeTheme={props.changeTheme}
          theme={props.theme}
        />
      </div>
    </div>
  )
}

const Button = props => {
  const { theme } = props;
  return (
    <button
      className={`btn ${theme}`}
      onClick={props.changeTheme}>
      Change Theme
    </button>
  )
}

export default App;
