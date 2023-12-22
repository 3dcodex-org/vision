import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

function NightVisionCamera() {
   const [nightVisionEnabled, setNightVisionEnabled] = useState(false);

   // Use a different API to capture the image and process it
   // in a way that makes it look like night vision is enabled.
   return (
      <View style={styles.container}>
         <View style={styles.cameraContainer}>

         </View>
         <TouchableOpacity
            style={styles.button}
            onPress={() => setNightVisionEnabled(!nightVisionEnabled)}>
            <Text style={styles.buttonText}>
               {nightVisionEnabled ? 'Disable Night Vision' : 'Enable Night Vision'}
            </Text>
         </TouchableOpacity>
      </View>
   );
}
 const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
  },
  cameraContainer: {
     width: '100%',
     height: '80%',
     backgroundColor: 'black',
     borderRadius: 20,
  },
  button: {
     alignItems: 'center',
     backgroundColor: '#007BFF',
     padding: 10,
     borderRadius: 5,
     marginTop: 20,
  },
  buttonText: {
     color: '#fff',
     fontSize: 16,
  },
 });
 export default NightVisionCamera;