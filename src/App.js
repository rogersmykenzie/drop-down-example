import React from 'react';
import logo from './logo.svg';
import './reset.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: 'drop-down-menu'
    }
  }

  handleClick = () => {
    if(this.state.menuStatus === 'drop-down-menu-open') {
      this.setState({menuStatus: 'drop-down-menu-closed'});
    } else {
      this.setState({menuStatus: 'drop-down-menu-open'});
    }
  }

  render() {
    return (
      <nav>
        <ul>
          <div>
            <li>Start Bootstrap</li>
          </div>
          <li className='menu-text'>Home</li>
          <li className='menu-text'>About</li>
          <li className='menu-text'>Services</li>
          <li className='menu-text'>Contact</li>
          <li>
            <img 
            onClick={this.handleClick}
            src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" 
            alt="ham_menu" />
          </li>
          <div className={this.state.menuStatus}>

          </div>
        </ul>
      </nav>
    )
  }
};


export default App;
