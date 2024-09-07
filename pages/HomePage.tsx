import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import RenderBook from '../components/RenderBook';
import {bookType, en_data_basic} from '../assets/bible_json/en_bbe';

type Props = NativeStackScreenProps<RootStackParamList, 'HomePage'>;

const HomePage: React.FC<Props> = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
  };
  console.log('hello');

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={[backgroundStyle]}>
        <ScrollView>
          {en_data_basic.map((book: bookType, index: number) => (
            <RenderBook book={book} key={index} navigation={navigation} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupies the full screen
    justifyContent: 'center',
    padding: 12,
  },
});
