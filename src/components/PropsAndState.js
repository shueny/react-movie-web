import React, {Component} from 'react';
class PropsAndState extends Component {
  render() {
    return <Alpha />;
  }
}

export default PropsAndState;

//Alpha class
class Alpha extends Component {
  //   constructor() {
  //     super(props);

  //     state = {alphaValue: 'this is Alpha data', counter: 1};
  //   }
  // 跟上者的寫法用法是同樣意思
  state = {alphaValue: 'this is Alpha data', counter: 1};
  clickButton = () => {
    const {counter} = this.state;
    console.log('click');
    console.log(counter);
    let copyCounter = counter;
    copyCounter += 1;

    this.setState({counter: copyCounter});
  };
  render() {
    const {alphaValue} = this.state;
    return (
      <div>
        <button onClick={this.clickButton}>Wow! A Button</button>
        <Beta fromAlpha={alphaValue} />
      </div>
    );
  }
}

// Beta class
class Beta extends Component {
  state = {
    alphaValue: this.props.fromAlpha,
    betaValue: 'This data from Beta',
  };

  render() {
    return <div />;
  }
}
