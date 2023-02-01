import React, { Component } from 'react';
import image from './profile/chaima.jpeg'

class App extends Component {
  state = {
    person: {
      fullName: 'Chaimaa Essaalaoui',
      bio: 'fashion designer ',
      image : "profile/chaima.jpeg",
      profession: 'styling '
    },
    show: false,
    time: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ time: state.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(state => ({ show: !state.show }));
  };

  render() {
    const { person, show, time } = this.state;
    return (
      <div className='App' style={{  margin: '10px auto',paddingLeft: 30 }}>
        <button onClick={this.toggleShow}    style={{  margin: '10px auto',paddingLeft: 70 }}>Toggle Show</button>
        {show && (
          <div>
            <h1   style={{  margin: '10px auto',paddingLeft: 30}} >{person.fullName}  </h1>
            <h2   style={{  margin: '10px auto',paddingLeft: 30}}>{person.bio}</h2>
            <img src={image}  style={{ width: 300, height: 300 ,margin: '50px auto', paddingLeft: 30 }}    alt=''/>
            <h3  style={{  margin: '10px auto',paddingLeft: 30}}>   {person.profession}</h3>
          </div>
        )}
              <p  style={{  margin: '10px auto',paddingLeft: 30  }}>Time since last component mount: {time}s</p>
      </div>
    );
  }
}

export default App;
