import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  state = {
    theme: 'theme-red',
  }

  changeTheme = () => {
    const { theme: currentTheme } = this.state;
    switch (currentTheme) {
      case 'theme-red':
        return this.setState({ theme: 'theme-blue' });
      case 'theme-blue':
        return this.setState({ theme: 'theme-red' });
      default: return null;
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        state: this.state,
        changeTheme: this.changeTheme,
      }}>
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    console.log('App has rendered!');
    return (
      <ThemeProvider>
        <div className="App">
          <div>
            <h2>How to develop your React Superpowers</h2>
            <h3>with the Context API</h3>
          </div>
            <h4>App Scope</h4>
            <Dashboard />
        </div>
      </ThemeProvider>
    );
  }
}

const Dashboard = () => {
  return (
    <div>
      <div className="control-panel">
        <h4>Dashboard</h4>
        <Widget />
      </div>
    </div>
  )
}

const Widget = () => {
  return (
    <div className="themes-toolbar">
      <h4>Widget</h4>
      <div>
        <Button />
      </div>
    </div>
  )
}

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
          <>
            <button
              className={`btn ${context.state.theme}`}
              onClick={context.changeTheme}>
              Change Theme
            </button>
          </>
        )
      }
    </ThemeContext.Consumer>
  )}

export default App;
