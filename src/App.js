import React, {Component} from 'react';
import Heading from './components/Heading';
import Content from './components/Content';
import Sections from './components/Sections';
import Test from './components/test'
import './App.css';
class App extends Component{
  render(){
    return(
      <div className="App">   
              <Heading/>
              <Content/>
              <Sections/>
              <Test/>
          
             
      </div>
    )

  }

}
export default App;