import React from 'react';
import Config from 'react-native-config';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue'
    }}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>You are in {Config.CONFIG_STAGE} stage.</Text>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>{Config.API_URL}</Text>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>{Config.GOOGLE_MAPS_API_KEY}</Text>
    </View>
  )
};

export default App;
