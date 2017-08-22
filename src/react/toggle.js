import React from 'react';

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    let initialState = true;
    if(props.initialState && props.initialState === 'off'){
      initialState = false;
    }
    this.state = {isToggleOn: initialState};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

