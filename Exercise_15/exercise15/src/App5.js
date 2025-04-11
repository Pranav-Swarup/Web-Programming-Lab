import React, { Component, useState } from 'react';


// LifecycleDemo class component
class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is being created');
  }


  componentDidMount() {
    console.log('componentDidMount: Component mounted to the DOM');
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('componentDidUpdate: Component updated');
    }
  }


  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed');
  }


  render() {
    return (
      <div style={{ border: '2px solid #555', padding: '20px', marginTop: '30px' }}>
        <h3>Lifecycle Demo Component</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment Count
        </button>
      </div>
    );
  }
}


// Parent App component to mount/unmount
export default function App() {
  const [showComponent, setShowComponent] = useState(true);


  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>React Class Component Lifecycle</h2>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Unmount' : 'Mount'} LifecycleDemo
      </button>


      {showComponent && <LifecycleDemo />}
    </div>
  );
}




