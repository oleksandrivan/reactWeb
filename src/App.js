import React, { Component } from 'react';
import closed from './images/Closed.png';
import presence from './images/Presence.png';
import open from './images/open.png';
import moving from './images/moving.png';
import './App.css';
import { subscribe } from './Api';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
      image : closed,
    };
  subscribe((err,item) => {
    const type = item.type;

    if(type.localeCompare("Accelerometer") != 0){
      console.log("type",item.type,"value",item.reading.value);
    }else {
      console.log("type",item.type,"value",item.x.value, item.y.value,
    item.z.value);
    }

    if(type.localeCompare("Door") == 0){
      if(item.reading.value == 1){
        this.setState({image:open});
      }else {
        this.setState({image:closed});
      }
    }else if (type.localeCompare("Presence") == 0) {
      if(item.reading.value == 1){
        this.setState({image:presence});
      }else {
        this.setState({image:closed});
      }
    }else if (type.localeCompare("Accelerometer") == 0) {
      this.setState({image:moving});
    }

  });

  }

  render() {
    return (
    <div className="App">
    <img src={this.state.image} className="image" alt="Image State"/>
    </div>
  );
  }
}

export default App;
