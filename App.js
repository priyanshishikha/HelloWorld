/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {

  StyleSheet,
  Image
  //View,
  //Text,
  
} from 'react-native';



export default class Bananas extends Component {
  render() {
  //   let pic = {
  //     require ('https://jooinn.com/yes-done-means-tick-symbol-and-ok.html#overlayGallery11_post_53749_yes-done-means-tick-symbol-and-ok.jpg')
  //   };
    return (
  //     <Image source={pic} style={styles.image}/>
  //   );
  // }
  <Image style={styles.image}
   source={require('./tick.jpg')} />
    );
}
}
const styles=StyleSheet.create(
  {
    image:{
      width: 193,
       height: 110
    }
  }
)

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={styles.hello}>
//         <Text>Hello, world!</Text>
//       </View>
//     );
//   }
// }

   

// const styles = StyleSheet.create({
// hello: {
//   flex: 1,
//   justifyContent: "center", 
//   alignItems: "center" 
// }

// }
