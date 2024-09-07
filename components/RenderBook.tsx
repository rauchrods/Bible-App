import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {bookType} from '../assets/bible_json/en_bbe';

type BookProps = {
  book: bookType;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'HomePage',
    undefined
  >;
};

const RenderBook = ({book, navigation}: BookProps): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('BookPage', book);
      }}>
      <Text style={[styles.heading, textStyle]}>{book.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 12,
  },
  heading: {
    fontSize: 24,
  },
});

export default RenderBook;
