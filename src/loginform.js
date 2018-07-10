//import liraries
import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

// create a component
class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }
  
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
  }
  render() {
    
    return (
      <LottieView source={require('./animation.json')} progress={this.state.progress} />
    );
  }
}

// define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//   },
// });

//make this component available to the app
export default MyClass;
